import { PrismaClient } from '@prisma/client'
import { nanoid } from 'nanoid'
import { Resend } from 'resend'
import QRCode from 'qrcode'
import PDFDocument from 'pdfkit'

const prisma = new PrismaClient()
const resend = new Resend(process.env.RESEND_API_KEY)

export default defineEventHandler(async (event) => {  
  // Vérifier la méthode HTTP
  if (getMethod(event) !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Méthode non autorisée'
    })
  }

  const body = await readBody(event)  
  // Validation des données requises
  const { eventId, firstName, lastName, email, phone, isAdminTicket } = body
  
  if (!eventId || !firstName || !lastName || !email) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Données manquantes (eventId, firstName, lastName, email requis)'
    })
  }

  // Validation de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Format d\'email invalide'
    })
  }

  try {
    // Vérifier que l'événement existe et a des places disponibles
    const eventData = await prisma.event.findUnique({
      where: { id: eventId },
      include: {
        tickets: {
          select: { id: true }
        }
      }
    })

    if (!eventData) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Événement non trouvé'
      })
    }

    // Si c'est un billet admin, on ne vérifie pas les places disponibles
    if (!isAdminTicket) {
      // Compter seulement les billets non-admin pour les places publiques
      const publicTickets = eventData.tickets.filter(ticket => ticket.type !== 'admin').length
      const availableTickets = eventData.maxTickets - publicTickets

      if (availableTickets <= 0) {
        throw createError({
          statusCode: 400,
          statusMessage: 'Aucune place disponible pour cet événement'
        })
      }
    }

    // Vérifier si l'email n'est pas déjà inscrit pour cet événement
    const existingTicket = await prisma.ticket.findFirst({
      where: {
        eventId: eventId,
        email: email
      }
    })

    if (existingTicket) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Cet email est déjà inscrit pour cet événement'
      })
    }

    // Générer un code de ticket unique
    const ticketCode = nanoid(12).toUpperCase()

    // Créer le ticket
    const ticket = await prisma.ticket.create({
      data: {
        eventId: eventId,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone || null,
        ticketCode: ticketCode,
        status: 'valid',
        type: isAdminTicket ? 'admin' : 'public'
      },
      include: {
        event: true
      }
    })

    // Générer le QR code pour le ticket
    const qrCodeData = JSON.stringify({
      ticketId: ticket.id,
      ticketCode: ticket.ticketCode,
      eventId: ticket.eventId,
      email: ticket.email
    })
    
    // Générer le QR code comme data URL pour l'intégrer dans le PDF
    const qrCodeDataURL = await QRCode.toDataURL(qrCodeData, {
      width: 200,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    })

    // Créer le PDF du billet
    const createTicketPDF = () => {
      return new Promise((resolve, reject) => {
        try {
          const doc = new PDFDocument({ size: 'A4', margin: 50 })
          const chunks = []
          
          doc.on('data', chunk => chunks.push(chunk))
          doc.on('end', () => resolve(Buffer.concat(chunks)))
          doc.on('error', reject)

          // En-tête avec logo Winter Cup
          try {
            // Ajouter le logo Winter Cup (centré : 595/2 - 60 = 237.5, arrondi à 238)
            doc.image('https://www.crosskultur.fr/winter_logo.png', 238, 40, { width: 120, height: 120 })
          } catch (logoError) {
            console.log('Logo non trouvé, continuation sans logo')
          }
          
          doc.fontSize(24)
             .fillColor('#7C3AED')
             .text('Cross Kultur', 50, 170, { align: 'center' })
          
          doc.fontSize(16)
             .fillColor('#666666')
             .text('Billet Électronique', 50, 200, { align: 'center' })

          // Ligne de séparation
          doc.moveTo(50, 230)
             .lineTo(545, 230)
             .strokeColor('#7C3AED')
             .lineWidth(2)
             .stroke()

          // Informations de l'événement
          const startY = 260
          doc.fontSize(22)
             .fillColor('#333333')
             .text(ticket.event.title, 50, startY, { width: 400 })

          doc.fontSize(14)
             .fillColor('#666666')
             .text(`Date: ${new Date(ticket.event.date).toLocaleDateString('fr-FR', {
               weekday: 'long',
               year: 'numeric',
               month: 'long',
               day: 'numeric'
             })}`, 50, startY + 40)

          doc.text(`Heure: 14:00`, 50, startY + 60)

          if (ticket.event.location) {
            doc.text(`Lieu: ${ticket.event.location}`, 50, startY + 80)
          }

          // Informations du participant
          doc.fontSize(16)
             .fillColor('#7C3AED')
             .text('Informations du participant', 50, startY + 120)

          doc.fontSize(12)
             .fillColor('#333333')
             .text(`Nom: ${ticket.firstName} ${ticket.lastName}`, 50, startY + 145)
             .text(`Email: ${ticket.email}`, 50, startY + 165)

          if (ticket.phone) {
            doc.text(`Téléphone: ${ticket.phone}`, 50, startY + 185)
          }

          doc.text(`Code du billet: ${ticket.ticketCode}`, 50, ticket.phone ? startY + 205 : startY + 185)

          // QR Code
          const qrY = ticket.phone ? startY + 240 : startY + 220
          doc.fontSize(16)
             .fillColor('#7C3AED')
             .text('QR Code d\'entrée', 50, qrY)

          // Convertir le data URL en buffer et l'ajouter au PDF
          const base64Data = qrCodeDataURL.replace(/^data:image\/png;base64,/, '')
          const qrBuffer = Buffer.from(base64Data, 'base64')
          doc.image(qrBuffer, 50, qrY + 25, { width: 150, height: 150 })

          // Instructions
          doc.fontSize(14)
             .fillColor('#7C3AED')
             .text('Instructions importantes', 220, qrY + 25)

          doc.fontSize(10)
             .fillColor('#333333')
             .text('• Présentez ce billet à l\'entrée de l\'événement', 220, qrY + 50)
             .text('• Conservez ce document sur votre téléphone', 220, qrY + 70)
             .text('• Contact: contact@crosskultur.fr', 220, qrY + 90)

          // Pied de page
          doc.fontSize(10)
             .fillColor('#999999')
             .text('Merci de votre inscription !', 50, 750, { align: 'center' })
             .text('L\'équipe Cross Kultur', 50, 765, { align: 'center' })

          // Bordure décorative
          doc.rect(40, 40, 515, 755)
             .strokeColor('#7C3AED')
             .lineWidth(1)
             .stroke()

          doc.end()
        } catch (error) {
          reject(error)
        }
      })
    }

    const ticketPDFBuffer = await createTicketPDF()

    // Envoyer l'email de confirmation avec le billet
    try {
      const emailResult = await resend.emails.send({
        from: 'Cross Kultur  <contact@crosskultur.fr>',
        to: [ticket.email],
        subject: `Votre billet pour la ${ticket.event.title}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #7C3AED; margin: 0;">Cross Kultur </h1>
              <p style="color: #666; margin: 5px 0 0 0;">Votre billet électronique</p>
            </div>
            
            <div style="background: linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%); color: white; padding: 25px; border-radius: 12px; margin-bottom: 25px;">
              <h2 style="margin: 0 0 10px 0; font-size: 24px;">${ticket.event.title}</h2>
              <p style="margin: 0; opacity: 0.9; font-size: 16px;">
              dimanche 2 novembre 2025 à 14:00
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
              <h3 style="margin: 0 0 15px 0; color: #333;">Détails du participant</h3>
              <p style="margin: 5px 0; color: #666;"><strong>Nom :</strong> ${ticket.firstName} ${ticket.lastName}</p>
              <p style="margin: 5px 0; color: #666;"><strong>Email :</strong> ${ticket.email}</p>
              ${ticket.phone ? `<p style="margin: 5px 0; color: #666;"><strong>Téléphone :</strong> ${ticket.phone}</p>` : ''}
              <p style="margin: 5px 0; color: #666;"><strong>Code du billet :</strong> <code style="background: #e9ecef; padding: 2px 6px; border-radius: 4px; font-family: monospace;">${ticket.ticketCode}</code></p>
            </div>
            
            <div style="text-align: center; margin-bottom: 25px;">
              <div style="background: #f0f9ff; border: 2px dashed #0ea5e9; border-radius: 12px; padding: 20px;">
                <h3 style="color: #0c4a6e; margin: 0 0 10px 0;">🎫 Votre billet électronique</h3>
                <p style="color: #0369a1; font-size: 16px; margin: 0 0 10px 0;">
                  <strong>Votre billet complet est en pièce jointe de cet email</strong>
                </p>
                <p style="color: #075985; font-size: 14px; margin: 0;">
                  📎 Téléchargez le fichier PDF "billet-${ticket.ticketCode}.pdf" ci-joint<br>
                  📱 Présentez-le à l'entrée de l'événement ou montrez le QR code qu'il contient
                </p>
              </div>
            </div>
            
            <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin-bottom: 25px;">
              <h4 style="margin: 0 0 10px 0; color: #1976d2;">📋 Instructions importantes</h4>
              <ul style="margin: 0; padding-left: 20px; color: #666;">
                <li><strong>Billet PDF :</strong> Téléchargez la pièce jointe PDF et présentez-la à l'entrée</li>
                <li><strong>QR Code :</strong> Le QR code est intégré dans le PDF pour un accès facile</li>
                <li><strong>Sauvegarde :</strong> Conservez ce PDF sur votre téléphone et/ou imprimez-le</li>
                <li><strong>Contact :</strong> En cas de problème, contactez-nous à contact@crosskultur.fr</li>
              </ul>
            </div>
            
            <div style="text-align: center; border-top: 1px solid #eee; padding-top: 20px; color: #999; font-size: 14px;">
              <p>Merci de votre inscription !</p>
              <p>L'équipe Cross Kultur </p>
            </div>
          </div>
        `,
        attachments: [
          {
            filename: `billet-${ticket.ticketCode}.pdf`,
            content: ticketPDFBuffer,
            content_type: 'application/pdf',
            disposition: 'attachment'
          }
        ]
      })
    } catch (emailError) {
      console.error('❌ [EMAIL] Erreur lors de l\'envoi de l\'email:', emailError)
      // On continue même si l'email échoue, le ticket est créé
    }
    
    
    return {
      success: true,
      message: 'Inscription réussie ! Votre billet vous a été envoyé par email.',
      ticket: {
        id: ticket.id,
        ticketCode: ticket.ticketCode,
        eventTitle: ticket.event.title,
        eventDate: ticket.event.date,
        firstName: ticket.firstName,
        lastName: ticket.lastName
      }
    }
    
  } catch (error) {
    if (error.statusCode) {
      throw error
    }
    
    console.error('Erreur lors de l\'inscription:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur interne du serveur lors de l\'inscription'
    })
  }
})