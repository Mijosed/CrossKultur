<template>
  <div class="py-12 bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-gray-800 mb-6">Roadmap des Événements</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez notre planning d'événements passés, en cours et à venir. 
          Suivez l'évolution de Cross Kultur  et ne ratez aucune aventure !
        </p>
      </div>

      <!-- Filtres -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          @click="filterEvents('all')"
          :class="['px-6 py-3 rounded-full font-medium transition-all duration-300', 
                   activeFilter === 'all' ? 'bg-purple-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-purple-50']">
          Tous les événements
        </button>
        <button 
          @click="filterEvents('upcoming')"
          :class="['px-6 py-3 rounded-full font-medium transition-all duration-300', 
                   activeFilter === 'upcoming' ? 'bg-purple-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-purple-50']">
          À venir
        </button>
        <button 
          @click="filterEvents('ongoing')"
          :class="['px-6 py-3 rounded-full font-medium transition-all duration-300', 
                   activeFilter === 'ongoing' ? 'bg-purple-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-purple-50']">
          En cours
        </button>
        <button 
          @click="filterEvents('past')"
          :class="['px-6 py-3 rounded-full font-medium transition-all duration-300', 
                   activeFilter === 'past' ? 'bg-purple-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-purple-50']">
          Passés
        </button>
      </div>

      <!-- Timeline -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Ligne centrale -->
        <div class="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 via-pink-500 to-purple-600 rounded-full"></div>

        <!-- Événements -->
        <div class="space-y-12">
          <div 
            v-for="(event, index) in filteredEvents" 
            :key="event.id"
            :class="['timeline-event relative flex items-center', index % 2 === 0 ? 'flex-row' : 'flex-row-reverse']"
            @click="selectEvent(event)"
          >
            <!-- Point sur la timeline -->
            <div class="timeline-dot absolute left-1/2 transform -translate-x-1/2 z-10">
              <div :class="[
                'w-6 h-6 rounded-full border-4 border-white shadow-lg cursor-pointer transition-all duration-300 hover:scale-125',
                getEventStatusColor(event.status)
              ]"></div>
            </div>

            <!-- Carte d'événement avec EventCard -->
            <div :class="[
              'w-5/12 timeline-card-container',
              index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'
            ]">
              <EventCard
                :title="event.title"
                :description="event.description"
                :image-gradient="event.imageGradient"
                :image-url="event.imageUrl"
                :status="event.status"
                :date="event.date"
                :location="event.location"
                :participants="event.participants"
                :tags="event.tags"
                :action-text="'Voir détails'"
                @click="selectEvent(event)"
                class="timeline-card border-l-4 border-purple-500"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { events } from '~/data/events.js'

// Métadonnées de la page
useSeoMeta({
  title: 'Roadmap - Cross Kultur ',
  ogTitle: 'Roadmap - Cross Kultur ',
  description: 'Découvrez la roadmap des événements Cross Kultur . Événements passés, en cours et à venir.',
  ogDescription: 'Découvrez la roadmap des événements Cross Kultur . Événements passés, en cours et à venir.',
})

// État réactif
const activeFilter = ref('all')

// Utilisation des données centralisées
const allEvents = ref(events)


// Événements filtrés
const filteredEvents = computed(() => {
  if (activeFilter.value === 'all') return allEvents.value
  return allEvents.value.filter(event => event.status === activeFilter.value)
})

// Méthodes
const filterEvents = (filter) => {
  activeFilter.value = filter
}

const selectEvent = (event) => {
  // Navigation vers la page de détail de l'événement
  navigateTo(`/evenements/${event.slug}`)
}

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('fr-FR', options)
}

const getEventStatusColor = (status) => {
  switch (status) {
    case 'upcoming': return 'bg-blue-500'
    case 'ongoing': return 'bg-green-500'
    case 'past': return 'bg-gray-400'
    default: return 'bg-purple-500'
  }
}



// Statistiques calculées dynamiquement
const stats = computed(() => ({
  totalEvents: allEvents.value.length,
  totalParticipants: allEvents.value.reduce((total, event) => total + event.participants, 0),
  upcomingEvents: allEvents.value.filter(event => event.status === 'upcoming').length,
  communityMembers: 120
}))
</script>

<style scoped>
/* Améliorations pour les cartes de timeline */
.timeline-card-container {
  position: relative;
  z-index: 2;
}

.timeline-card {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.timeline-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px) scale(1.02);
}

/* Timeline styling */
.timeline-line {
  z-index: 1;
}

.timeline-dot {
  z-index: 5;
}

/* Responsive design pour mobile */
@media (max-width: 768px) {
  /* Masquer la ligne centrale sur mobile */
  .timeline-line {
    display: none;
  }
  
  /* Repositionner les dots sur mobile */
  .timeline-dot {
    position: static !important;
    transform: none !important;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  /* Réorganiser les événements en colonne sur mobile */
  .timeline-event {
    flex-direction: column !important;
    align-items: center !important;
  }
  
  /* Cartes en pleine largeur sur mobile */
  .timeline-card-container {
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    max-width: 400px;
  }
  
  /* Ajuster l'espacement entre les événements */
  .space-y-12 > * + * {
    margin-top: 2rem !important;
  }
}

/* Amélioration de la ligne de timeline pour desktop */
@media (min-width: 769px) {
  .timeline-line {
    z-index: 1;
  }
  
  .timeline-dot {
    z-index: 5;
  }
}
</style>