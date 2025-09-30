<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm border-b">
      <div class="container mx-auto px-4 py-4 sm:py-6">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 class="text-2xl sm:text-3xl font-bold text-gray-800">Scanner QR Code</h1>
            <p class="text-gray-600 mt-1 text-sm sm:text-base">Check-in des participants aux événements</p>
          </div>
          <div class="flex flex-col sm:flex-row gap-2">
            <button 
              @click="logout"
              class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base order-3 sm:order-1"
            >
              🔒 Déconnexion
            </button>
            <button 
              @click="$router.push('/admin')"
              class="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base order-1 sm:order-2"
            >
              📊 Admin
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

    <div class="container mx-auto px-4 py-8">
      <div class="max-w-2xl mx-auto">
        <!-- Scanner Card -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div class="p-6">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-2 0v1m0-1h-2m-2-7h2M9 8h2m0 0V6a2 2 0 012-2h2a2 2 0 012 2v2m0 0V6a2 2 0 012-2h2a2 2 0 012 2v2m-6 12V10m0 0H9m3 0h3m-3 0V6"></path>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-800 mb-2">Scanner un billet</h2>
              <p class="text-gray-600">Scannez le QR code du billet pour valider l'entrée</p>
            </div>

            <!-- Camera Scanner -->
            <div v-if="!useManualInput" class="relative">
              <div class="aspect-square bg-gray-900 rounded-lg overflow-hidden mb-4 relative">
                <video 
                  ref="videoElement" 
                  class="w-full h-full object-cover"
                  autoplay 
                  muted 
                  playsinline
                ></video>
                
                <!-- Scanner overlay -->
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="relative">
                    <div class="w-48 h-48 sm:w-64 sm:h-64 border-2 border-white rounded-lg"></div>
                    <div class="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-t-4 border-l-4 border-purple-400 rounded-tl-lg"></div>
                    <div class="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t-4 border-r-4 border-purple-400 rounded-tr-lg"></div>
                    <div class="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-b-4 border-l-4 border-purple-400 rounded-bl-lg"></div>
                    <div class="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-b-4 border-r-4 border-purple-400 rounded-br-lg"></div>
                  </div>
                </div>
                
                <!-- Loading indicator -->
                <div v-if="!cameraReady" class="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
                  <div class="text-center text-white">
                    <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-4"></div>
                    <p>Initialisation de la caméra...</p>
                  </div>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  @click="toggleCamera"
                  :class="cameraActive ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'"
                  class="text-white px-6 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base"
                >
                  {{ cameraActive ? '⏹️ Arrêter' : '📹 Démarrer caméra' }}
                </button>
                <button 
                  @click="useManualInput = true"
                  class="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors text-sm sm:text-base"
                >
                  ⌨️ Saisie manuelle
                </button>
              </div>
            </div>

            <!-- Manual Input -->
            <div v-else>
              <div class="mb-6">
                <label for="qrInput" class="block text-sm font-medium text-gray-700 mb-2">
                  Collez les données du QR code ou le code du billet
                </label>
                <textarea
                  id="qrInput"
                  v-model="manualQrInput"
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Collez ici les données du QR code ou tapez le code du billet..."
                ></textarea>
              </div>

              <div class="flex justify-center gap-4">
                <button 
                  @click="processManualInput"
                  :disabled="!manualQrInput.trim() || isProcessing"
                  class="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {{ isProcessing ? 'Vérification...' : 'Vérifier le billet' }}
                </button>
                <button 
                  @click="useManualInput = false"
                  class="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                >
                  Retour au scanner
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Results -->
        <div v-if="lastResult" class="bg-white rounded-xl shadow-lg p-6">
          <!-- Success -->
          <div v-if="lastResult.success" class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-green-600 mb-2">Check-in réussi !</h3>
            <div class="bg-green-50 rounded-lg p-4 mb-4">
              <p class="text-green-800 font-semibold">{{ lastResult.ticket.firstName }} {{ lastResult.ticket.lastName }}</p>
              <p class="text-green-700 text-sm">{{ lastResult.ticket.eventTitle }}</p>
              <p class="text-green-600 text-xs mt-1">Code: {{ lastResult.ticket.ticketCode }}</p>
              <p class="text-green-600 text-xs">Heure: {{ formatDateTime(lastResult.ticket.scanTime) }}</p>
            </div>
          </div>

          <!-- Already Scanned -->
          <div v-else-if="lastResult.alreadyScanned" class="text-center">
            <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-orange-600 mb-2">Billet déjà scanné</h3>
            <div class="bg-orange-50 rounded-lg p-4 mb-4">
              <p class="text-orange-800 font-semibold">{{ lastResult.ticket.firstName }} {{ lastResult.ticket.lastName }}</p>
              <p class="text-orange-700 text-sm">{{ lastResult.ticket.eventTitle }}</p>
              <p class="text-orange-600 text-xs mt-1">Code: {{ lastResult.ticket.ticketCode }}</p>
              <p class="text-orange-600 text-xs">Premier scan: {{ formatDateTime(lastResult.ticket.firstScanTime) }}</p>
            </div>
          </div>

          <!-- Error -->
          <div v-else class="text-center">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-red-600 mb-2">Billet invalide</h3>
            <div class="bg-red-50 rounded-lg p-4 mb-4">
              <p class="text-red-800">{{ lastResult.message }}</p>
            </div>
          </div>

          <button 
            @click="clearResult"
            class="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Scanner un autre billet
          </button>
        </div>

        <!-- Instructions -->
        <div v-if="!lastResult" class="bg-blue-50 rounded-xl p-6 mt-8">
          <h3 class="text-lg font-semibold text-blue-800 mb-3">Instructions</h3>
          <ul class="text-blue-700 space-y-2 text-sm">
            <li class="flex items-start">
              <svg class="w-4 h-4 mr-2 mt-0.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Démarrez la caméra et centrez le QR code dans le cadre
            </li>
            <li class="flex items-start">
              <svg class="w-4 h-4 mr-2 mt-0.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Le scan se fait automatiquement dès que le code est détecté
            </li>
            <li class="flex items-start">
              <svg class="w-4 h-4 mr-2 mt-0.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Utilisez la saisie manuelle si la caméra ne fonctionne pas
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Protection avec middleware
definePageMeta({
  middleware: 'admin'
})

