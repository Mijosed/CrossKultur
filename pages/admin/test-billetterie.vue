<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm border-b">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold text-gray-800">Test Billetterie</h1>
            <p class="text-gray-600 mt-1">Interface de test pour l'envoi de billets (bypass timer)</p>
          </div>
          <div class="flex gap-2">
            <button @click="$router.push('/admin')" class="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              ← Retour Admin
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-2xl mx-auto">
        <!-- Loading State -->
        <div v-if="loading" class="bg-white rounded-xl shadow-lg p-8 text-center">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mb-4"></div>
          <p class="text-gray-600">Chargement de l'événement...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="!event" class="bg-white rounded-xl shadow-lg p-8 text-center">
          <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Événement Winter Cup non trouvé</h3>
          <p class="text-gray-600 mb-6">Veuillez d'abord initialiser la base de données dans l'admin.</p>
          <button @click="$router.push('/admin')" class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Aller à l'admin
          </button>
        </div>

        <!-- Success State -->
        <div v-else-if="registrationSuccess" class="bg-white rounded-xl shadow-lg p-8 text-center">
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Billet créé avec succès ! 🎉</h3>
          <p class="text-gray-600 mb-6">Le billet PDF a été envoyé par email à l'adresse indiquée.</p>
          <div class="bg-gray-50 rounded-lg p-4 mb-6">
            <p class="text-sm text-gray-700"><strong>Code du billet :</strong> <code class="bg-gray-200 px-2 py-1 rounded font-mono">{{ lastTicketCode }}</code></p>
          </div>
          <button @click="resetForm" class="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Créer un autre billet
          </button>
        </div>

        <!-- Registration Form -->
        <div v-else class="bg-white rounded-xl shadow-lg overflow-hidden">
          <!-- Form Header -->
          <div class="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white text-center">
            <h2 class="text-2xl font-bold mb-2">Test - Création de Billet</h2>
            <p class="opacity-90">{{ event.title }}</p>
            <div class="mt-3 text-sm opacity-80">
              📅 {{ formatDate(event.date) }} • 📍 {{ event.location || 'Lieu à définir' }}
            </div>
          </div>

          <!-- Form Content -->
          <div class="p-6">
            <!-- Alert Info -->
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div class="text-blue-700 text-sm">
                  <p class="font-medium mb-1">Interface de test administrateur</p>
                  <p>Cette interface bypass les restrictions de timer pour tester l'envoi d'emails et la génération de billets PDF.</p>
                </div>
              </div>
            </div>

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
                  placeholder="Prénom du participant"
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
                  placeholder="Nom du participant"
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
                  placeholder="email@exemple.com"
                >
                <p class="text-sm text-gray-500 mt-1">Le billet PDF sera envoyé à cette adresse</p>
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

              <!-- Test Warning -->
              <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.l732 4.5c-.77-.833-.77-1.167 0-2L18.268 8.5c.77-.833 1.732.167 1.732 1.5H5.732z"></path>
                  </svg>
                  <div class="text-yellow-700 text-sm">
                    <p class="font-medium">Mode test</p>
                    <p>Un vrai billet sera créé et envoyé par email. Utilisez une adresse email de test.</p>
                  </div>
                </div>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all transform hover:scale-[1.02] disabled:hover:scale-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span v-if="isSubmitting" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Création du billet...
                </span>
                <span v-else>
                  🎫 Créer le billet de test
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Protection avec middleware
definePageMeta({
  middleware: 'admin'
})

// State
const event = ref(null)
const loading = ref(true)
const isSubmitting = ref(false)
const registrationSuccess = ref(false)
const errorMessage = ref('')
const lastTicketCode = ref('')

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
    }
  } catch (error) {
    event.value = null
    console.error('Erreur lors du chargement de l\'événement:', error)
  } finally {
    loading.value = false
  }
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
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
        phone: form.value.phone,
        isAdminTicket: true
      }
    })
    
    if (response.success) {
      lastTicketCode.value = response.ticket.ticketCode
      registrationSuccess.value = true
    }
    
  } catch (error) {
    errorMessage.value = error.data?.message || 'Une erreur est survenue lors de la création du billet.'
    console.error('Erreur création billet:', error)
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  registrationSuccess.value = false
  lastTicketCode.value = ''
  errorMessage.value = ''
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }
}

// SEO
useSeoMeta({
  title: 'Test Billetterie - Admin Cross Kultur',
  description: 'Interface de test pour la billetterie',
  robots: 'noindex'
})

// Lifecycle
onMounted(() => {
  loadEvent()
})
</script>