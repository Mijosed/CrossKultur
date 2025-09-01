<template>
  <div 
    class="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
    @click="$emit('click')"
  >
    <!-- En-tête avec image/gradient -->
    <div v-if="imageGradient || imageUrl" class="relative h-48 overflow-hidden">
      <div 
        v-if="imageGradient" 
        :class="['absolute inset-0', imageGradient]"
      ></div>
      <img 
        v-else-if="imageUrl" 
        :src="imageUrl" 
        :alt="title"
        class="w-full h-full object-cover"
      >
      
      <!-- Badge de statut -->
      <div v-if="status" class="absolute top-4 left-4">
        <span :class="['px-3 py-1 rounded-full text-sm font-medium', getStatusClass(status)]">
          {{ getStatusText(status) }}
        </span>
      </div>
      
      <!-- Date -->
      <div v-if="date" class="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur px-3 py-1 rounded-full">
        <span class="text-sm font-medium text-gray-800">{{ formatDate(date) }}</span>
      </div>
    </div>

    <!-- Contenu de la carte -->
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-800 mb-3">{{ title }}</h3>
      <p class="text-gray-600 mb-4">{{ description }}</p>
      
      <!-- Slot pour informations supplémentaires personnalisées -->
      <slot name="extra-info">
        <!-- Informations par défaut -->
        <div v-if="location || participants" class="flex flex-wrap gap-2 mb-4 text-sm text-gray-500">
          <span v-if="location" class="inline-flex items-center">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            {{ location }}
          </span>
          <span v-if="participants" class="inline-flex items-center">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            {{ participants }} participants
          </span>
        </div>
      </slot>

      <!-- Tags -->
      <div v-if="tags && tags.length" class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="tag in tags.slice(0, 3)" 
          :key="tag"
          class="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
        >
          {{ tag }}
        </span>
        <span v-if="tags.length > 3" class="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
          +{{ tags.length - 3 }}
        </span>
      </div>

      <!-- Slot pour le bouton d'action personnalisé -->
      <slot name="action-button">
        <!-- Bouton d'action par défaut -->
        <div v-if="actionText" class="mt-4 pt-4 border-t border-gray-100">
          <button class="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
            {{ actionText }}
          </button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageGradient: {
    type: String,
    default: null
  },
  imageUrl: {
    type: String,
    default: null
  },
  status: {
    type: String,
    default: null,
    validator: (value) => ['upcoming', 'ongoing', 'past', 'completed'].includes(value) || !value
  },
  date: {
    type: String,
    default: null
  },
  location: {
    type: String,
    default: null
  },
  participants: {
    type: [Number, String],
    default: null
  },
  tags: {
    type: Array,
    default: () => []
  },
  actionText: {
    type: String,
    default: null
  }
})

// Émissions
defineEmits(['click'])

// Méthodes
const formatDate = (dateString) => {
  if (!dateString) return ''
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('fr-FR', options)
}

const getStatusClass = (status) => {
  switch (status) {
    case 'upcoming': return 'bg-blue-100 text-blue-700'
    case 'ongoing': return 'bg-green-100 text-green-700'
    case 'past': return 'bg-gray-100 text-gray-700'
    case 'completed': return 'bg-purple-100 text-purple-700'
    default: return 'bg-gray-100 text-gray-700'
  }
}

const getStatusText = (status) => {
  switch (status) {
    case 'upcoming': return 'À venir'
    case 'ongoing': return 'En cours'
    case 'past': return 'Terminé'
    case 'completed': return 'Complété'
    default: return 'Inconnu'
  }
}
</script>

<style scoped>
/* Amélioration de l'ombre pour les cartes */
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Animation améliorée */
.transform {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover\:scale-105:hover {
  transform: scale(1.02);
}
</style>
