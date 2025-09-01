<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-purple-600 to-pink-600 min-h-screen flex items-center">
      <div class="absolute inset-0 bg-black bg-opacity-20"></div>
      <div class="relative container mx-auto px-4 text-center text-white">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          Bienvenue chez <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">CrossKultur</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          L'association qui transforme l'univers des mangas en expériences réelles inoubliables
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/evenements" class="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Découvrir nos événements
          </NuxtLink>
          <NuxtLink to="/membres" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
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
            CrossKultur est une association passionnée qui donne vie aux univers manga à travers des événements immersifs et créatifs.
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
            <p class="text-gray-600">Des expériences uniques qui transportent les participants dans leurs univers manga préférés.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Communauté</h3>
            <p class="text-gray-600">Une communauté bienveillante de passionnés qui partagent leur amour des mangas.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Innovation</h3>
            <p class="text-gray-600">Des concepts créatifs et novateurs pour repenser l'expérience manga dans la réalité.</p>
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
            Découvrez nos prochaines aventures manga en préparation
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EventCard
            v-for="event in upcomingEvents"
            :key="event.id"
            :title="event.title"
            :description="event.shortDescription"
            :image-gradient="event.imageGradient"
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

    <!-- Call to Action -->
    <section class="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
      <div class="container mx-auto px-4 text-center text-white">
        <h2 class="text-4xl font-bold mb-6">Prêt à vivre l'aventure ?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Rejoignez CrossKultur et participez à des événements uniques qui donneront vie à vos mangas préférés !
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Nous contacter
          </NuxtLink>
          <NuxtLink to="/membres" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
            Devenir membre
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { events } from '~/data/events.js'

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
    case 'past': return 'Voir photos'
    default: return 'Découvrir'
  }
}

// Métadonnées de la page
useSeoMeta({
  title: 'CrossKultur - Association Manga & Événements',
  ogTitle: 'CrossKultur - Association Manga & Événements',
  description: 'CrossKultur organise des événements inspirés de situations et univers présents dans les mangas, transposés dans la réalité.',
  ogDescription: 'CrossKultur organise des événements inspirés de situations et univers présents dans les mangas, transposés dans la réalité.',
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

/* Effet de survol pour les cartes */
.hover\:shadow-xl:hover {
  transform: translateY(-4px);
  transition: all 0.3s ease;
}
</style>