<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative h-96 overflow-hidden">
      <img 
        src="/ffi.png" 
        alt="FFI Edition n°1"
        class="absolute inset-0 w-full h-full object-cover"
      >
      <div class="absolute inset-0 bg-black bg-opacity-30"></div>
      
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
          <h1 class="text-5xl font-bold mb-4">FFI Edition n°1 All-Stars</h1>
          <p class="text-xl opacity-90 mb-6">
            Match All-Stars réunissant les meilleurs joueurs de la première édition FFI. 
            Une rencontre exceptionnelle avec des techniques spéciales inédites !
          </p>
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center text-white/80">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              25 Août 2025
            </div>
            <div class="flex items-center text-white/80">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Centre sportif Didot, Paris
            </div>
            <div class="flex items-center text-white/80">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Après-midi
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
            <h2 class="text-3xl font-bold text-gray-800 mb-6">À propos du match All-Stars</h2>
            <div class="prose prose-lg max-w-none text-gray-600">
              <p class="mb-4">
                Suite au succès retentissant de la première édition FFI, nous avons organisé un match 
                All-Stars exceptionnel réunissant les joueurs les plus talentueux du tournoi. Une 
                rencontre unique où les meilleures techniques se sont affrontées dans un spectacle pur !
              </p>
              <p class="mb-4">
                Deux équipes d'élite composées des stars de chaque formation ont livré un match 
                d'anthologie, avec des moments de pure magie footballistique. L'intensité était à 
                son comble et chaque action était applaudie par un public en délire.
              </p>
              <p>
                Ce match a confirmé le niveau exceptionnel de nos participants et a posé les bases 
                pour les futures éditions. Un moment d'émotion pure qui restera gravé dans nos mémoires !
              </p>
            </div>
          </section>

          <!-- Composition des équipes -->
          <section class="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Composition des équipes</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Équipe Fire -->
              <div class="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-lg p-6">
                <h3 class="text-xl font-bold text-red-700 mb-4 flex items-center">
                  Osaka Ronins
                </h3>
                <ul class="space-y-2 text-gray-700">
                  <li><strong>Capitaine :</strong> Endou (Raimon) - Gardien</li>
                  <li><strong>Défense :</strong> Kazemaru (Raimon), Kabeyama (Raimon)</li>
                  <li><strong>Milieu :</strong> Kidou (Zeus), Fudou (Chaos)</li>
                  <li><strong>Attaque :</strong> Gouenji (Raimon), Someoka (Royal Academy)</li>
                </ul>
                <div class="mt-4 p-3 bg-red-100 rounded-lg">
                  <p class="text-sm text-red-800"><strong>Technique signature :</strong> Fire Tornado</p>
                </div>
              </div>

              <!-- Équipe Lightning -->
              <div class="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
                <h3 class="text-xl font-bold text-blue-700 mb-4 flex items-center">
                  Tokyo Samurais
                </h3>
                <ul class="space-y-2 text-gray-700">
                  <li><strong>Capitaine :</strong> Aphrodi (Zeus) - Ailier</li>
                  <li><strong>Défense :</strong> Tsunami (Osaka), Tachimukai (Raimon)</li>
                  <li><strong>Milieu :</strong> Hiroto (Neo Japan), Midorikawa (Gemini Storm)</li>
                  <li><strong>Attaque :</strong> Ichinose (Unicorn), Domon (Wild)</li>
                </ul>
                <div class="mt-4 p-3 bg-blue-100 rounded-lg">
                  <p class="text-sm text-blue-800"><strong>Technique signature :</strong> Lightning Spear</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Résumé du match -->
          <section class="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Résumé du match</h2>
            <div class="space-y-6">
              <div class="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-400 p-6 rounded-lg">
                <h3 class="text-lg font-bold text-gray-800 mb-2">⚽ Résultat final : Ronins 8-7 Samurais</h3>
                <p class="text-gray-600">Un match spectaculaire qui s'est décidé dans les dernières minutes avec un retournement de situation épique !</p>
              </div>
              
            </div>
          </section>

          <!-- Temps forts -->
          <section class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Temps forts du match</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div class="aspect-square bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold text-center">Fire Tornado<br>d'ouverture</span>
              </div>
              <div class="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold text-center">God Knows<br>spectaculaire</span>
              </div>
              <div class="aspect-square bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold text-center">Duel de<br>gardiens</span>
              </div>
              <div class="aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold text-center">Remontada<br>épique</span>
              </div>
              <div class="aspect-square bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold text-center">But contre<br>son camp</span>
              </div>
              <div class="aspect-square bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold text-center">Célébration<br>finale</span>
              </div>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <!-- Match info -->
          <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 class="text-2xl font-bold text-gray-800 mb-6">Informations match</h3>
            
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Score final</span>
                <span class="text-2xl font-bold text-green-600">8-7</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Spectateurs</span>
                <span class="text-xl font-semibold">100</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Note du public</span>
                <span class="text-xl font-semibold">⭐ 5.0</span>
              </div>
            </div>
          </div>

          <!-- MVP -->
          <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 class="text-xl font-bold text-gray-800 mb-4">🏆 Joueur du match</h3>
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span class="text-white font-bold text-xl">G</span>
              </div>
              <h4 class="font-bold text-gray-800">RBH</h4>
              <p class="text-sm text-gray-600 mb-2">Osaka Ronins - Gardien de but</p>
              <p class="text-xs text-gray-500">Muraille impénétrable, a empêché plusieurs tirs au but</p>
            </div>
          </div>

          <!-- Prochains événements -->
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Prochains événements</h3>
            <div class="space-y-4">
              <div class="border border-gray-200 rounded-lg p-4">
                <h4 class="font-semibold text-gray-800 mb-1">FFI Edition n°2</h4>
                <p class="text-sm text-gray-600 mb-2">Encore plus d'équipes et de techniques !</p>
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
  title: 'FFI Edition n°1 All-Stars - CrossKultur',
  ogTitle: 'FFI Edition n°1 All-Stars - CrossKultur',
  description: 'Revivez le match All-Stars épique de la première édition FFI. Les meilleurs joueurs s\'affrontent dans un spectacle inoubliable !',
  ogDescription: 'Revivez le match All-Stars épique de la première édition FFI. Les meilleurs joueurs s\'affrontent dans un spectacle inoubliable !',
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
