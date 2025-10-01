<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm border-b">
      <div class="container mx-auto px-4 py-4 sm:py-6">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 class="text-2xl sm:text-3xl font-bold text-gray-800">Administration</h1>
            <p class="text-gray-600 mt-1 text-sm sm:text-base">Gestion des inscriptions et des événements</p>
          </div>
          <div class="flex flex-col sm:flex-row gap-2">
            <button 
              @click="logout"
              class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base order-3 sm:order-1"
            >
              🔒 Déconnexion
            </button>
            <button 
              @click="$router.push('/scanner')"
              class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base order-1 sm:order-2"
            >
              🔍 Scanner QR
            </button>
            <button 
              @click="$router.push('/billetterie')"
              class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base order-2 sm:order-3"
            >
              🎫 Billetterie
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="flex items-center justify-center py-12">
      <div class="text-center">
        <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mb-4"></div>
        <p class="text-gray-600">Chargement des données...</p>
      </div>
    </div>

    <!-- Content -->
    <div v-else class="container mx-auto px-4 py-8">
      <!-- Statistiques -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-xl shadow-lg p-6">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a1 1 0 001 1h1a1 1 0 001-1V7a2 2 0 00-2-2H5zM5 14a2 2 0 00-2 2v3a1 1 0 001 1h1a1 1 0 001-1v-3a2 2 0 00-2-2H5z"></path>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm text-gray-600">Total inscriptions</p>
              <p class="text-2xl font-bold text-gray-800">{{ stats.totalTickets }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-6">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm text-gray-600">Billets valides</p>
              <p class="text-2xl font-bold text-gray-800">{{ stats.validTickets }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-6">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm text-gray-600">Check-ins</p>
              <p class="text-2xl font-bold text-gray-800">{{ stats.checkedInTickets }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-6">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm text-gray-600">Annulés</p>
              <p class="text-2xl font-bold text-gray-800">{{ stats.cancelledTickets }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Initialisation base de données -->
      <div v-if="eventStats.length === 0 && !loading" class="bg-white rounded-xl shadow-lg mb-8">
        <div class="p-6 border-b border-gray-200">
          <h2 class="text-xl font-bold text-gray-800">Initialisation</h2>
        </div>
        <div class="p-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-800 mb-2">Aucun événement trouvé</h3>
            <p class="text-gray-600 mb-6">Initialisez la base de données pour créer l'événement Winter Cup.</p>
            
            <button 
              @click="initDatabase"
              :disabled="isInitializing"
              :class="isInitializing ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'"
              class="text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <span v-if="isInitializing" class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Initialisation...
              </span>
              <span v-else>
                🚀 Initialiser la base de données
              </span>
            </button>
            
            <!-- Message de retour -->
            <div v-if="initMessage" class="mt-4 p-3 rounded-lg text-sm" :class="initMessage.includes('Erreur') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'">
              {{ initMessage }}
            </div>
          </div>
        </div>
      </div>

      <!-- Statistiques par événement -->
      <div v-if="eventStats.length > 0" class="bg-white rounded-xl shadow-lg mb-8">
        <div class="p-6 border-b border-gray-200">
          <h2 class="text-xl font-bold text-gray-800">Statistiques par événement</h2>
        </div>
        <div class="p-6">
          <div class="grid grid-cols-1 gap-4">
            <div v-for="eventStat in eventStats" :key="eventStat.eventSlug" class="border rounded-lg p-4">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <h3 class="font-semibold text-gray-800">{{ eventStat.eventTitle }}</h3>
                  <p class="text-sm text-gray-600">{{ formatDate(eventStat.eventDate) }}</p>
                </div>
                <div class="text-right">
                  <div class="text-sm text-gray-600">Check-ins</div>
                  <div class="text-lg font-bold text-purple-600">
                    {{ eventStat.checkedIn }}/{{ eventStat.totalRegistrations }}
                  </div>
                </div>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div 
                  class="bg-purple-600 h-2 rounded-full" 
                  :style="{ width: `${eventStat.totalRegistrations ? (eventStat.checkedIn / eventStat.totalRegistrations) * 100 : 0}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Liste des inscriptions -->
      <div class="bg-white rounded-xl shadow-lg">
        <div class="p-6 border-b border-gray-200">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-bold text-gray-800">Toutes les inscriptions</h2>
            <button 
              @click="refreshData"
              class="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <svg class="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              Actualiser
            </button>
          </div>
        </div>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Participant
                </th>
                <th class="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Événement
                </th>
                <th class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Code
                </th>
                <th class="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th class="hidden lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Check-in
                </th>
                <th class="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Inscription
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="ticket in tickets" :key="ticket.id" class="hover:bg-gray-50">
                <td class="px-3 sm:px-6 py-4">
                  <div>
                    <div class="text-sm font-medium text-gray-900">
                      {{ ticket.firstName }} {{ ticket.lastName }}
                    </div>
                    <div class="text-xs text-gray-500">{{ ticket.email }}</div>
                    <div v-if="ticket.phone" class="text-xs text-gray-500">{{ ticket.phone }}</div>
                    <!-- Infos mobiles -->
                    <div class="sm:hidden mt-2 space-y-1">
                      <div class="text-xs text-gray-500">{{ ticket.event.title }}</div>
                      <div class="text-xs text-gray-400">{{ formatDate(ticket.event.date) }}</div>
                    </div>
                  </div>
                </td>
                <td class="hidden sm:table-cell px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ ticket.event.title }}</div>
                  <div class="text-sm text-gray-500">{{ formatDate(ticket.event.date) }}</div>
                </td>
                <td class="px-3 sm:px-6 py-4 whitespace-nowrap">
                  <span class="px-2 py-1 text-xs font-mono bg-gray-100 rounded">
                    {{ ticket.ticketCode }}
                  </span>
                </td>
                <td class="px-3 sm:px-6 py-4 whitespace-nowrap">
                  <span 
                    :class="ticket.status === 'valid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                  >
                    {{ ticket.status === 'valid' ? '✓' : '✗' }}
                  </span>
                  <!-- Info mobile -->
                  <div class="lg:hidden mt-1">
                    <div v-if="ticket.isCheckedIn" class="flex items-center text-green-600">
                      <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span class="text-xs">Arrivé</span>
                    </div>
                    <div v-else class="text-gray-400 text-xs">
                      En attente
                    </div>
                  </div>
                </td>
                <td class="hidden lg:table-cell px-6 py-4 whitespace-nowrap">
                  <div v-if="ticket.isCheckedIn" class="flex items-center text-green-600">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span class="text-xs">{{ formatDateTime(ticket.checkInTime) }}</span>
                  </div>
                  <div v-else class="text-gray-400 text-xs">
                    Pas encore arrivé
                  </div>
                </td>
                <td class="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ formatDateTime(ticket.createdAt) }}
                </td>
              </tr>
            </tbody>
          </table>
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
const tickets = ref([])
const stats = ref({})
const eventStats = ref([])
const loading = ref(true)
const isInitializing = ref(false)
const initMessage = ref('')

// Methods
const loadData = async () => {
  try {
    loading.value = true
    const data = await $fetch('/api/admin/tickets')
    
    if (data.success) {
      tickets.value = data.data.tickets
      stats.value = data.data.stats
      eventStats.value = data.data.eventStats
    }
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error)
  } finally {
    loading.value = false
  }
}

const refreshData = () => {
  loadData()
}

const logout = () => {
  const isAuthenticated = useCookie('admin-authenticated')
  isAuthenticated.value = false
  navigateTo('/admin/login')
}

const initDatabase = async () => {
  if (isInitializing.value) return
  
  const confirmed = confirm('Voulez-vous initialiser la base de données avec l\'événement Winter Cup ?')
  if (!confirmed) return
  
  try {
    isInitializing.value = true
    initMessage.value = ''
    
    const response = await $fetch('/api/admin/init-db', {
      method: 'POST',
      body: { pin: '0192' }
    })
    
    if (response.success) {
      initMessage.value = response.message
      if (!response.alreadyExists) {
        // Recharger les données pour afficher le nouvel événement
        await loadData()
      }
    }
  } catch (error) {
    console.error('Erreur initialisation:', error)
    initMessage.value = 'Erreur: ' + (error.data?.message || error.message || 'Erreur inconnue')
  } finally {
    isInitializing.value = false
  }
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const formatDateTime = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// SEO
useSeoMeta({
  title: 'Administration - Cross Kultur ',
  description: 'Panneau d\'administration pour la gestion des inscriptions',
  robots: 'noindex'
})

// Lifecycle
onMounted(() => {
  loadData()
})
</script>

<style scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>