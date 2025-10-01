<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative h-96 overflow-hidden">
      <img 
        src="/ffi1.jpg" 
        alt="FFI Edition n°1"
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
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">Terminé</span>
          </div>
          <h1 class="text-5xl font-bold mb-4">FFI Edition n°1</h1>
          <p class="text-xl opacity-90 mb-6">
            Première édition de notre tournoi Football Frontier International, inspiré d'Inazuma Eleven. 
            Les équipes s'affrontent dans des matchs palpitants !
          </p>
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center text-white/80">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              19 Juillet 2025
            </div>
            <div class="flex items-center text-white/80">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Centre sportif Didot, Ile de France
            </div>
            <div class="flex items-center text-white/80">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Journée complète
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
                La première édition du Football Frontier International a été un succès retentissant ! 
                Inspiré de l'univers d'Inazuma Eleven, cet événement a réuni 44 joueurs passionnés dans 
                une ambiance unique mêlant sport et manga.
              </p>
              <p class="mb-4">
                Les équipes se sont affrontées avec des stratégies élaborées et 
                un fair-play exemplaire. Chaque match était une véritable aventure où l'esprit d'équipe 
                et la créativité étaient récompensés.
              </p>
              <p>
                Cette première édition a posé les bases de ce qui est devenu l'un de nos événements phares. 
                L'enthousiasme des participants et la qualité des matchs nous ont motivés à organiser de 
                nouvelles éditions toujours plus spectaculaires !
              </p>
            </div>
          </section>

          <!-- Résultats -->
          <section class="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Résultats du tournoi</h2>
            <div class="space-y-6">
              <div class="bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-400 p-6 rounded-lg">
                <h3 class="text-xl font-bold text-gray-800 mb-2">🏆 Champion - Tokyo Cheetah</h3>
                <p class="text-gray-600">Une équipe exceptionnelle qui a su allier technique et esprit d'équipe pour remporter la première édition.</p>
              </div>
              <div class="bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-gray-400 p-6 rounded-lg">
                <h3 class="text-xl font-bold text-gray-800 mb-2">🥈 Vice-Champion - Bando Spiders</h3>
                <p class="text-gray-600">Une performance remarquable avec des techniques impressionnantes tout au long du tournoi.</p>
              </div>
              <div class="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-400 p-6 rounded-lg">
                <h3 class="text-xl font-bold text-gray-800 mb-2">🥉 Troisième - Fukuoka Eagles</h3>
                <p class="text-gray-600">Un jeu collectif exemplaire et des moments de pure magie footballistique.</p>
              </div>
            </div>
          </section>

          <!-- Moments forts -->
          <section class="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Moments forts</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-2">⚡ Action la plus spectaculaire</h3>
                <p class="text-gray-600">Le "Tir de l'Empereur" exécuté en finale, un moment inoubliable !</p>
              </div>
              <div class="border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-2">🎯 Meilleur gardien</h3>
                <p class="text-gray-600">Des arrêts impossibles qui ont marqué les esprits.</p>
              </div>
              <div class="border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-2">🤝 Prix du fair-play</h3>
                <p class="text-gray-600">L'esprit sportif et l'entraide entre toutes les équipes.</p>
              </div>
              <div class="border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-2">📸 Moment le plus mémorable</h3>
                <p class="text-gray-600">La photo de groupe finale avec tous les participants radieux.</p>
              </div>
            </div>
          </section>

          <!-- Galerie photos -->
          <section class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Galerie photos</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div class="aspect-square rounded-lg overflow-hidden relative group cursor-pointer">
                <img 
                  src="/ffi.png" 
                  alt="Match d'ouverture FFI Edition 1"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                >
                <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span class="text-white font-semibold">Match d'ouverture</span>
                </div>
              </div>
              <div class="aspect-square rounded-lg overflow-hidden relative group cursor-pointer">
                <img 
                  src="/ffi.png" 
                  alt="Actions FFI"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                >
                <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span class="text-white font-semibold">Moments forts</span>
                </div>
              </div>
              <div class="aspect-square rounded-lg overflow-hidden relative group cursor-pointer">
                <img 
                  src="/ffi_japon.png" 
                  alt="Célébrations équipe"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                >
                <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span class="text-white font-semibold">Célébrations</span>
                </div>
              </div>
              <div class="aspect-square rounded-lg overflow-hidden relative group cursor-pointer">
                <img 
                  src="/ffi.png" 
                  alt="Finale épique FFI"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                >
                <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span class="text-white font-semibold">Finale épique</span>
                </div>
              </div>
              <div class="aspect-square rounded-lg overflow-hidden relative group cursor-pointer">
                <img 
                  src="/ffi.png" 
                  alt="Remise des prix"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                >
                <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span class="text-white font-semibold">Remise des prix</span>
                </div>
              </div>
              <div class="aspect-square rounded-lg overflow-hidden relative group cursor-pointer">
                <img 
                  src="/ffi_japon.png" 
                  alt="Photo de groupe finale"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                >
                <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span class="text-white font-semibold">Photo de groupe</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <!-- Statistiques -->
          <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 class="text-2xl font-bold text-gray-800 mb-6">Statistiques</h3>
            
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Participants</span>
                <span class="text-2xl font-bold text-blue-600">44</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Équipes</span>
                <span class="text-xl font-semibold">8</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Matchs joués</span>
                <span class="text-xl font-semibold">15</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Buts marqués</span>
                <span class="text-xl font-semibold">127</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Moments forts</span>
                <span class="text-xl font-semibold">42</span>
              </div>
            </div>
          </div>

          <!-- Témoignages -->
          <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Témoignages</h3>
            <div class="space-y-4">
              <div class="border-l-4 border-blue-400 pl-4">
                <p class="text-sm text-gray-600 italic">"Une expérience incroyable ! J'ai vraiment eu l'impression d'être dans Inazuma Eleven."</p>
                <p class="text-xs text-gray-500 mt-1">- Alex, Équipe Raimon</p>
              </div>
              <div class="border-l-4 border-green-400 pl-4">
                <p class="text-sm text-gray-600 italic">"L'organisation était parfaite, l'ambiance extraordinaire. Vivement la prochaine édition !"</p>
                <p class="text-xs text-gray-500 mt-1">- Maria, Équipe Zeus</p>
              </div>
            </div>
          </div>

          <!-- Prochains événements -->
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Événements à venir</h3>
            <div class="space-y-4">
              <div class="border border-gray-200 rounded-lg p-4">
                <h4 class="font-semibold text-gray-800 mb-1">FFI Edition n°2</h4>
                <p class="text-sm text-gray-600 mb-2">La suite tant attendue !</p>
                <span class="text-xs text-purple-600 font-medium">15 Décembre 2025</span>
              </div>
              <div class="border border-gray-200 rounded-lg p-4">
                <h4 class="font-semibold text-gray-800 mb-1">Winter Cup</h4>
                <p class="text-sm text-gray-600 mb-2">Tournoi de basket inspiré de Kuroko no Basket</p>
                <span class="text-xs text-purple-600 font-medium">20 Janvier 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Métadonnées de la page
useSeoMeta({
  title: 'FFI Edition n°1 - Cross Kultur ',
  ogTitle: 'FFI Edition n°1 - Cross Kultur ',
  description: 'Revivez la première édition du Football Frontier International de Cross Kultur . Tournoi de football inspiré d\'Inazuma Eleven.',
  ogDescription: 'Revivez la première édition du Football Frontier International de Cross Kultur . Tournoi de football inspiré d\'Inazuma Eleven.',
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
