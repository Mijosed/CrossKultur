export default defineEventHandler(async (event) => {
  // Vérifier la méthode HTTP
  if (getMethod(event) !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Méthode non autorisée'
    })
  }

  const body = await readBody(event)
  const { pin } = body

  // Validation
  if (!pin) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Code PIN requis'
    })
  }

  // Vérifier le PIN depuis la configuration Nuxt
  const config = useRuntimeConfig()
  const adminPin = config.adminPin

  if (!adminPin) {
    console.error('ADMIN_PIN non défini dans la configuration')
    throw createError({
      statusCode: 500,
      statusMessage: 'Configuration serveur manquante'
    })
  }

  // Comparer les PINs (conversion en string pour être sûr)
  const pinStr = String(pin).trim()
  const adminPinStr = String(adminPin).trim()
  
  if (pinStr === adminPinStr) {
    return {
      success: true,
      message: 'Authentification réussie'
    }
  } else {
    // Log des tentatives d'accès non autorisées (en production)
    console.warn(`Tentative d'accès admin non autorisée à ${new Date().toISOString()}`)
    
    return {
      success: false,
      message: 'Code PIN incorrect'
    }
  }
})