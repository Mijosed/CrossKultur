import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const ticketCode = getRouterParam(event, 'code')
  
  if (!ticketCode) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Code de billet requis'
    })
  }

  try {
    // Rechercher le ticket par code
    const ticket = await prisma.ticket.findFirst({
      where: {
        ticketCode: ticketCode.toUpperCase()
      },
      include: {
        event: {
          select: {
            id: true,
            title: true,
            date: true
          }
        }
      }
    })

    if (!ticket) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Ticket non trouvé'
      })
    }

    return {
      success: true,
      ticket: {
        id: ticket.id,
        ticketCode: ticket.ticketCode,
        firstName: ticket.firstName,
        lastName: ticket.lastName,
        email: ticket.email,
        eventId: ticket.eventId,
        status: ticket.status,
        event: ticket.event
      }
    }
    
  } catch (error) {
    if (error.statusCode) {
      throw error
    }
    
    console.error('Erreur lors de la récupération du ticket:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur interne du serveur'
    })
  }
})