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
            <button @click="$router.back()" class="mr-4 p-2 rounded-full bg-white bg-opacity-20 hover:bg-white hover:bg-opacity-30 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">À venir</span>
          </div>
          <h1 class="text-5xl font-bold mb-4">Winter Cup</h1>
          <p class="text-xl opacity-90 mb-6">
            Tournoi de basket-ball inspiré de Kuroko no Basket et Slam Dunk. 
            Des matchs intenses avec une ambiance de compétition authentique !
          </p>
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center text-white/80">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              1 Novembre 2025
            </div>
            <div class="flex items-center text-white/80">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Ile de France
            </div>
            <div class="flex items-center text-white/80">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Week-end complet
            </div>
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
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Organisation de la journée</h2>
            
            <!-- Début de l'événement -->
            <div class="mb-8">
              <div class="flex items-start mb-4">
                <div class="flex-shrink-0 w-16 text-center">
                  <span class="text-lg font-bold text-purple-600">14h00</span>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-800">Début de l'event</h3>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0 w-16 text-center">
                  <span class="text-lg font-bold text-purple-600">14h15</span>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-800">Cérémonie d'ouverture</h3>
                  <p class="text-gray-600">15 minutes de présentation et lancement du tournoi</p>
                </div>
              </div>
            </div>

            <!-- Matchs & animations -->
            <div class="mb-8">
              <h3 class="text-xl font-bold text-purple-600 mb-4 flex items-center">
               Matchs & animations
              </h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-16 text-center">
                    <span class="text-lg font-bold text-purple-600">14h45</span>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">Première série de matchs de conférence</h4>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-16 text-center">
                    <span class="text-lg font-bold text-purple-600">15h45</span>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800 flex items-center">
                     Tir du milieu de terrain
                    </h4>
                    <p class="text-gray-600">20 min — lot Crunchyroll</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-16 text-center">
                    <span class="text-lg font-bold text-purple-600">16h05</span>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">Derniers matchs de conférence</h4>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-16 text-center">
                    <span class="text-lg font-bold text-purple-600">16h35</span>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">Épreuve de vitesse</h4>
                    <p class="text-gray-600">20 minutes</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-16 text-center">
                    <span class="text-lg font-bold text-purple-600">16h55</span>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">Les demi-finales</h4>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-16 text-center">
                    <span class="text-lg font-bold text-purple-600">17h35</span>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800 flex items-center">
                    Concours à 3 points
                    </h4>
                    <p class="text-gray-600">20 minutes</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-16 text-center">
                    <span class="text-lg font-bold text-purple-600">17h55</span>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">Finale</h4>
                    <p class="text-gray-600">Gagnants des demi-finales</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Clôture -->
            <div class="mb-8">
              <h3 class="text-xl font-bold text-purple-600 mb-4 flex items-center">
              Clôture
              </h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-16 text-center">
                    <span class="text-lg font-bold text-purple-600">18h25</span>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">Cérémonie finale</h4>
                    <p class="text-gray-600">Présentation des joueurs, trophées, remerciements</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-16 text-center">
                    <span class="text-lg font-bold text-purple-600">18h40</span>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">Remise des récompenses & fin de l'événement</h4>
                  </div>
                </div>
              </div>
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
