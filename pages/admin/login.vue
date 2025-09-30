<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4 py-8">
    <div class="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md">
      <div class="text-center mb-8">
        <div class="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Administration</h1>
        <p class="text-gray-600">Saisissez le code PIN pour accéder</p>
      </div>

      <!-- Error Message -->
      <div v-if="errorMessage" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          {{ errorMessage }}
        </div>
      </div>

      <!-- PIN Form -->
      <form @submit.prevent="login" class="space-y-6">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-3">
            Code PIN
          </label>
          <input 
            v-model="pin" 
            type="password" 
            required 
            maxlength="4"
            class="w-full px-4 py-4 text-center text-2xl font-mono border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all tracking-widest"
            placeholder="• • • •"
            @input="handlePinInput"
          >
          <p class="text-xs text-gray-500 mt-2 text-center">Saisissez le code PIN à 4 chiffres</p>
        </div>

        <button 
          type="submit" 
          :disabled="isLoading || pin.length !== 4"
          class="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] disabled:hover:scale-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="isLoading" class="flex items-center justify-center">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Vérification...
          </span>
          <span v-else>
            🔐 Se connecter
          </span>
        </button>
      </form>

      <!-- Back to Site -->
      <div class="mt-8 text-center">
        <button 
          @click="$router.push('/')" 
          class="text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors inline-flex items-center"
        >
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Retour au site
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false, // Pas de layout par défaut
  middleware: [] // Pas de middleware admin sur cette page
})

// State
const pin = ref('')
const isLoading = ref(false)
const errorMessage = ref('')

// Cookie pour l'authentification
const isAuthenticated = useCookie('admin-authenticated', {
  default: () => false,
  maxAge: 60 * 60 * 8, // 8 heures
  httpOnly: false,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict'
})

// Methods
const handlePinInput = (event) => {
  // Limiter à 4 chiffres seulement
  const value = event.target.value.replace(/\D/g, '').substring(0, 4)
  pin.value = value
  event.target.value = value
  
  // Auto-submit si 4 chiffres
  if (value.length === 4) {
    setTimeout(() => {
      login()
    }, 300)
  }
}

const login = async () => {
  if (pin.value.length !== 4) {
    errorMessage.value = 'Le code PIN doit contenir 4 chiffres'
    return
  }

  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await $fetch('/api/admin/login', {
      method: 'POST',
      body: {
        pin: pin.value
      }
    })

    if (response.success) {
      isAuthenticated.value = true
      await navigateTo('/admin')
    } else {
      errorMessage.value = response.message || 'Code PIN incorrect'
      pin.value = ''
    }
  } catch (error) {
    errorMessage.value = 'Erreur de connexion. Veuillez réessayer.'
    pin.value = ''
  } finally {
    isLoading.value = false
  }
}

// Auto-focus sur le champ PIN
onMounted(() => {
  const input = document.querySelector('input[type="password"]')
  if (input) {
    input.focus()
  }
})

// SEO
useSeoMeta({
  title: 'Administration - CrossKultur',
  robots: 'noindex,nofollow',
})
</script>

<style scoped>
/* Masquer les flèches des inputs number sur mobile */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

/* Animation pour le bouton */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}
</style>