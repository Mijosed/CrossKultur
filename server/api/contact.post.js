import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validation des données
    const { firstName, lastName, email, phone, subject, message } = body
    
    if (!firstName || !lastName || !email || !subject || !message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Tous les champs obligatoires doivent être remplis'
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

    // Mapping des sujets pour l'affichage
    const subjectLabels = {
      'inscription': 'Inscription à un événement',
      'information': 'Demande d\'information',
      'partenariat': 'Proposition de partenariat',
      'benevole': 'Devenir bénévole',
      'suggestion': 'Suggestion d\'événement',
      'autre': 'Autre'
    }

    const subjectLabel = subjectLabels[subject] || subject

    // Template email pour Cross Kultur 
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nouveau message de contact - Cross Kultur </title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
              background-color: #f7fafc;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: white;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 600;
            }
            .content {
              padding: 30px;
            }
            .field {
              margin-bottom: 20px;
              padding-bottom: 15px;
              border-bottom: 1px solid #e2e8f0;
            }
            .field:last-child {
              border-bottom: none;
              margin-bottom: 0;
            }
            .label {
              font-weight: 600;
              color: #4a5568;
              margin-bottom: 5px;
              display: block;
            }
            .value {
              color: #2d3748;
              font-size: 16px;
            }
            .message-content {
              background-color: #f7fafc;
              padding: 20px;
              border-radius: 6px;
              border-left: 4px solid #667eea;
              white-space: pre-wrap;
            }
            .footer {
              background-color: #f7fafc;
              padding: 20px;
              text-align: center;
              color: #718096;
              font-size: 14px;
            }
            .badge {
              display: inline-block;
              background-color: #667eea;
              color: white;
              padding: 4px 12px;
              border-radius: 20px;
              font-size: 14px;
              font-weight: 500;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>💬 Nouveau message de contact</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Reçu depuis le site Cross Kultur </p>
            </div>
            
            <div class="content">
              <div class="field">
                <span class="label">👤 Contact</span>
                <div class="value">${firstName} ${lastName}</div>
              </div>
              
              <div class="field">
                <span class="label">📧 Email</span>
                <div class="value">
                  <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                </div>
              </div>
              
              ${phone ? `
              <div class="field">
                <span class="label">📱 Téléphone</span>
                <div class="value">${phone}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <span class="label">🏷️ Sujet</span>
                <div class="value">
                  <span class="badge">${subjectLabel}</span>
                </div>
              </div>
              
              <div class="field">
                <span class="label">💬 Message</span>
                <div class="message-content">${message}</div>
              </div>
            </div>
            
            <div class="footer">
              <p>Ce message a été envoyé depuis le formulaire de contact de <strong>Cross Kultur </strong></p>
              <p style="margin-top: 10px;">
                Répondez directement à cet email pour contacter ${firstName} ${lastName}
              </p>
            </div>
          </div>
        </body>
      </html>
    `

    // Template email de confirmation pour l'utilisateur
    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Message bien reçu - Cross Kultur </title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
              background-color: #f7fafc;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: white;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
              background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
              color: white;
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 600;
            }
            .content {
              padding: 30px;
            }
            .footer {
              background-color: #f7fafc;
              padding: 20px;
              text-align: center;
              color: #718096;
              font-size: 14px;
            }
            .social-links {
              margin-top: 20px;
            }
            .social-links a {
              display: inline-block;
              margin: 0 10px;
              color: #667eea;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Message bien reçu !</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Merci de nous avoir contactés</p>
            </div>
            
            <div class="content">
              <p>Bonjour <strong>${firstName}</strong>,</p>
              
              <p>Nous avons bien reçu votre message concernant : <strong>${subjectLabel}</strong></p>
              
              <p>Notre équipe va examiner votre demande et vous répondra dans les plus brefs délais (généralement sous 24h).</p>
              
              <p>En attendant, n'hésitez pas à :</p>
              <ul>
                <li>🎮 Consulter nos <strong>prochains événements</strong> sur notre site</li>
                <li>👥 Rejoindre notre <strong>communauté Discord</strong></li>
                <li>📸 Nous suivre sur <strong>Instagram</strong> et <strong>TikTok</strong></li>
              </ul>
              
              <p>À très bientôt dans l'aventure Cross Kultur  ! 🚀</p>
              
              <p style="margin-top: 30px;">
                L'équipe Cross Kultur <br>
                <em>Là où manga et sport se rencontrent</em>
              </p>
            </div>
            
            <div class="footer">
              <p><strong>Cross Kultur </strong> - Association d'événements manga et sport</p>
              <div class="social-links">
                <a href="https://www.instagram.com/crosskultur.fr/">Instagram</a>
                <a href="https://www.tiktok.com/@ffi_officiel">TikTok</a>
                <a href="https://discord.gg/mT3SZ85K">Discord</a>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Envoi de l'email à Cross Kultur 
    const { data: mainEmail, error: mainError } = await resend.emails.send({
      from: 'Cross Kultur  Contact <contact@crosskultur.fr>',
      to: ['contact@crosskultur.fr'],
      replyTo: email,
      subject: `[Contact] ${subjectLabel} - ${firstName} ${lastName}`,
      html: htmlContent,
      text: `
Nouveau message de contact Cross Kultur 

Nom: ${firstName} ${lastName}
Email: ${email}
${phone ? `Téléphone: ${phone}` : ''}
Sujet: ${subjectLabel}

Message:
${message}

---
Répondez directement à cet email pour contacter ${firstName} ${lastName}
      `.trim()
    })

    if (mainError) {
      console.error('Erreur envoi email principal:', mainError)
      throw createError({
        statusCode: 500,
        statusMessage: 'Erreur lors de l\'envoi de l\'email'
      })
    }

    // Envoi de l'email de confirmation à l'utilisateur
    const { data: confirmEmail, error: confirmError } = await resend.emails.send({
      from: 'Cross Kultur  <contact@crosskultur.fr>',
      to: [email],
      subject: `✅ Message bien reçu - Cross Kultur `,
      html: confirmationHtml,
      text: `
Bonjour ${firstName},

Nous avons bien reçu votre message concernant : ${subjectLabel}

Notre équipe va examiner votre demande et vous répondra dans les plus brefs délais (généralement sous 24h).

En attendant, n'hésitez pas à :
- Consulter nos prochains événements sur notre site
- Rejoindre notre communauté Discord
- Nous suivre sur Instagram et TikTok

À très bientôt dans l'aventure Cross Kultur  !

L'équipe Cross Kultur 
Là où manga et sport se rencontrent

---
Cross Kultur  - Association d'événements manga et sport
Instagram: https://www.instagram.com/crosskultur.fr/
TikTok: https://www.tiktok.com/@ffi_officiel
Discord: https://discord.gg/mT3SZ85K
      `.trim()
    })

    // On continue même si l'email de confirmation échoue
    if (confirmError) {
      console.warn('Erreur envoi email confirmation:', confirmError)
    }

    return {
      success: true,
      message: 'Message envoyé avec succès',
      emailId: mainEmail?.id
    }

  } catch (error) {
    console.error('Erreur API contact:', error)
    
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Erreur interne du serveur'
    })
  }
})