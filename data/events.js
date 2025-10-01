// Données centralisées des événements Cross Kultur 
export const events = [
  {
    id: 1,
    title: "FFI Edition n°1",
    slug: "ffi-edition-1",
    description: "Tournoi de football inspiré des plus grands mangas de ce genre.",
    shortDescription: "Un tournoi de football épique où les équipes s'affrontent dans des matchs inspirés des plus grands mangas de sport.",
    fullDescription: "Première édition de notre tournoi Football Frontier International, inspiré d'Inazuma Eleven. Les équipes s'affrontent dans des matchs palpitants avec une ambiance digne des plus grands tournois manga.",
    date: "2025-07-19",
    status: "past",
    type: "sport",
    category: "sport",
    imageUrl: "/ffi1.jpg",
    location: "Ile de France",
    duration: "Week-end complet",
    price: "30€",
    participants: 44,
    maxParticipants: 44,
    registeredParticipants: 44,
  },
  {
    id: 2,
    title: "FFI Edition n°1 All-Stars",
    slug: "ffi-edition-1-allstars",
    description: "Match All-Stars réunissant les meilleurs joueurs de la première édition du tournoi.",
    shortDescription: "Un affrontement épique entre les meilleurs joueurs de la première édition FFI.",
    fullDescription: "Match spécial réunissant les joueurs les plus talentueux de la première édition FFI. Une rencontre exceptionnelle avec une ambiance électrisante.",
    date: "2025-08-25",
    status: "past",
    type: "sport",
    category: "sport",
    imageUrl: "/all_stars.jpeg",
    location: "Ile de France",
    duration: "Après-midi",
    price: "15€",
    participants: 22,
    maxParticipants: 22,
    registeredParticipants: 22,
  },
  {
    id: 3,
    title: "Winter Cup",
    slug: "winter-cup",
    description: "Tournoi de basket inspiré des plus grands mangas de ce genre.",
    shortDescription: "Compétition de basket-ball mettant en avant des équipes inspirées de Kuroko no Basket.",
    fullDescription: "Tournoi de basket-ball inspiré de Kuroko no Basket et Slam Dunk. Des matchs intenses avec des défis d'adresse et une ambiance de compétition authentique.",
    date: "2025-11-01",
    status: "upcoming",
    type: "sport",
    category: "sport",
    imageUrl: "/winter_cup.png",
    location: "Ile de France",
    duration: "Après-midi",
    price: "20€",
    participants: 60,
    maxParticipants: 60,
    registeredParticipants: 60,
  },
  {
    id: 4,
    title: "FFI Edition n°2",
    slug: "ffi-edition-2",
    description: "Deuxième édition du tournoi de football inspiré des plus grands mangas de ce genre.",
    shortDescription: "La suite tant attendue de notre tournoi FFI avec de nouvelles équipes.",
    fullDescription: "Deuxième édition du Football Frontier International avec encore plus d'équipes et des défis inédits. Préparez-vous à vivre une expérience football manga encore plus intense !",
    status: "upcoming",
    type: "sport",
    category: "sport",
    imageUrl: "/ffi.jpeg",
    location: "Ile de France",
    duration: "Après-midi",
    price: "35€",
    participants: 66,
    maxParticipants: 66,
    registeredParticipants: 12,
  },
  {
    id: 5,
    title: "Balle au Prisonnier",
    slug: "balle-au-prisonnier",
    description: "Tournoi de balle au prisonnier inspiré des plus grands mangas de ce genre.",
    shortDescription: "Un tournoi de balle au prisonnier épique en mode Greed Island !",
    fullDescription: "Première édition de notre tournoi de balle au prisonnier, inspiré d'Hunter x Hunter. Les équipes s'affrontent dans des matchs palpitants avec une ambiance digne des plus grands tournois manga.",
    status: "upcoming",
    type: "sport",  
    category: "sport",
    imageUrl: "/balle_prison.jpg",
    location: "Ile de France",
    duration: "Après-midi",
    participants: 64,
    maxParticipants: 64,
    registeredParticipants: 0,
  },
]

// Fonction pour obtenir un événement par ID
export const getEventById = (id) => {
  return events.find(event => event.id === id)
}

// Fonction pour obtenir un événement par slug
export const getEventBySlug = (slug) => {
  return events.find(event => event.slug === slug)
}

// Fonction pour filtrer les événements par statut
export const getEventsByStatus = (status) => {
  if (status === 'all') return events
  return events.filter(event => event.status === status)
}

// Fonction pour obtenir les événements à venir (limité)
export const getUpcomingEvents = (limit = 3) => {
  return events
    .filter(event => event.status === 'upcoming')
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, limit)
}

// Fonction pour obtenir les événements par catégorie
export const getEventsByCategory = (category) => {
  return events.filter(event => event.category === category)
}
