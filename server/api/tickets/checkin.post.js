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
  const { qrCodeData } = body
  
  if (!qrCodeData) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Données QR code manquantes'
    })
  }

  try {
    // Parser les données du QR code
    let ticketData
    try {
      ticketData = JSON.parse(qrCodeData)
    } catch (parseError) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Format de QR code invalide'
      })
    }

    const { ticketId, ticketCode, eventId, email } = ticketData

    if (!ticketId || !ticketCode || !eventId || !email) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Données QR code incomplètes'
      })
    }

    // Vérifier que le ticket existe et correspond aux données
    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId },
      include: {
        event: true,
        scans: {
          where: { scanType: 'checkin' },
          orderBy: { scannedAt: 'desc' },
          take: 1
        }
      }
    })

    if (!ticket) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Ticket non trouvé'
      })
    }

    // Vérifier l'intégrité des données
    if (ticket.ticketCode !== ticketCode || 
        ticket.eventId !== eventId || 
        ticket.email !== email) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Données du ticket non valides'
      })
    }

    // Vérifier le statut du ticket
    if (ticket.status !== 'valid') {
      throw createError({
        statusCode: 400,
        statusMessage: 'Ticket annulé ou invalide'
      })
    }

    // Vérifier si le ticket a déjà été scanné
    if (ticket.scans.length > 0) {
      const lastScan = ticket.scans[0]
      return {
        success: false,
        message: 'Ticket déjà scanné',
        alreadyScanned: true,
        ticket: {
          id: ticket.id,
          ticketCode: ticket.ticketCode,
          firstName: ticket.firstName,
          lastName: ticket.lastName,
          eventTitle: ticket.event.title,
          firstScanTime: lastScan.scannedAt
        }
      }
    }

    // Enregistrer le scan
    const scan = await prisma.ticketScan.create({
      data: {
        ticketId: ticket.id,
        scanType: 'checkin',
        scannedAt: new Date()
      }
    })

    return {
      success: true,
      message: 'Check-in réussi !',
      ticket: {
        id: ticket.id,
        ticketCode: ticket.ticketCode,
        firstName: ticket.firstName,
        lastName: ticket.lastName,
        email: ticket.email,
        eventTitle: ticket.event.title,
        scanTime: scan.scannedAt
      }
    }
    
  } catch (error) {
    if (error.statusCode) {
      throw error
    }
    
    console.error('Erreur lors du check-in:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur interne du serveur lors du check-in'
    })
  }
})