// State
const videoElement = ref(null)
const cameraActive = ref(false)
const cameraReady = ref(false)
const useManualInput = ref(false)
const manualQrInput = ref('')
const isProcessing = ref(false)
const lastResult = ref(null)
let stream = null
let scanInterval = null

// Methods
const startCamera = async () => {
  try {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'environment' // Préférer la caméra arrière
        } 
      })
      
      if (videoElement.value) {
        videoElement.value.srcObject = stream
        cameraActive.value = true
        cameraReady.value = true
        
        // Démarrer la détection de QR code
        startQrDetection()
      }
    } else {
      throw new Error('getUserMedia not supported')
    }
  } catch (error) {
    console.error('Erreur accès caméra:', error)
    useManualInput.value = true
    alert('Impossible d\'accéder à la caméra. Utilisez la saisie manuelle.')
  }
}

const stopCamera = () => {
  if (stream) {
    stream.getTracks().forEach(track => track.stop())
    stream = null
  }
  if (scanInterval) {
    clearInterval(scanInterval)
    scanInterval = null
  }
  cameraActive.value = false
  cameraReady.value = false
}

const toggleCamera = () => {
  if (cameraActive.value) {
    stopCamera()
  } else {
    startCamera()
  }
}

const startQrDetection = () => {
  // Note: Dans un vrai environnement de production, vous utiliseriez une librairie
  // comme jsQR ou qr-scanner pour détecter automatiquement les QR codes
  // Pour cet exemple, nous simulons la détection
  
  scanInterval = setInterval(() => {
    if (cameraActive.value && videoElement.value && videoElement.value.videoWidth > 0) {
      // Ici vous ajouteriez la logique de détection QR avec une librairie appropriée
      // Pour l'instant, nous laissons la détection manuelle
    }
  }, 500)
}

const processQrCode = async (qrData) => {
  if (isProcessing.value) return
  
  isProcessing.value = true
  lastResult.value = null
  
  try {
    const response = await $fetch('/api/tickets/checkin', {
      method: 'POST',
      body: {
        qrCodeData: qrData
      }
    })
    
    lastResult.value = response
    
  } catch (error) {
    console.error('Erreur check-in:', error)
    lastResult.value = {
      success: false,
      message: error.data?.message || 'Erreur lors de la vérification du billet'
    }
  } finally {
    isProcessing.value = false
  }
}

const processManualInput = async () => {
  const input = manualQrInput.value.trim()
  if (!input) return
  
  // Essayer de parser comme JSON d'abord, sinon traiter comme code de billet
  let qrData = input
  
  // Si l'input ressemble à un code de billet simple, créer les données QR attendues
  if (!input.startsWith('{')) {
    // Rechercher le ticket par code pour obtenir les informations complètes
    try {
      const ticket = await $fetch(`/api/tickets/${input}`)
      if (ticket.success) {
        qrData = JSON.stringify({
          ticketId: ticket.ticket.id,
          ticketCode: ticket.ticket.ticketCode,
          eventId: ticket.ticket.eventId,
          email: ticket.ticket.email
        })
      }
    } catch (error) {
      // Si on ne peut pas trouver le ticket, essayer avec les données brutes
    }
  }
  
  await processQrCode(qrData)
  manualQrInput.value = ''
}

const clearResult = () => {
  lastResult.value = null
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

const logout = () => {
  const isAuthenticated = useCookie('admin-authenticated')
  isAuthenticated.value = false
  navigateTo('/admin/login')
}

// SEO
useSeoMeta({
  title: 'Scanner QR Code - CrossKultur',
  description: 'Scanner de QR codes pour la validation des billets',
  robots: 'noindex'
})

// Lifecycle
onMounted(() => {
  // Auto démarrage de la caméra si disponible
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    startCamera()
  } else {
    useManualInput.value = true
  }
})

onUnmounted(() => {
  stopCamera()
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