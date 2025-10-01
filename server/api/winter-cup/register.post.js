import { PrismaClient } from '@prisma/client'
import { Resend } from 'resend'

const prisma = new PrismaClient()
const resend = new Resend(process.env.RESEND_API_KEY)

export default defineEventHandler(async (event) => {
  if (getMethod(event) !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Méthode non autorisée'
    })
  }

  const body = await readBody(event)
  const { type, eventSlug, username, socialNetwork, socialHandle, email, participationMode, highlightsLink } = body

  if (!type || !eventSlug || !username || !socialNetwork || !socialHandle || !email) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Données manquantes'
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
    // Vérifier si l'email n'est pas déjà inscrit
    const existingRegistration = await prisma.winterCupRegistration.findFirst({
      where: {
        email: email,
        eventSlug: eventSlug
      }
    })

    if (existingRegistration) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Cet email est déjà inscrit pour cet événement'
      })
    }

    // Créer l'inscription
    const registration = await prisma.winterCupRegistration.create({
      data: {
        type,
        eventSlug,
        username,
        socialNetwork,
        socialHandle,
        email,
        participationMode: participationMode || null,
        highlightsLink: highlightsLink || null,
        status: 'pending'
      }
    })

    // Préparer les emails
    const isCreator = type === 'creator'
    const participantTypeText = isCreator ? 'Créateur de contenu' : 'Abonné'
    
    // Email de confirmation au participant
    const confirmationEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #7C3AED; margin: 0;">CrossKultur</h1>
          <p style="color: #666; margin: 5px 0 0 0;">Winter Cup 2025</p>
        </div>
        
        <div style="background: linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%); color: white; padding: 25px; border-radius: 12px; margin-bottom: 25px;">
          <h2 style="margin: 0 0 10px 0; font-size: 24px;">Inscription confirmée ! 🏀</h2>
          <p style="margin: 0; opacity: 0.9; font-size: 16px;">
            Votre inscription à la Winter Cup a été reçue avec succès.
          </p>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
          <h3 style="color: #7C3AED; margin: 0 0 15px 0;">Récapitulatif de votre inscription</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Type :</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${participantTypeText}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Nom d'utilisateur :</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${username}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Réseau social :</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${socialNetwork}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Profil :</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${socialHandle}</td>
            </tr>
            ${!isCreator && participationMode ? `
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Mode de participation :</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${participationMode === 'drive' ? 'Google Drive' : 'TikTok avec #wintercup2025'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Lien :</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="${highlightsLink}" style="color: #7C3AED;">${highlightsLink}</a></td>
            </tr>
            ` : ''}
          </table>
        </div>
        
        <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin-bottom: 25px;">
          <h4 style="margin: 0 0 10px 0; color: #1976d2;">📅 Prochaines étapes</h4>
          <ul style="margin: 0; padding-left: 20px; color: #666;">
            <li>Nous examinerons votre inscription sous 48h</li>
            <li>Vous recevrez un email de validation avec tous les détails</li>
            <li>Date de l'événement : 1er Novembre 2025</li>
            <li>Lieu : Île de France (détails à venir)</li>
          </ul>
        </div>
        
        <div style="text-align: center; border-top: 1px solid #eee; padding-top: 20px; color: #999; font-size: 14px;">
          <p>Merci de votre participation !</p>
          <p>L'équipe CrossKultur</p>
          <p>Pour toute question : <a href="mailto:contact@crosskultur.fr" style="color: #7C3AED;">contact@crosskultur.fr</a></p>
        </div>
      </div>
    `

    // Email de notification à l'équipe
    const notificationEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #7C3AED;">Nouvelle inscription Winter Cup</h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3>Détails du participant</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Type :</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${participantTypeText}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Nom d'utilisateur :</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${username}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email :</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Réseau social :</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${socialNetwork}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Profil :</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${socialHandle}</td>
            </tr>
            ${!isCreator && participationMode ? `
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Mode de participation :</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${participationMode === 'drive' ? 'Google Drive' : 'TikTok avec #wintercup2025'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Lien :</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="${highlightsLink}">${highlightsLink}</a></td>
            </tr>
            ` : ''}
          </table>
        </div>
        
        <p>Inscription reçue le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}</p>
      </div>
    `

    // Envoyer les emails
    try {
      // Email de confirmation au participant
      await resend.emails.send({
        from: 'CrossKultur <contact@crosskultur.fr>',
        to: [email],
        subject: 'Inscription Winter Cup - Confirmation reçue',
        html: confirmationEmailHtml
      })

      // Email de notification à l'équipe
      await resend.emails.send({
        from: 'CrossKultur <contact@crosskultur.fr>',
        to: ['contact@crosskultur.fr'],
        subject: `Nouvelle inscription Winter Cup - ${participantTypeText}`,
        html: notificationEmailHtml
      })
    } catch (emailError) {
      console.error('❌ [EMAIL] Erreur lors de l\'envoi des emails:', emailError)
      // On continue même si l'email échoue, l'inscription est créée
    }

    return {
      success: true,
      message: 'Inscription réussie ! Vous recevrez bientôt un email de confirmation.',
      registration: {
        id: registration.id,
        type: registration.type,
        username: registration.username,
        email: registration.email
      }
    }

  } catch (error) {
    if (error.statusCode) {
      throw error
    }
    
    console.error('❌ [WINTER_CUP] Erreur lors de l\'inscription:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur interne du serveur lors de l\'inscription'
    })
  }
})