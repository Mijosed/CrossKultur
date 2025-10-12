<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative h-96 overflow-hidden">
      <img 
        src="/winter_cup.png" 
        alt="Winter Cup"
        class="absolute inset-0 w-full h-full object-cover"
      >
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div class="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div class="text-white max-w-3xl">
          <div class="flex items-center mb-4">
            <button @click="$router.back()" class="hidden sm:block mr-4 p-2 rounded-full bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <span class="hidden sm:inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">À venir</span>
          </div>
          <h1 class="text-5xl font-bold mb-4">Winter Cup</h1>
          <p class="text-xl opacity-90 mb-6">
            Tournoi de basket-ball inspiré de Kuroko no Basket et Slam Dunk. 
            Des matchs intenses avec une ambiance de compétition authentique !
          </p>
          <div class="flex flex-wrap gap-4 mb-8">
            <div class="flex items-center text-white/80">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              2 Novembre 2025
            </div>
            <div class="flex items-center text-white/80">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
                Le Prisme
            </div>
            <div class="flex items-center text-white/80">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Après-midi
            </div>
          </div>
          
          <!-- Boutons d'action dans le hero -->
          <div class="flex flex-row gap-2 sm:gap-4 w-full max-w-md">
            <button 
              @click="showRegistrationModal = true" 
              class="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-3 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold sm:font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
              </svg>
              <span class="hidden sm:inline">S'inscrire maintenant</span>
              <span class="sm:hidden">S'inscrire</span>
            </button>
            <NuxtLink 
              to="/billetterie/winter-cup" 
              class="flex-1 bg-white/15 backdrop-blur-sm hover:bg-white/25 border-2 border-white/40 hover:border-white/60 text-white px-3 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold sm:font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center"
            >
              <svg class="w-4 h-4 sm:w-6 sm:h-6 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a1 1 0 001 1h1a1 1 0 001-1V7a2 2 0 00-2-2H5zM5 21a2 2 0 002-2v-3a1 1 0 00-1-1H5a1 1 0 00-1 1v3a2 2 0 002 2h1zm0 0h4a2 2 0 002-2v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a2 2 0 002 2z"></path>
              </svg>
              <span class="hidden sm:inline">Acheter un billet</span>
              <span class="sm:hidden">Billets</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Contenu principal -->
        <div class="lg:col-span-2">
          <!-- Description -->
          <section class="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">À propos de l'événement</h2>
            <div class="prose prose-lg max-w-none text-gray-600">
              <p class="mb-4">
                Préparez-vous pour la Winter Cup, le tournoi de basket-ball le plus intense de l'année ! 
                Inspiré des univers légendaires de Kuroko no Basket et Slam Dunk, cet événement vous 
                plongera dans l'atmosphère électrisante des gymnases japonais.
              </p>
              <p class="mb-4">
                Chaque équipe pourra créer des stratégies 
                dignes des plus grands mangas de sport, et vivre l'intensité des matchs décisifs où 
                chaque panier compte. L'esprit d'équipe et la persévérance seront vos meilleurs atouts !
              </p>
              <p>
                Que vous soyez un joueur expérimenté ou un débutant passionné, la Winter Cup offre 
                une expérience unique où le sport rencontre l'univers manga dans une ambiance 
                conviviale et compétitive.
              </p>
            </div>
          </section>

          <!-- Programme -->
          <section class="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Programme de la journée</h2>
            
            <div class="space-y-6">
              <!-- Ouverture -->
              <div class="bg-purple-50 rounded-lg p-4">
                <h3 class="text-lg font-bold text-purple-700 mb-2">14h00 - 14h30 • Ouverture</h3>
                <p class="text-gray-600">Accueil des participants et cérémonie d'ouverture</p>
              </div>

              <!-- Tournoi -->
              <div class="bg-blue-50 rounded-lg p-4">
                <h3 class="text-lg font-bold text-blue-700 mb-2">14h30 - 17h30 • Tournoi</h3>
                <div class="text-gray-600 space-y-1">
                  <p>• Matchs de poules et phases éliminatoires</p>
                  <p>• Animations : concours de tirs et épreuves de vitesse</p>
                  <p>• Lots à gagner</p>
                </div>
              </div>

              <!-- Finale & Clôture -->
              <div class="bg-green-50 rounded-lg p-4">
                <h3 class="text-lg font-bold text-green-700 mb-2">17h30 - 19h00 • Finale & Clôture</h3>
                <p class="text-gray-600">Match final, remise des prix et cérémonie de clôture</p>
              </div>
            </div>

            <div class="mt-6 p-4 bg-gray-50 rounded-lg">
              <p class="text-sm text-gray-600 text-center">
                <strong>Durée totale :</strong> 5 heures d'événement intensif • <strong>Format :</strong> Équipes de 10 joueurs (5vs5)
              </p>
            </div>
          </section>
        </div>

          

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <!-- Informations pratiques -->
          <div class="bg-white rounded-xl shadow-lg p-6 mb-8 sticky top-8">
            <h3 class="text-2xl font-bold text-gray-800 mb-6">Informations pratiques</h3>

            <!-- Informations complémentaires -->
            <div class="space-y-4 text-sm">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <div class="font-medium text-gray-700">Niveau requis</div>
                  <div class="text-gray-500">Expériences minimum en basket-ball requises</div>
                </div>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <div>
                  <div class="font-medium text-gray-700">Âge</div>
                  <div class="text-gray-500">16 ans minimum</div>
                </div>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <div>
                  <div class="font-medium text-gray-700">Format équipes</div>
                  <div class="text-gray-500">10 joueurs par équipe (5vs5)</div>
                </div>
              </div>
            </div>

             <!-- Bouton d'inscription -->
            <div class="mt-6">
            <button @click="showRegistrationModal = true" class="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors mb-4">
              S'inscrire maintenant
            </button>
            </div>

            <!-- Contact -->
            <div class="mt-6 pt-6 border-t border-gray-200">
              <h4 class="font-semibold text-gray-800 mb-3">Questions ?</h4>
              <div class="space-y-2 text-sm">
                <a href="mailto:contact@crosskultur.fr" class="flex items-center text-purple-600 hover:text-purple-800">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  contact@crosskultur.fr
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>

    <!-- Modal d'inscription -->
    <div v-if="showRegistrationModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <!-- Header -->
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-gray-800">Inscription Winter Cup</h2>
            <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Sélection du type de participant -->
          <div v-if="!participantType" class="text-center">
            <h3 class="text-xl font-semibold text-gray-800 mb-6">Quel type de participant êtes-vous ?</h3>
            <!-- Date limite d'inscription -->
            <p class="text-sm text-gray-500 mb-4">Date limite d'inscription : Samedi 18 Octobre 2025, 23h59</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button @click="participantType = 'creator'" class="p-6 border-2 border-purple-200 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-all">
                <div class="text-purple-600 mb-3">
                  <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-gray-800 mb-2">Créateur de contenu</h4>
                <p class="text-gray-600 text-sm">Vous créez du contenu sur les réseaux sociaux</p>
              </button>
              <button @click="participantType = 'subscriber'" class="p-6 border-2 border-purple-200 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-all">
                <div class="text-purple-600 mb-3">
                  <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-gray-800 mb-2">Abonné</h4>
                <p class="text-gray-600 text-sm">Vous suivez des créateurs de contenu</p>
              </button>
            </div>
          </div>

          <!-- Formulaire créateur de contenu -->
          <form v-if="participantType === 'creator'" @submit.prevent="submitCreatorForm" class="space-y-4">
            <div class="mb-4">
              <button @click="participantType = null" type="button" class="text-purple-600 hover:text-purple-800 text-sm flex items-center">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Retour
              </button>
            </div>
            
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Inscription - Créateur de contenu</h3>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nom d'utilisateur *</label>
              <input v-model="creatorForm.username" type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Réseau social principal *</label>
              <select v-model="creatorForm.socialNetwork" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                <option value="">Sélectionner...</option>
                <option value="tiktok">TikTok</option>
                <option value="youtube">YouTube</option>
                <option value="instagram">Instagram</option>
                <option value="twitch">Twitch</option>
                <option value="twitter">Twitter/X</option>
                <option value="other">Autre</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Lien du profil ou nom d'utilisateur *</label>
              <input v-model="creatorForm.socialHandle" type="text" required placeholder="@username ou lien complet" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input v-model="creatorForm.email" type="email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
            </div>
            
            <button type="submit" :disabled="isSubmitting" class="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50">
              {{ isSubmitting ? 'Inscription en cours...' : 'S\'inscrire' }}
            </button>
          </form>

          <!-- Formulaire abonné -->
          <form v-if="participantType === 'subscriber'" @submit.prevent="submitSubscriberForm" class="space-y-4">
            <div class="mb-4">
              <button @click="participantType = null" type="button" class="text-purple-600 hover:text-purple-800 text-sm flex items-center">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Retour
              </button>
            </div>
            
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Inscription - Abonné</h3>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nom d'utilisateur *</label>
              <input v-model="subscriberForm.username" type="text" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Réseau social principal *</label>
              <select v-model="subscriberForm.socialNetwork" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                <option value="">Sélectionner...</option>
                <option value="tiktok">TikTok</option>
                <option value="youtube">YouTube</option>
                <option value="instagram">Instagram</option>
                <option value="twitch">Twitch</option>
                <option value="twitter">Twitter/X</option>
                <option value="other">Autre</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Lien du profil ou nom d'utilisateur *</label>
              <input v-model="subscriberForm.socialHandle" type="text" required placeholder="@username ou lien complet" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Mode de participation *</label>
              <select v-model="subscriberForm.participationMode" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                <option value="">Sélectionner...</option>
                <option value="drive">Lien Google Drive avec highlights</option>
                <option value="tiktok">Compte TikTok avec hashtag #wintercup2025</option>
              </select>
            </div>

            <div v-if="subscriberForm.participationMode">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                {{ subscriberForm.participationMode === 'drive' ? 'Lien Google Drive *' : 'Lien du compte TikTok avec #wintercup2025 *' }}
              </label>
              <input v-model="subscriberForm.highlightsLink" type="url" required 
                     :placeholder="subscriberForm.participationMode === 'drive' ? 'https://drive.google.com/...' : 'https://www.tiktok.com/@username'"
                     class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
              <p class="text-sm text-gray-500 mt-1">
                {{ subscriberForm.participationMode === 'drive' ? 'Partagez vos highlights de basket dans un dossier Google Drive' : 'Assurez-vous d\'utiliser le hashtag #wintercup2025 dans vos vidéos' }}
              </p>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input v-model="subscriberForm.email" type="email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
            </div>
            
            <button type="submit" :disabled="isSubmitting" class="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50">
              {{ isSubmitting ? 'Inscription en cours...' : 'S\'inscrire' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// État du modal et des formulaires
const showRegistrationModal = ref(false)
const participantType = ref(null)
const isSubmitting = ref(false)

// Formulaires
const creatorForm = ref({
  username: '',
  socialNetwork: '',
  socialHandle: '',
  email: ''
})

const subscriberForm = ref({
  username: '',
  socialNetwork: '',
  socialHandle: '',
  participationMode: '',
  highlightsLink: '',
  email: ''
})

// Fonctions
const closeModal = () => {
  showRegistrationModal.value = false
  participantType.value = null
  // Reset forms
  creatorForm.value = {
    username: '',
    socialNetwork: '',
    socialHandle: '',
    email: ''
  }
  subscriberForm.value = {
    username: '',
    socialNetwork: '',
    socialHandle: '',
    participationMode: '',
    highlightsLink: '',
    email: ''
  }
}

const submitCreatorForm = async () => {
  isSubmitting.value = true
  
  try {
    const response = await $fetch('/api/winter-cup/register', {
      method: 'POST',
      body: {
        type: 'creator',
        eventSlug: 'winter-cup',
        ...creatorForm.value
      }
    })
    
    if (response.success) {
      alert('Inscription réussie ! Vous recevrez bientôt un email de confirmation.')
      closeModal()
    }
  } catch (error) {
    console.error('Erreur inscription:', error)
    alert('Erreur lors de l\'inscription. Veuillez réessayer.')
  } finally {
    isSubmitting.value = false
  }
}

const submitSubscriberForm = async () => {
  isSubmitting.value = true
  
  try {
    const response = await $fetch('/api/winter-cup/register', {
      method: 'POST',
      body: {
        type: 'subscriber',
        eventSlug: 'winter-cup',
        ...subscriberForm.value
      }
    })
    
    if (response.success) {
      alert('Inscription réussie ! Vous recevrez bientôt un email de confirmation.')
      closeModal()
    }
  } catch (error) {
    console.error('Erreur inscription:', error)
    alert('Erreur lors de l\'inscription. Veuillez réessayer.')
  } finally {
    isSubmitting.value = false
  }
}

// Métadonnées de la page
useSeoMeta({
  title: 'Winter Cup - Cross Kultur ',
  ogTitle: 'Winter Cup - Cross Kultur ',
  description: 'Participez à la Winter Cup ! Tournoi de basket-ball inspiré de Kuroko no Basket et Slam Dunk.',
  ogDescription: 'Participez à la Winter Cup ! Tournoi de basket-ball inspiré de Kuroko no Basket et Slam Dunk.',
})
</script>

<style scoped>
.prose {
  line-height: 1.7;
}

.prose p {
  margin-bottom: 1rem;
}
</style>
