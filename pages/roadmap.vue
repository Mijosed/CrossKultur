<template>
  <div class="py-12 bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-gray-800 mb-6">Roadmap des Événements</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez notre planning d'événements passés, en cours et à venir. 
          Suivez l'évolution de CrossKultur et ne ratez aucune aventure !
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
        <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 via-pink-500 to-purple-600 rounded-full"></div>

        <!-- Événements -->
        <div class="space-y-12">
          <div 
            v-for="(event, index) in filteredEvents" 
            :key="event.id"
            :class="['relative flex items-center', index % 2 === 0 ? 'flex-row' : 'flex-row-reverse']"
            @click="selectEvent(event)"
          >
            <!-- Point sur la timeline -->
            <div class="absolute left-1/2 transform -translate-x-1/2 z-10">
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

    <!-- Modal de détail d'événement -->
    <div v-if="selectedEvent" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" @click="closeModal">
      <div class="bg-white rounded-xl max-w-2xl w-full max-h-96 overflow-y-auto" @click.stop>
        <div class="p-6">
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-2xl font-bold text-gray-800">{{ selectedEvent.title }}</h3>
            <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <p class="text-gray-600 mb-4">{{ selectedEvent.fullDescription }}</p>
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Date:</strong> {{ formatDate(selectedEvent.date) }}
            </div>
            <div>
              <strong>Statut:</strong> {{ getEventStatusText(selectedEvent.status) }}
            </div>
            <div v-if="selectedEvent.location">
              <strong>Lieu:</strong> {{ selectedEvent.location }}
            </div>
            <div v-if="selectedEvent.participants">
              <strong>Participants:</strong> {{ selectedEvent.participants }}
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
  title: 'Roadmap - CrossKultur',
  ogTitle: 'Roadmap - CrossKultur',
  description: 'Découvrez la roadmap des événements CrossKultur. Événements passés, en cours et à venir.',
  ogDescription: 'Découvrez la roadmap des événements CrossKultur. Événements passés, en cours et à venir.',
})

// État réactif
const activeFilter = ref('all')
const selectedEvent = ref(null)

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
  selectedEvent.value = event
}

const closeModal = () => {
  selectedEvent.value = null
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

const getEventStatusBadge = (status) => {
  switch (status) {
    case 'upcoming': return 'bg-blue-100 text-blue-700'
    case 'ongoing': return 'bg-green-100 text-green-700'
    case 'past': return 'bg-gray-100 text-gray-700'
    default: return 'bg-purple-100 text-purple-700'
  }
}

const getEventStatusText = (status) => {
  switch (status) {
    case 'upcoming': return 'À venir'
    case 'ongoing': return 'En cours'
    case 'past': return 'Terminé'
    default: return 'Inconnu'
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
  z-index: 1;
}

.timeline-card {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.timeline-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px) scale(1.02);
}

/* Animation au scroll pour les cartes */
@media (max-width: 768px) {
  .relative.flex.items-center {
    flex-direction: column !important;
  }
  .w-5\/12 {
    width: 100% !important;
    padding: 0 !important;
    margin: 1rem 0 !important;
  }
  .timeline-card-container {
    width: 100% !important;
    padding: 0 !important;
    margin: 1rem 0 !important;
  }
}

/* Amélioration de la ligne de timeline */
.absolute.left-1\/2 {
  z-index: 5;
}
</style>