<template>
  <div>
    <!-- Popup Winter Cup -->
    <Transition name="popup" appear>
      <div v-if="showWinterCupBanner" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center relative popup-content">
        <!-- Bouton de fermeture -->
        <button 
          @click="closeBanner"
          class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Fermer le popup"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <!-- Image Winter Cup -->
        <div class="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden shadow-lg">
          <img 
            src="/winter_logo.png" 
            alt="Winter Cup"
            class="w-full h-full object-cover"
          >
        </div>
        
        <!-- Contenu -->
        <h3 class="text-2xl font-bold text-gray-800 mb-2">Winter Cup 2025</h3>
        <div class="bg-purple-50 rounded-lg p-3 mb-6">
          <p class="text-purple-800 font-semibold">📅 2 Novembre 2025</p>
          <p class="text-purple-600 text-sm">Le Prisme, Île-de-France</p>
        </div>
        
        <!-- Boutons -->
        <div class="flex gap-3">
          <button 
            @click="closeBanner" 
            class="flex-1 border border-gray-300 text-gray-700 py-2.5 rounded-lg hover:bg-gray-50 font-medium transition-colors"
          >
            Plus tard
          </button>
          <NuxtLink 
            to="/evenements/winter-cup" 
            class="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2.5 rounded-lg hover:from-purple-700 hover:to-blue-700 font-medium transition-all transform hover:scale-105"
          >
            Découvrir
          </NuxtLink>
        </div>
      </div>
    </div>
    </Transition>

    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-[#004AAD] to-[#CB6CE6] min-h-screen flex items-center">
      <div class="absolute inset-0 bg-black bg-opacity-20"></div>
      <div class="relative container mx-auto px-4 text-center text-white">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          Bienvenue chez <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-[#CB6CE6]">Cross Kultur</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          L'association qui transforme l'univers de la pop culture en expériences réelles inoubliables.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/evenements" class="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Découvrir nos événements
          </NuxtLink>
          <NuxtLink to="/contact" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
            Rejoindre l'aventure
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- À propos -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-6">Qui sommes-nous ?</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Cross Kultur est une association passionnée qui donne vie à la pop culture à travers des événements immersifs et créatifs.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Événements Immersifs</h3>
            <p class="text-gray-600">Des expériences uniques qui transportent les participants dans leurs univers préférés.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Communauté</h3>
            <p class="text-gray-600">Une communauté bienveillante de passionnés qui partagent leur amour des mangas.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Innovation</h3>
            <p class="text-gray-600">Des concepts créatifs et novateurs pour repenser l'expérience pop culture dans la réalité.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Prochains événements -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-6">Prochains événements</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos prochaines aventures basées sur la pop culture en préparation
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EventCard
            v-for="event in upcomingEvents"
            :key="event.id"
            :title="event.title"
            :description="event.shortDescription"
            :image-gradient="event.imageGradient"
            :image-url="event.imageUrl"
            :status="event.status"
            :date="event.date"
            :participants="event.maxParticipants"
            :tags="event.tags"
            :action-text="getActionText(event.status)"
            @click="$router.push(`/evenements/${event.slug}`)"
          />
        </div>
        
        <div class="text-center mt-12">
          <NuxtLink to="/evenements" class="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            Voir tous les événements
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { events } from '~/data/events.js'

// État du popup Winter Cup
const showWinterCupBanner = ref(false)

// Fonction pour fermer le popup
const closeBanner = () => {
  showWinterCupBanner.value = false
}

// Afficher le popup après un délai (seulement si arrivée de l'extérieur)
onMounted(() => {
  // Vérifier si l'utilisateur vient d'une navigation interne
  const isInternalNavigation = document.referrer && 
    (document.referrer.includes(window.location.hostname) || 
     document.referrer.includes('localhost'))
  
  // Vérifier si le popup a déjà été affiché dans cette session
  const popupShownThisSession = sessionStorage.getItem('winterCupPopupShown')
  
  // Afficher seulement si :
  // 1. Pas de navigation interne OU première visite de la session
  // 2. ET popup pas encore affiché dans cette session
  if ((!isInternalNavigation || !popupShownThisSession) && !popupShownThisSession) {
    setTimeout(() => {
      showWinterCupBanner.value = true
      // Marquer comme affiché pour cette session
      sessionStorage.setItem('winterCupPopupShown', 'true')
    }, 2000) // Affiche après 2 secondes
  }
})

// Récupérer les 3 prochains événements à venir
const upcomingEvents = computed(() => {
  return events
    .filter(event => event.status === 'upcoming')
    .slice(0, 3)
})

// Fonction pour obtenir le texte d'action selon le statut
const getActionText = (status) => {
  switch (status) {
    case 'upcoming': return 'En savoir plus'
    case 'ongoing': return 'Rejoindre'
    case 'past': return 'Voir détails'
    default: return 'Découvrir'
  }
}

// Métadonnées de la page
useSeoMeta({
  title: 'Cross Kultur  - Association Pop Culture & Événements',
  ogTitle: 'Cross Kultur  - Association Pop Culture & Événements',
  description: 'Cross Kultur  organise des événements inspirés de l\'univers de la pop culture, transposés dans la réalité.',
  ogDescription: 'Cross Kultur  organise des événements inspirés de situations et univers présents dans la pop culture, transposés dans la réalité.',
})
</script>

<style scoped>
/* Animations personnalisées */
.fade-in {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation du popup */
.popup-enter-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.popup-leave-active {
  transition: all 0.3s ease-in-out;
}

.popup-enter-from {
  opacity: 0;
  transform: scale(0.7);
}

.popup-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.popup-content {
  animation: popupContent 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes popupContent {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Effet de survol pour les cartes */
.hover\:shadow-xl:hover {
  transform: translateY(-4px);
  transition: all 0.3s ease;
}
</style>