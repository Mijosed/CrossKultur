<template>
  <div class="py-12 bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-gray-800 mb-6">Membres de l'Association</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez l'équipe passionnée qui fait vivre Cross Kultur . 
          Chaque membre apporte ses compétences uniques pour créer des expériences extraordinaires.
        </p>
      </div>


      <!-- Galerie des membres -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
        <div 
          v-for="member in filteredMembers" 
          :key="member.id"
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
          @click="selectMember(member)"
        >
          <!-- Avatar -->
          <div class="relative h-64 overflow-hidden">
            <div :class="['absolute inset-0', member.avatarColor]"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span class="text-4xl text-white font-bold">{{ member.initials }}</span>
              </div>
            </div>
          </div>

          <!-- Informations -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-1">{{ member.name }}</h3>
            <p class="text-purple-600 font-medium mb-2">{{ member.position }}</p>
            <p class="text-gray-600 text-sm mb-4">{{ member.shortDescription }}</p>
            
            <!-- Compétences -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="skill in member.skills.slice(0, 3)" 
                :key="skill"
                class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {{ skill }}
              </span>
              <span v-if="member.skills.length > 3" class="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                +{{ member.skills.length - 3 }}
              </span>
            </div>

            <!-- Réseaux sociaux -->
            <div class="flex space-x-3">
              <a v-if="member.social.discord" href="#" class="text-gray-400 hover:text-purple-600 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
              </a>
              <a v-if="member.social.twitter" href="#" class="text-gray-400 hover:text-blue-500 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a v-if="member.social.instagram" href="#" class="text-gray-400 hover:text-pink-500 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.344-1.297L12.017 8.78l6.912 6.911c-.896.807-2.047 1.297-3.344 1.297H8.449z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Section Rejoindre l'équipe -->
      <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center text-white">
        <h2 class="text-3xl font-bold mb-4">Rejoignez Notre Équipe !</h2>
        <p class="text-xl mb-6 opacity-90">
          Vous partagez notre passion pour les mangas et souhaitez contribuer à créer des expériences uniques ?
        </p>
        <p class="mb-8 opacity-80">
          Nous recherchons toujours de nouveaux talents pour enrichir notre équipe dans tous les domaines : 
          organisation, communication, technique, logistique, et bien plus encore !
        </p>
        <NuxtLink to="/contact" 
                  class="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300">
          Postuler maintenant
          <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </NuxtLink>
      </div>
    </div>

    <!-- Modal de détail du membre -->
    <div v-if="selectedMember" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" @click="closeModal">
      <div class="bg-white rounded-xl max-w-2xl w-full max-h-96 overflow-y-auto" @click.stop>
        <div class="p-6">
          <div class="flex justify-between items-start mb-6">
            <div class="flex items-center space-x-4">
              <div :class="['w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl', selectedMember.avatarColor]">
                {{ selectedMember.initials }}
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-800">{{ selectedMember.name }}</h3>
                <p class="text-purple-600 font-medium">{{ selectedMember.position }}</p>
              </div>
            </div>
            <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-gray-800 mb-2">À propos</h4>
              <p class="text-gray-600">{{ selectedMember.fullDescription }}</p>
            </div>
            
            <div>
              <h4 class="font-semibold text-gray-800 mb-2">Compétences</h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="skill in selectedMember.skills" 
                  :key="skill"
                  class="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                >
                  {{ skill }}
                </span>
              </div>
            </div>

            <div>
              <h4 class="font-semibold text-gray-800 mb-2">Contribution à Cross Kultur </h4>
              <p class="text-gray-600">{{ selectedMember.contribution }}</p>
            </div>

            <div v-if="selectedMember.favoriteAnime">
              <h4 class="font-semibold text-gray-800 mb-2">Anime/Manga favoris</h4>
              <p class="text-gray-600">{{ selectedMember.favoriteAnime }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Métadonnées de la page
useSeoMeta({
  title: 'Membres - Cross Kultur ',
  ogTitle: 'Membres - Cross Kultur ',
  description: 'Découvrez l\'équipe passionnée de Cross Kultur . Nos membres et leurs rôles dans l\'association.',
  ogDescription: 'Découvrez l\'équipe passionnée de Cross Kultur . Nos membres et leurs rôles dans l\'association.',
})

// État réactif
const activeRoleFilter = ref('all')
const selectedMember = ref(null)

// Données des membres
const members = ref([
  {
    id: 1,
    name: "Kimiaa",
    position: "Président",
    role: "bureau",
    initials: "K",
    avatarColor: "bg-gradient-to-br from-purple-500 to-pink-500",
    shortDescription: "Passionnée de mangas depuis l'enfance, il a créé Cross Kultur  pour partager sa passion.",
    fullDescription: "Kimiaa a fondé Cross Kultur  en 2025 avec la vision de créer un pont entre l'univers des mangas et la réalité. Diplômée en événementiel, elle apporte son expertise pour créer des expériences uniques et mémorables.",
    skills: [],
    contribution: "Vision stratégique, coordination générale des événements, relations partenaires",
    favoriteAnime: "Fullmetal Alchemist, One Piece, Studio Ghibli",
    social: {
      discord: true,
      twitter: true,
      instagram: true
    },
    isFounder: true
  },
  {
    id: 2,
    name: "Watch",
    position: "Vice-Président",
    initials: "W",
    avatarColor: "bg-gradient-to-br from-blue-500 to-purple-500",
    shortDescription: "Expert en logistique et organisation, il s'assure que chaque événement se déroule parfaitement.",
    fullDescription: "Watch est le pilier logistique de Cross Kultur . Avec son expérience en gestion d'événements et sa passion pour les détails, il transforme les idées créatives en réalité concrète.",
    skills: [],
    contribution: "Planification logistique, gestion des budgets, coordination des équipes terrain",
    favoriteAnime: "Attack on Titan, Death Note, Jujutsu Kaisen",
    social: {
      discord: true,
      twitter: false,
      instagram: true
    },
    isFounder: true
  },
])


// Membres filtrés
const filteredMembers = computed(() => {
  if (activeRoleFilter.value === 'all') return members.value
  return members.value.filter(member => member.role === activeRoleFilter.value)
})


const selectMember = (member) => {
  selectedMember.value = member
}

const closeModal = () => {
  selectedMember.value = null
}

const getRoleBadgeClass = (role) => {
  switch (role) {
    case 'bureau': return 'bg-purple-100 text-purple-700'
    case 'organisation': return 'bg-blue-100 text-blue-700'
    case 'technique': return 'bg-green-100 text-green-700'
    case 'communaute': return 'bg-pink-100 text-pink-700'
    default: return 'bg-gray-100 text-gray-700'
  }
}

const getRoleDisplayName = (role) => {
  switch (role) {
    case 'bureau': return 'Bureau'
    case 'organisation': return 'Organisation'
    case 'technique': return 'Technique'
    case 'communaute': return 'Communauté'
    default: return 'Membre'
  }
}
</script>

<style scoped>
/* Animations et transitions personnalisées */
.member-card {
  transition: all 0.3s ease;
}

.member-card:hover {
  transform: translateY(-8px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-cols-1.md\:grid-cols-2.lg\:grid-cols-3.xl\:grid-cols-4 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  @media (min-width: 640px) {
    .grid-cols-1.md\:grid-cols-2.lg\:grid-cols-3.xl\:grid-cols-4 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
}
</style>
