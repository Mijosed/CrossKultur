<template>
  <div class="py-12 bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-gray-800 mb-6">Nos Événements</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Plongez dans des expériences uniques où vos mangas préférés prennent vie. 
          Chaque événement est conçu pour vous faire vivre une aventure inoubliable.
        </p>
      </div>

      <!-- Grille d'événements -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <EventCard
          v-for="event in filteredEvents" 
          :key="event.id"
          :title="event.title"
          :description="event.shortDescription"
          :image-gradient="event.imageGradient"
          :image-url="event.imageUrl"
          :status="event.status"
          :date="event.date"
          :location="event.location"
          :participants="event.maxParticipants"
          :tags="event.tags"
          :action-text="getActionButtonText(event.status)"
          @click="goToEventDetail(event.slug)"
          class="event-card-custom"
        >
          
        </EventCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { events } from '~/data/events.js'

// Métadonnées de la page
useSeoMeta({
  title: 'Événements - Cross Kultur ',
  ogTitle: 'Événements - Cross Kultur ',
  description: 'Découvrez tous nos événements inspirés des mangas. Expériences immersives et aventures uniques.',
  ogDescription: 'Découvrez tous nos événements inspirés des mangas. Expériences immersives et aventures uniques.',
})

// État réactif
const activeFilter = ref('all')

// Utilisation des données centralisées
const allEvents = ref(events)

// Événements filtrés selon le type sélectionné
const filteredEvents = computed(() => {
  if (activeFilter.value === 'all') return allEvents.value
  return allEvents.value.filter(event => event.type === activeFilter.value)
})

// Méthodes
const filterEvents = (filter) => {
  activeFilter.value = filter
}

const goToEventDetail = (slug) => {
  navigateTo(`/evenements/${slug}`)
}

const formatDate = (dateString) => {
  const options = { day: 'numeric', month: 'short' }
  return new Date(dateString).toLocaleDateString('fr-FR', options)
}

const getStatusBadgeClass = (status) => {
  switch (status) {
    case 'upcoming': return 'bg-blue-100 text-blue-700'
    case 'ongoing': return 'bg-green-100 text-green-700'
    case 'past': return 'bg-gray-100 text-gray-700'
    default: return 'bg-purple-100 text-purple-700'
  }
}

const getStatusText = (status) => {
  switch (status) {
    case 'upcoming': return 'À venir'
    case 'ongoing': return 'En cours'
    case 'past': return 'Terminé'
    default: return 'Programmé'
  }
}

const getActionButtonText = (status) => {
  switch (status) {
    case 'upcoming': return 'Voir détails'
    case 'ongoing': return 'Voir détails'
    case 'past': return 'Voir détails'
    default: return 'En savoir plus'
  }
}

const getEventIcon = (type) => {
  // Retourne le nom du composant d'icône basé sur le type
  switch (type) {
    case 'combat': return 'FistIcon'
    case 'aventure': return 'CompassIcon'
    case 'culturel': return 'HeartIcon'
    case 'competition': return 'TrophyIcon'
    default: return 'StarIcon'
  }
}

// Composants d'icônes simplifiés (inline)
const FistIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
}
const CompassIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>`
}
const HeartIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>`
}
const TrophyIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>`
}
const StarIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>`
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Animation pour les cartes */
@media (prefers-reduced-motion: no-preference) {
  .group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
  }
}
</style>
