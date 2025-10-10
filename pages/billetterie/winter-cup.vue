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
                <p class="font-semibold">200</p>
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
            <div v-if="!ticketingOpen && !ticketingClosed && !registrationSuccess" class="bg-white rounded-2xl shadow-xl p-8 text-center mb-8">
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

            <!-- Billetterie fermée (après la date limite) -->
            <div v-else-if="ticketingClosed && !registrationSuccess" class="bg-white rounded-2xl shadow-xl p-8 text-center mb-8">
              <div class="bg-gradient-to-r from-red-100 to-pink-100 rounded-xl p-6 mb-4">
                <h3 class="text-2xl font-bold text-red-800 mb-2">
                  <span class="mr-2">🔒</span> Billetterie fermée
                </h3>
                <p class="text-red-700">
                  Les inscriptions pour la Winter Cup sont maintenant fermées.
                </p>
              </div>
              <button @click="$router.push('/billetterie')" class="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Retour à la billetterie
              </button>
            </div>

            <!-- Success State -->
            <div v-else-if="registrationSuccess" class="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Inscription réussie ! 🎉</h3>
              <p class="text-gray-600 mb-6">
                Votre billet vous a été envoyé par email. Vérifiez votre boîte de réception et vos spams.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button @click="$router.push('/billetterie')" class="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Retour à la billetterie
                </button>
                <button @click="registrationSuccess = false; form = { firstName: '', lastName: '', email: '', phone: '' }" class="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                  Nouvelle inscription
                </button>
              </div>
            </div>

            <!-- Registration Form (seulement si billetterie ouverte) -->
            <div v-else-if="ticketingOpen && !ticketingClosed" class="bg-white rounded-2xl shadow-xl overflow-hidden">
              <!-- Form Header -->
              <div class="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white text-center">
                <h2 class="text-3xl font-bold mb-2">Inscription gratuite</h2>
                <p class="opacity-90">Réservez votre place en quelques clics</p>
                <div class="mt-4 text-2xl font-bold">
                  {{ event.price === 0 ? 'GRATUIT' : `${event.price}€` }}
                </div>
              </div>

              <!-- Form Content -->
              <div class="p-8">
                <!-- Error Message -->
                <div v-if="errorMessage" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  <div class="flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {{ errorMessage }}
                  </div>
                </div>

                <!-- Form -->
                <form @submit.prevent="submitRegistration" class="space-y-6">
                  <!-- First Name -->
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">
                      Prénom <span class="text-red-500">*</span>
                    </label>
                    <input 
                      v-model="form.firstName" 
                      type="text" 
                      required 
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Votre prénom"
                    >
                  </div>

                  <!-- Last Name -->
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">
                      Nom <span class="text-red-500">*</span>
                    </label>
                    <input 
                      v-model="form.lastName" 
                      type="text" 
                      required 
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Votre nom"
                    >
                  </div>

                  <!-- Email -->
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">
                      Email <span class="text-red-500">*</span>
                    </label>
                    <input 
                      v-model="form.email" 
                      type="email" 
                      required 
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="votre@email.com"
                    >
                    <p class="text-sm text-gray-500 mt-1">Votre billet sera envoyé à cette adresse</p>
                  </div>

                  <!-- Phone (Optional) -->
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone <span class="text-gray-400">(optionnel)</span>
                    </label>
                    <input 
                      v-model="form.phone" 
                      type="tel" 
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="06 12 34 56 78"
                    >
                  </div>

                  <!-- Terms -->
                  <div class="bg-gray-50 rounded-lg p-4">
                    <p class="text-sm text-gray-600">
                      En vous inscrivant, vous acceptez de recevoir des informations concernant cet événement. 
                      Vos données personnelles sont traitées de manière confidentielle.
                    </p>
                  </div>

                  <!-- Submit Button -->
                  <button 
                    type="submit" 
                    :disabled="isSubmitting || event.availableTickets === 0"
                    :class="event.availableTickets === 0 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'"
                    class="w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all transform hover:scale-[1.02] disabled:hover:scale-100 disabled:cursor-not-allowed"
                  >
                    <span v-if="isSubmitting" class="flex items-center justify-center">
                      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Inscription en cours...
                    </span>
                    <span v-else-if="event.availableTickets === 0">
                      Événement complet
                    </span>
                    <span v-else>
                      🎫 S'inscrire gratuitement
                    </span>
                  </button>
                </form>
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
const isSubmitting = ref(false)
const registrationSuccess = ref(false)
const errorMessage = ref('')

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
})

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

const submitRegistration = async () => {
  if (!event.value) return
  
  isSubmitting.value = true
  errorMessage.value = ''
  
  try {
    const response = await $fetch('/api/tickets/register', {
      method: 'POST',
      body: {
        eventId: event.value.id,
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        email: form.value.email,
        phone: form.value.phone
      }
    })
    
    if (response.success) {
      registrationSuccess.value = true
      await loadEvent()
    }
    
  } catch (error) {
    errorMessage.value = error.data?.message || 'Une erreur est survenue lors de l\'inscription.'
  } finally {
    isSubmitting.value = false
  }
}

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