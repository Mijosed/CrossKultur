import { PrismaClient } from '@prisma/client'
import { nanoid } from 'nanoid'
import { Resend } from 'resend'
import QRCode from 'qrcode'

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
  const { eventId, firstName, lastName, email, phone } = body
  
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

    const reservedTickets = eventData.tickets.length
    const availableTickets = eventData.maxTickets - reservedTickets

    if (availableTickets <= 0) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Aucune place disponible pour cet événement'
      })
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
        status: 'valid'
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
    
    const qrCodeDataURL = await QRCode.toDataURL(qrCodeData, {
      width: 200,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    })

    // Envoyer l'email de confirmation avec le billet
    try {
      await resend.emails.send({
        from: 'CrossKultur <noreply@crosskultur.com>',
        to: [ticket.email],
        subject: `Votre billet pour ${ticket.event.title}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #7C3AED; margin: 0;">CrossKultur</h1>
              <p style="color: #666; margin: 5px 0 0 0;">Votre billet électronique</p>
            </div>
            
            <div style="background: linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%); color: white; padding: 25px; border-radius: 12px; margin-bottom: 25px;">
              <h2 style="margin: 0 0 10px 0; font-size: 24px;">${ticket.event.title}</h2>
              <p style="margin: 0; opacity: 0.9; font-size: 16px;">
                ${new Date(ticket.event.date).toLocaleDateString('fr-FR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
              <h3 style="margin: 0 0 15px 0; color: #333;">Détails du participant</h3>
              <p style="margin: 5px 0; color: #666;"><strong>Nom :</strong> ${ticket.firstName} ${ticket.lastName}</p>
              <p style="margin: 5px 0; color: #666;"><strong>Email :</strong> ${ticket.email}</p>
              ${ticket.phone ? `<p style="margin: 5px 0; color: #666;"><strong>Téléphone :</strong> ${ticket.phone}</p>` : ''}
              <p style="margin: 5px 0; color: #666;"><strong>Code du billet :</strong> <code style="background: #e9ecef; padding: 2px 6px; border-radius: 4px; font-family: monospace;">${ticket.ticketCode}</code></p>
            </div>
            
            <div style="text-align: center; margin-bottom: 25px;">
              <h3 style="color: #333; margin-bottom: 15px;">QR Code pour l'entrée</h3>
              <img src="${qrCodeDataURL}" alt="QR Code" style="max-width: 200px; border: 1px solid #ddd; border-radius: 8px;" />
              <p style="color: #666; font-size: 14px; margin-top: 10px;">
                Présentez ce QR code à l'entrée de l'événement
              </p>
            </div>
            
            <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin-bottom: 25px;">
              <h4 style="margin: 0 0 10px 0; color: #1976d2;">Informations importantes</h4>
              <ul style="margin: 0; padding-left: 20px; color: #666;">
                <li>Ce billet est nominatif et non transférable</li>
                <li>Veuillez arriver 15 minutes avant le début de l'événement</li>
                <li>Conservez ce email, il fait office de billet d'entrée</li>
                <li>En cas de problème, contactez-nous à contact@crosskultur.com</li>
              </ul>
            </div>
            
            <div style="text-align: center; border-top: 1px solid #eee; padding-top: 20px; color: #999; font-size: 14px;">
              <p>Merci de votre inscription !</p>
              <p>L'équipe CrossKultur</p>
            </div>
          </div>
        `
      })
    } catch (emailError) {
      console.error('Erreur lors de l\'envoi de l\'email:', emailError)
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