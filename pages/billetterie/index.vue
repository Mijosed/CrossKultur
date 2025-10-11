<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 py-20">
      <div class="container mx-auto px-4">
        <div class="text-center text-white">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            Billetterie 
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Réservez votre place pour nos événements <br>
            Inscription sécurisée.
          </p>
          <div class="flex justify-center items-center space-x-8 text-sm opacity-80">
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z"></path>
              </svg>
              Billet électronique
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Événements -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Événements disponibles</h2>
          <p class="text-xl text-gray-600">Découvrez nos prochains événements et réservez vos places !</p>
        </div>

        <!-- Loading -->
        <div v-if="loading" class="flex items-center justify-center py-12">
          <div class="text-center">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mb-4"></div>
            <p class="text-gray-600">Chargement des événements...</p>
          </div>
        </div>

        <!-- Events Grid -->
        <div v-else-if="events && events.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="event in events" 
            :key="event.id"
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <!-- Image -->
            <div class="relative h-48 bg-gradient-to-br from-purple-500 to-blue-600">
              <img 
                v-if="event.imageUrl" 
                :src="event.imageUrl" 
                :alt="event.title"
                class="absolute inset-0 w-full h-full object-cover"
              >
              <div class="absolute top-4 left-4">
                <span 
                  :class="getStatusBadgeClass(event.status, event.availableTickets)"
                  class="px-3 py-1 rounded-full text-sm font-medium"
                >
                  {{ getStatusText(event.status, event.availableTickets) }}
                </span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">{{ event.title }}</h3>
              <p class="text-gray-600 mb-4 line-clamp-2">{{ event.description }}</p>
              
              <!-- Info -->
              <div class="space-y-2 mb-6">
                <div class="flex items-center text-gray-500 text-sm">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  {{ formatDate(event.date) }}
                </div>
                <div v-if="event.location" class="flex items-center text-gray-500 text-sm">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  </svg>
                  {{ event.location }}
                </div>
                <div class="flex items-center text-gray-500 text-sm">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  {{ event.availableTickets }} place{{ event.availableTickets > 1 ? 's' : '' }} disponible{{ event.availableTickets > 1 ? 's' : '' }}
                </div>
              </div>

              <!-- Prix et bouton -->
              <div class="flex items-center justify-between">
                <div class="text-2xl font-bold text-purple-600">
                  {{ event.price === 0 ? 'Gratuit' : `${event.price}€` }}
                </div>
                
                <button
                  @click="goToEvent(event.slug)"
                  :disabled="event.availableTickets === 0"
                  :class="event.availableTickets === 0 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-purple-600 text-white hover:bg-purple-700'"
                  class="px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  {{ event.availableTickets === 0 ? 'Complet' : 'Réserver' }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Aucun événement -->
        <div v-else class="text-center py-12">
          <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a1 1 0 001 1h1a1 1 0 001-1V7a2 2 0 00-2-2H5zM5 14a2 2 0 00-2 2v3a1 1 0 001 1h1a1 1 0 001-1v-3a2 2 0 00-2-2H5z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-600 mb-2">Aucun événement disponible</h3>
          <p class="text-gray-500">De nouveaux événements seront bientôt disponibles !</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// State
const events = ref([])
const loading = ref(true)

// Methods
const loadEvents = async () => {
  try {
    loading.value = true
    
    const response = await $fetch('/api/events')
    
    if (response && response.success && response.events) {
      events.value = response.events
    } else {
      events.value = []
    }
  } catch (error) {
    events.value = []
  } finally {
    loading.value = false
  }
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const formattedDate = date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  return `${formattedDate} à 14h`
}

const getStatusBadgeClass = (status, availableTickets) => {
  if (availableTickets === 0) return 'bg-red-500 text-white'
  if (status === 'upcoming') return 'bg-green-500 text-white'
  if (status === 'active') return 'bg-blue-500 text-white'
  return 'bg-gray-500 text-white'
}

const getStatusText = (status, availableTickets) => {
  if (availableTickets === 0) return 'Complet'
  if (status === 'upcoming') return 'Bientôt'
  if (status === 'active') return 'En cours'
  return 'Disponible'
}

const goToEvent = (slug) => {
  navigateTo(`/billetterie/${slug}`)
}

// SEO
useSeoMeta({
  title: 'Billetterie - Cross Kultur ',
  description: 'Réservez votre place pour nos événements. Inscription gratuite !',
})

// Lifecycle
    onMounted(() => {
  loadEvents()
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>