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
            Des matchs intenses avec des techniques spéciales et une ambiance de compétition authentique !
          </p>
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center text-white/80">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              20 Janvier 2026
            </div>
            <div class="flex items-center text-white/80">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Paris, France
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
                Chaque équipe pourra développer ses propres "techniques spéciales", créer des stratégies 
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
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Programme du tournoi</h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0 w-20 text-center">
                  <span class="text-lg font-bold text-orange-600">Sam 9h</span>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-800">Accueil et échauffement</h3>
                  <p class="text-gray-600">Arrivée des équipes, vérification des inscriptions et séance d'échauffement collective avec exercices techniques.</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0 w-20 text-center">
                  <span class="text-lg font-bold text-orange-600">10h</span>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-800">Épreuves de skills</h3>
                  <p class="text-gray-600">Concours de tirs à 3 points, de dunks créatifs et de dribbles techniques pour déterminer les rangs de départ.</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0 w-20 text-center">
                  <span class="text-lg font-bold text-orange-600">11h</span>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-800">Premier tour</h3>
                  <p class="text-gray-600">Matchs de poules, phase de découverte où les équipes testent leurs stratégies.</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0 w-20 text-center">
                  <span class="text-lg font-bold text-orange-600">12h30</span>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-800">Pause déjeuner</h3>
                  <p class="text-gray-600">Repas en commun, analyse des matchs matinaux et temps libre pour perfectionner les techniques.</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0 w-20 text-center">
                  <span class="text-lg font-bold text-orange-600">14h</span>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-800">Phase éliminatoire</h3>
                  <p class="text-gray-600">Quarts et demi-finales en élimination directe, l'intensité monte d'un cran !</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0 w-20 text-center">
                  <span class="text-lg font-bold text-orange-600">Dim 10h</span>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-800">Finales</h3>
                  <p class="text-gray-600">Petite finale et grande finale dans une ambiance de folie, avec remise des trophées.</p>
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
            
            <!-- Prix -->
            <div class="mb-6">
              <div class="flex justify-between items-center mb-2">
                <span class="text-gray-600">Prix</span>
                <span class="text-2xl font-bold text-orange-600">30€</span>
              </div>
              <p class="text-sm text-gray-500">Inclus: repas, maillots, trophées</p>
            </div>

            <!-- Participants -->
            <div class="mb-6">
              <div class="flex justify-between items-center mb-2">
                <span class="text-gray-600">Inscrits</span>
                <span class="font-semibold">8/60</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-orange-600 h-2 rounded-full" style="width: 13%"></div>
              </div>
              <p class="text-sm text-gray-500 mt-1">52 places restantes</p>
            </div>

            <!-- Bouton d'inscription -->
            <button class="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors mb-4">
              S'inscrire maintenant
            </button>

            <!-- Informations complémentaires -->
            <div class="space-y-4 text-sm">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <div class="font-medium text-gray-700">Niveau requis</div>
                  <div class="text-gray-500">Tous niveaux (catégories adaptées)</div>
                </div>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <div>
                  <div class="font-medium text-gray-700">Âge</div>
                  <div class="text-gray-500">14 ans minimum</div>
                </div>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <div>
                  <div class="font-medium text-gray-700">Format équipes</div>
                  <div class="text-gray-500">5vs5 (+ 3vs3 streetball)</div>
                </div>
              </div>
            </div>

            <!-- Contact -->
            <div class="mt-6 pt-6 border-t border-gray-200">
              <h4 class="font-semibold text-gray-800 mb-3">Questions ?</h4>
              <div class="space-y-2 text-sm">
                <a href="mailto:wintercup@crosskultur.fr" class="flex items-center text-orange-600 hover:text-orange-800">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  wintercup@crosskultur.fr
                </a>
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
  title: 'Winter Cup - CrossKultur',
  ogTitle: 'Winter Cup - CrossKultur',
  description: 'Participez à la Winter Cup ! Tournoi de basket-ball inspiré de Kuroko no Basket et Slam Dunk avec techniques spéciales.',
  ogDescription: 'Participez à la Winter Cup ! Tournoi de basket-ball inspiré de Kuroko no Basket et Slam Dunk avec techniques spéciales.',
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
