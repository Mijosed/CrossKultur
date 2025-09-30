import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    // Récupérer tous les tickets avec les informations de l'événement
    const tickets = await prisma.ticket.findMany({
      include: {
        event: {
          select: {
            title: true,
            date: true,
            slug: true
          }
        },
        scans: {
          select: {
            scannedAt: true,
            scanType: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    // Statistiques générales
    const stats = {
      totalTickets: tickets.length,
      validTickets: tickets.filter(t => t.status === 'valid').length,
      checkedInTickets: tickets.filter(t => t.scans.some(s => s.scanType === 'checkin')).length,
      cancelledTickets: tickets.filter(t => t.status === 'cancelled').length
    }

    // Grouper par événement
    const eventStats = {}
    tickets.forEach(ticket => {
      if (!eventStats[ticket.eventId]) {
        eventStats[ticket.eventId] = {
          eventTitle: ticket.event.title,
          eventSlug: ticket.event.slug,
          eventDate: ticket.event.date,
          totalRegistrations: 0,
          checkedIn: 0,
          tickets: []
        }
      }
      eventStats[ticket.eventId].totalRegistrations++
      if (ticket.scans.some(s => s.scanType === 'checkin')) {
        eventStats[ticket.eventId].checkedIn++
      }
      eventStats[ticket.eventId].tickets.push(ticket)
    })

    return {
      success: true,
      data: {
        tickets: tickets.map(ticket => ({
          id: ticket.id,
          ticketCode: ticket.ticketCode,
          firstName: ticket.firstName,
          lastName: ticket.lastName,
          email: ticket.email,
          phone: ticket.phone,
          status: ticket.status,
          createdAt: ticket.createdAt,
          event: ticket.event,
          isCheckedIn: ticket.scans.some(s => s.scanType === 'checkin'),
          checkInTime: ticket.scans.find(s => s.scanType === 'checkin')?.scannedAt || null
        })),
        stats,
        eventStats: Object.values(eventStats)
      }
    }
    
  } catch (error) {
    console.error('Erreur lors de la récupération des tickets:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur interne du serveur'
    })
  }
})