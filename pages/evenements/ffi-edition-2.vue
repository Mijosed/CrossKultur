<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative h-96 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
      <div class="absolute inset-0 bg-black bg-opacity-30"></div>
      
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
          <h1 class="text-5xl font-bold mb-4">FFI Edition n°2</h1>
          <p class="text-xl opacity-90 mb-6">
            Deuxième édition du Football Frontier International avec encore plus d'équipes 
            et des défis inédits. Préparez-vous à une expérience encore plus intense !
          </p>
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center text-white/80">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              15 Décembre 2025
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
            <h2 class="text-3xl font-bold text-gray-800 mb-6">À propos de la deuxième édition</h2>
            <div class="prose prose-lg max-w-none text-gray-600">
              <p class="mb-4">
                Suite au succès éclatant de la première édition FFI, nous revenons avec un tournoi 
                encore plus ambitieux ! Forts de l'expérience acquise, nous avons repensé l'événement 
                pour offrir une expérience encore plus immersive et spectaculaire.
              </p>
              <p class="mb-4">
                Cette deuxième édition accueillera 66 participants répartis en 12 équipes, soit 50% 
                de joueurs en plus que la première fois ! De nouvelles stratégies ont été 
                développées, de nouveaux défis vous attendent, et l'organisation a été optimisée pour 
                un confort maximum.
              </p>
              <p>
                Que vous soyez un vétéran de la première édition ou un nouveau participant, 
                préparez-vous à vivre des moments inoubliables dans l'univers d'Inazuma Eleven !
              </p>
            </div>
          </section>

          <!-- Nouveautés -->
          <section class="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">🚀 Nouveautés de cette édition</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-purple-800 mb-3">⚡ Nouvelles techniques</h3>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Galaxy Storm</li>
                  <li>• Cosmic Blaster</li>
                  <li>• Time Paradox</li>
                  <li>• Dimension Cannon</li>
                </ul>
              </div>
              <div class="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-blue-800 mb-3">🏟️ Nouveau terrain</h3>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Terrain plus grand</li>
                  <li>• Éclairage LED</li>
                  <li>• Gradins pour spectateurs</li>
                  <li>• Écran géant</li>
                </ul>
              </div>
              <div class="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-green-800 mb-3">🎮 Mode compétition</h3>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Système de points élargi</li>
                  <li>• Classements live</li>
                  <li>• Replay des actions</li>
                  <li>• Stats en temps réel</li>
                </ul>
              </div>
              <div class="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-orange-800 mb-3">🏆 Plus de prix</h3>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Trophée champion</li>
                  <li>• Prix techniques spéciaux</li>
                  <li>• Récompenses individuelles</li>
                  <li>• Goodies exclusifs</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Format du tournoi -->
          <section class="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Format du tournoi</h2>
            <div class="space-y-6">
              <div class="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <h3 class="text-xl font-bold text-gray-800 mb-3">Phase 1: Groupes de qualification</h3>
                <p class="text-gray-600 mb-3">12 équipes réparties en 4 groupes de 3. Chaque équipe affronte les autres de son groupe.</p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  <div class="bg-white p-2 rounded text-center font-medium">Groupe A</div>
                  <div class="bg-white p-2 rounded text-center font-medium">Groupe B</div>
                  <div class="bg-white p-2 rounded text-center font-medium">Groupe C</div>
                  <div class="bg-white p-2 rounded text-center font-medium">Groupe D</div>
                </div>
              </div>
              
              <div class="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-lg">
                <h3 class="text-xl font-bold text-gray-800 mb-3">Phase 2: Éliminations directes</h3>
                <p class="text-gray-600 mb-3">Les 8 meilleures équipes (2 par groupe) s'affrontent en élimination directe.</p>
                <div class="flex justify-center">
                  <div class="text-sm text-center">
                    <div class="mb-2">Quarts → Demi-finales → Finale</div>
                    <div class="text-purple-600 font-medium">Match pour la 3ème place</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Moments forts -->
          <section class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Actions spéciales inédites</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div class="aspect-square bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold text-center">Galaxy<br>Storm</span>
              </div>
              <div class="aspect-square bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold text-center">Cosmic<br>Blaster</span>
              </div>
              <div class="aspect-square bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold text-center">Time<br>Paradox</span>
              </div>
              <div class="aspect-square bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold text-center">Dimension<br>Cannon</span>
              </div>
              <div class="aspect-square bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold text-center">Meteor<br>Strike</span>
              </div>
              <div class="aspect-square bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold text-center">Solar<br>Flare</span>
              </div>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <!-- Informations pratiques -->
          <div class="bg-white rounded-xl shadow-lg p-6 mb-8 sticky top-8">
            <h3 class="text-2xl font-bold text-gray-800 mb-6">Informations pratiques</h3>
            
            <!-- Prix -->
            <div class="mb-6">
              <div class="flex justify-between items-center mb-2">
                <span class="text-gray-600">Prix</span>
                <span class="text-2xl font-bold text-purple-600">35€</span>
              </div>
              <p class="text-sm text-gray-500">Inclus: repas 2 jours, maillots, trophées</p>
            </div>

            <!-- Participants -->
            <div class="mb-6">
              <div class="flex justify-between items-center mb-2">
                <span class="text-gray-600">Inscrits</span>
                <span class="font-semibold">12/66</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-purple-600 h-2 rounded-full" style="width: 18%"></div>
              </div>
              <p class="text-sm text-gray-500 mt-1">54 places restantes</p>
            </div>

            <!-- Bouton d'inscription -->
            <button class="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors mb-4">
              S'inscrire maintenant
            </button>
            
            <!-- Early bird -->
            <div class="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <h4 class="font-semibold text-yellow-800 mb-2">🐦 Inscription anticipée</h4>
              <p class="text-sm text-yellow-700">Inscrivez-vous avant le 1er novembre pour bénéficier de 5€ de réduction !</p>
            </div>

            <!-- Informations complémentaires -->
            <div class="space-y-4 text-sm">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <div class="font-medium text-gray-700">Niveau requis</div>
                  <div class="text-gray-500">Débutants bienvenus !</div>
                </div>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <div>
                  <div class="font-medium text-gray-700">Âge</div>
                  <div class="text-gray-500">12 ans minimum</div>
                </div>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <div>
                  <div class="font-medium text-gray-700">Équipes</div>
                  <div class="text-gray-500">12 équipes de 5-6 joueurs</div>
                </div>
              </div>
            </div>

            <!-- Contact -->
            <div class="mt-6 pt-6 border-t border-gray-200">
              <h4 class="font-semibold text-gray-800 mb-3">Questions ?</h4>
              <div class="space-y-2 text-sm">
                <a href="mailto:ffi2@crosskultur.fr" class="flex items-center text-purple-600 hover:text-purple-800">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  ffi2@crosskultur.fr
                </a>
              </div>
            </div>
          </div>

          <!-- Témoignages FFI 1 -->
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Retours sur FFI n°1</h3>
            <div class="space-y-4">
              <div class="border-l-4 border-blue-400 pl-4">
                <p class="text-sm text-gray-600 italic">"Hâte de participer à la deuxième édition ! La première était déjà incroyable."</p>
                <p class="text-xs text-gray-500 mt-1">- Thomas, champion FFI n°1</p>
              </div>
              <div class="border-l-4 border-purple-400 pl-4">
                <p class="text-sm text-gray-600 italic">"Les nouvelles techniques ont l'air dingues ! J'ai déjà commencé l'entraînement."</p>
                <p class="text-xs text-gray-500 mt-1">- Sarah, finaliste FFI n°1</p>
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
  title: 'FFI Edition n°2 - Cross Kultur ',
  ogTitle: 'FFI Edition n°2 - Cross Kultur ',
  description: 'Inscrivez-vous à la deuxième édition du Football Frontier International ! Plus d\'équipes, nouvelles techniques et défis inédits.',
  ogDescription: 'Inscrivez-vous à la deuxième édition du Football Frontier International ! Plus d\'équipes, nouvelles techniques et défis inédits.',
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
