import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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

  // Validation du PIN admin
  if (!pin) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Code PIN requis'
    })
  }

  // Vérifier le PIN depuis la configuration Nuxt
  const config = useRuntimeConfig()
  const adminPin = config.adminPin

  if (!adminPin || String(pin).trim() !== String(adminPin).trim()) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Non autorisé'
    })
  }

  try {
    console.log('🌱 Initialisation de la base de données...')

    // Vérifier si l'événement existe déjà
    const existingEvent = await prisma.event.findUnique({
      where: { slug: 'winter-cup' }
    })

    if (existingEvent) {
      return {
        success: true,
        message: 'Base de données déjà initialisée',
        event: existingEvent,
        alreadyExists: true
      }
    }

    // Créer l'événement Winter Cup
    const event = await prisma.event.create({
      data: {
        slug: 'winter-cup',
        title: 'Winter Cup',
        description: 'Tournoi de basket-ball inspiré de mangas tel que Kuroko no Basket et Slam Dunk.',
        date: new Date('2025-11-01T13:00:00.000Z'),
        location: 'Ile-de-France',
        maxTickets: 200,
        price: 0.0,
        imageUrl: '/winter_cup.png',
        status: 'upcoming'
      }
    })

    console.log('✅ Événement Winter Cup créé:', event.title)

    return {
      success: true,
      message: 'Base de données initialisée avec succès !',
      event: {
        id: event.id,
        title: event.title,
        slug: event.slug,
        date: event.date,
        maxTickets: event.maxTickets
      }
    }

  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation:', error)
    
    throw createError({
      statusCode: 500,
      statusMessage: `Erreur lors de l'initialisation: ${error.message}`
    })
  } finally {
    await prisma.$disconnect()
  }
})