import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  
  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Slug de l\'événement requis'
    })
  }

  try {
    // Rechercher l'événement par slug
    const eventData = await prisma.event.findUnique({
      where: {
        slug: slug
      },
      include: {
        tickets: {
          select: {
            id: true
          }
        }
      }
    })

    if (!eventData) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Événement non trouvé'
      })
    }

    // Calculer les places disponibles
    const reservedTickets = eventData.tickets.length
    const availableTickets = eventData.maxTickets - reservedTickets

    // Préparer la réponse
    const response = {
      ...eventData,
      reservedTickets,
      availableTickets,
      tickets: undefined // Ne pas exposer les détails des tickets
    }

    return {
      success: true,
      event: response
    }
    
  } catch (error) {
    if (error.statusCode) {
      throw error
    }
    
    console.error('Erreur lors de la récupération de l\'événement:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur interne du serveur'
    })
  }
})