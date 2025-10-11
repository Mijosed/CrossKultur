<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
    <!-- Loading State -->
    <div v-if="loading" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mb-4"></div>
        <p class="text-gray-600">Chargement de l'événement...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="!event" class="min-h-screen flex items-center justify-center">
      <div class="text-center bg-white rounded-xl shadow-lg p-8 max-w-md mx-4">
        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Événement introuvable</h3>
        <p class="text-gray-600 mb-6">{{ errorMessage || 'Cet événement n\'existe pas ou n\'est plus disponible.' }}</p>
        <button @click="$router.push('/billetterie')" class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          Retour à la billetterie
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div v-else>
      <!-- Hero Section -->
      <section class="relative overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div class="absolute inset-0 bg-black/20"></div>
          <img 
            v-if="event.imageUrl" 
            :src="event.imageUrl" 
            :alt="event.title"
            class="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          >
        </div>
        
        <!-- Content -->
        <div class="relative z-10 container mx-auto px-4 py-20">
          <div class="max-w-4xl mx-auto text-center text-white">
            <!-- Back Button -->
            <button 
              @click="$router.push('/billetterie')" 
              class="inline-flex items-center mb-6 text-white/80 hover:text-white transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Retour à la billetterie
            </button>

            <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              {{ event.title }}
            </h1>
            
            <p v-if="event.description" class="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              {{ event.description }}
            </p>

            <!-- Event Info Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div class="flex items-center justify-center mb-2">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <p class="text-sm opacity-80">Date</p>
                <p class="font-semibold">{{ formatDate(event.date) }}</p>
              </div>
              
              <div v-if="event.location" class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div class="flex items-center justify-center mb-2">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  </svg>
                </div>
                <p class="text-sm opacity-80">Lieu</p>
                <p class="font-semibold">{{ event.location }}</p>
              </div>
              
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div class="flex items-center justify-center mb-2">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <p class="text-sm opacity-80">Places disponibles</p>
                <p class="font-semibold">100</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Registration Section -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <div class="max-w-2xl mx-auto">
            <!-- Timer avant ouverture de la billetterie -->
            <div v-if="!ticketingOpen && !ticketingClosed" class="bg-white rounded-2xl shadow-xl p-8 text-center mb-8">
              <div class="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6 mb-4">
                <h3 class="text-2xl font-bold text-purple-800 mb-2">
                  La billetterie ouvre dans
                </h3>
                <div class="grid grid-cols-4 gap-2 sm:gap-4 text-center mb-4">
                  <div class="bg-white rounded-lg p-2 sm:p-4 shadow-sm">
                    <div class="text-2xl sm:text-3xl font-bold text-purple-600">{{ timeLeft.days }}</div>
                    <div class="text-xs sm:text-sm text-gray-600">
                      <span class="hidden sm:inline">Jours</span>
                      <span class="sm:hidden">Jr</span>
                    </div>
                  </div>
                  <div class="bg-white rounded-lg p-2 sm:p-4 shadow-sm">
                    <div class="text-2xl sm:text-3xl font-bold text-purple-600">{{ timeLeft.hours }}</div>
                    <div class="text-xs sm:text-sm text-gray-600">
                      <span class="hidden sm:inline">Heures</span>
                      <span class="sm:hidden">Hr</span>
                    </div>
                  </div>
                  <div class="bg-white rounded-lg p-2 sm:p-4 shadow-sm">
                    <div class="text-2xl sm:text-3xl font-bold text-purple-600">{{ timeLeft.minutes }}</div>
                    <div class="text-xs sm:text-sm text-gray-600">
                      <span class="hidden sm:inline">Minutes</span>
                      <span class="sm:hidden">Mn</span>
                    </div>
                  </div>
                  <div class="bg-white rounded-lg p-2 sm:p-4 shadow-sm">
                    <div class="text-2xl sm:text-3xl font-bold text-purple-600">{{ timeLeft.seconds }}</div>
                    <div class="text-xs sm:text-sm text-gray-600">
                      <span class="hidden sm:inline">Secondes</span>
                      <span class="sm:hidden">Sc</span>
                    </div>
                  </div>
                </div>
                <p class="text-purple-700 font-semibold">
                  Ouverture le {{ ticketingStartDate.toLocaleDateString('fr-FR', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric', 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  }) }}
                </p>
              </div>
              <div class="text-gray-600">
                <p class="text-lg mb-2">Soyez prêts pour l'ouverture !</p>
                <p>Les places sont limitées et partent très vite.</p>
              </div>
            </div>

            <!-- CTA Billetterie (après ouverture) -->
            <div v-else-if="ticketingOpen && !ticketingClosed" class="bg-white rounded-xl shadow-lg overflow-hidden">
              <!-- CTA Header -->
              <div class="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white text-center">
                <h2 class="text-2xl font-bold mb-2">Réservez votre place</h2>
                <div class="inline-flex items-center bg-white/20 rounded-lg px-4 py-2">
                  <span class="text-2xl font-bold mr-2">5€</span>
                  <span class="text-purple-100">par billet</span>
                </div>
              </div>

              <!-- CTA Content -->
              <div class="p-6 text-center">
                <!-- Message principal -->
                <p class="text-gray-700 font-medium mb-4">Billets pour regarder l'événement Winter Cup</p>
                
                <!-- Infos compactes -->
                <div class="flex flex-col sm:flex-row justify-center gap-4 mb-6 text-sm text-gray-600">
                  <div class="flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Dimanche 2 novembre à 14h</span>
                  </div>
                  <div class="flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    </svg>
                    <span>Le Prisme</span>
                  </div>
                  <div class="flex items-center justify-center">
                    <svg class="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <span>Places limitées</span>
                  </div>
                </div>

                <!-- CTA Principal -->
                <a 
                  href="https://www.billetweb.fr/winter-cup"
                  target="_blank"
                  class="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-bold py-4 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4"
                >
                  Réserver ma place
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>

                <!-- Info sécurité -->
                <div class="flex items-center justify-center text-xs text-gray-400">
                  <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                  <span>Paiement sécurisé • Billet électronique envoyé par email</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Configuration de la billetterie
const ticketingStartDate = ref(new Date('2025-10-12T18:00:00')) // Date d'ouverture de la billetterie
const ticketingEndDate = ref(new Date('2025-11-02T23:59:59'))   // Date de fermeture de la billetterie
const currentTime = ref(new Date())
let timerInterval = null

// État du timer et de la billetterie
const timeLeft = computed(() => {
  const diff = ticketingStartDate.value.getTime() - currentTime.value.getTime()
  
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  
  return { days, hours, minutes, seconds }
})

const ticketingOpen = computed(() => {
  return currentTime.value >= ticketingStartDate.value && currentTime.value <= ticketingEndDate.value
})

const ticketingClosed = computed(() => {
  return currentTime.value > ticketingEndDate.value
})

// State
const event = ref(null)
const loading = ref(true)
const errorMessage = ref('')

// Methods
const loadEvent = async () => {
  try {
    loading.value = true
    const response = await $fetch('/api/events/winter-cup')
    
    if (response && response.success && response.event) {
      event.value = response.event
    } else {
      event.value = null
      errorMessage.value = 'Événement non trouvé'
    }
  } catch (error) {
    event.value = null
    errorMessage.value = error.message || 'Erreur de chargement'
  } finally {
    loading.value = false
  }
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const formattedDate = date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  return `${formattedDate} à 14h`
}

// Plus besoin de fonction de soumission - redirection vers billetterie externe

// SEO
useSeoMeta({
  title: 'Winter Cup - Billetterie Cross Kultur ',
  description: 'Tournoi de basket-ball inspiré de Kuroko no Basket et Slam Dunk'
})

// Lifecycle
onMounted(() => {
  loadEvent()
  
  // Démarrer le timer
  timerInterval = setInterval(() => {
    currentTime.value = new Date()
  }, 1000)
})

onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval)
  }
})
</script>