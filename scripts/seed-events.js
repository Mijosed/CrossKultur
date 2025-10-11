import { prisma } from '../lib/prisma.js'

// Import des événements existants depuis events.js
const existingEvents = [
  {
    id: 1,
    title: "Winter Cup",
    slug: "winter-cup",
    description: "Tournoi de basket-ball inspiré de Kuroko no Basket et Slam Dunk.",
    shortDescription: "Un tournoi de basket intense avec des équipes inspirées de Kuroko no Basket.",
    fullDescription: "Tournoi de basket-ball inspiré de Kuroko no Basket et Slam Dunk. Des matchs intenses et une ambiance de compétition authentique !",
    date: "2025-11-02",
    status: "upcoming",
    type: "sport",
    category: "sport",
    imageUrl: "/winter_cup.png",
    location: "Le Prisme",
    duration: "Après-midi",
    price: "5",
    participants: 8,
    maxParticipants: 100,
    registeredParticipants: 8,
  },
]

async function seedEvents() {
  try {
    console.log('🌱 Début du peuplement de la base de données...')

    // Supprimer tous les événements existants
    await prisma.event.deleteMany()
    console.log('🗑️ Événements existants supprimés')

    // Créer les nouveaux événements
    for (const eventData of existingEvents) {
      // Convertir les données pour correspondre au schéma Prisma
      const prismaEvent = {
        slug: eventData.slug,
        title: eventData.title,
        description: eventData.fullDescription || eventData.description,
        date: new Date(eventData.date),
        location: eventData.location,
        maxTickets: eventData.maxParticipants,
        price: parseFloat(eventData.price.replace('€', '')) || 0.0,
        imageUrl: eventData.imageUrl || null,
        status: eventData.status
      }

      const createdEvent = await prisma.event.create({
        data: prismaEvent
      })

      console.log(`✅ Événement créé: ${createdEvent.title}`)
    }

    console.log('🎉 Peuplement terminé avec succès!')
    
    // Afficher un résumé
    const totalEvents = await prisma.event.count()
    console.log(`📊 Total d'événements dans la base: ${totalEvents}`)

  } catch (error) {
    console.error('❌ Erreur lors du peuplement:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

// Exécuter le script
seedEvents()