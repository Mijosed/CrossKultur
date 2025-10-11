import { prisma } from '~/lib/prisma.js'

export default defineEventHandler(async (event) => {
  try {
    // Récupérer tous les événements avec le nombre de billets disponibles
    const events = await prisma.event.findMany({
      include: {
        tickets: {
          where: {
            status: 'valid',
            type: 'public'
          }
        },
        _count: {
          select: {
            tickets: {
              where: {
                status: 'valid',
                type: 'public'
              }
            }
          }
        }
      },
      orderBy: {
        date: 'asc'
      }
    })

    // Calculer les places disponibles pour chaque événement
    const eventsWithAvailability = events.map(event => ({
      id: event.id,
      slug: event.slug,
      title: event.title,
      description: event.description,
      date: event.date,
      location: event.location,
      maxTickets: event.maxTickets,
      price: event.price,
      imageUrl: event.imageUrl,
      status: event.status,
      createdAt: event.createdAt,
      availableTickets: Math.max(0, event.maxTickets - event._count.tickets),
      reservedTickets: event._count.tickets
    }))

    return {
      success: true,
      events: eventsWithAvailability,
      total: eventsWithAvailability.length
    }

  } catch (error) {
    console.error('Erreur lors de la récupération des événements:', error)
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur lors de la récupération des événements'
    })
  }
})