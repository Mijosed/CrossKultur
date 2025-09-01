<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative h-96 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500"></div>
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
          <h1 class="text-5xl font-bold mb-4">Tournament Arc</h1>
          <p class="text-xl opacity-90 mb-6">
            Un tournoi d'arts martiaux inspiré des plus grands combats de mangas. 
            Testez vos compétences et vivez l'esprit de compétition des héros !
          </p>
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center text-white/80">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              15 Mars 2025
            </div>
            <div class="flex items-center text-white/80">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Dojo Municipal
            </div>
            <div class="flex items-center text-white/80">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Journée complète (9h-18h)
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
                Préparez-vous à vivre l'expérience ultime du Tournament Arc ! Inspiré des tournois légendaires 
                de Dragon Ball, Naruto, et bien d'autres mangas, cet événement vous propose de vous mesurer 
                à d'autres passionnés dans une ambiance fair-play et festive.
              </p>
              <p class="mb-4">
                Notre tournoi se divise en plusieurs catégories pour s'adapter à tous les niveaux et tous les âges. 
                Que vous soyez débutant ou expert, il y a une place pour vous dans cette compétition !
              </p>
              <p>
                Au-delà de la compétition, c'est une journée de partage, d'apprentissage et de fun garantie. 
                Rencontrez d'autres fans, découvrez de nouvelles techniques, et vivez des moments inoubliables !
              </p>
            </div>
          </section>

          <!-- Programme -->
          <section class="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Programme de la journée</h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0 w-20 text-center">
                  <span class="text-lg font-bold text-purple-600">9h00</span>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-800">Accueil et échauffement</h3>
                  <p class="text-gray-600">Arrivée des participants, vérification des inscriptions et séance d'échauffement collective.</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0 w-20 text-center">
                  <span class="text-lg font-bold text-purple-600">10h00</span>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-800">Épreuves qualificatives</h3>
                  <p class="text-gray-600">Tests de force, agilité et technique pour former les groupes de niveau.</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0 w-20 text-center">
                  <span class="text-lg font-bold text-purple-600">12h00</span>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-800">Pause déjeuner</h3>
                  <p class="text-gray-600">Repas japonais traditionnel fourni, moment de détente et échanges.</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0 w-20 text-center">
                  <span class="text-lg font-bold text-purple-600">14h00</span>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-800">Tournoi principal</h3>
                  <p class="text-gray-600">Combats en élimination directe dans chaque catégorie.</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0 w-20 text-center">
                  <span class="text-lg font-bold text-purple-600">17h00</span>
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-semibold text-gray-8000">Finales et remise des prix</h3>
                  <p class="text-gray-600">Finales épiques et cérémonie de remise des trophées.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Catégories -->
          <section class="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Catégories de compétition</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="border border-gray-200 rounded-lg p-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Jeunes Saiyans (12-16 ans)</h3>
                <p class="text-gray-600 mb-4">Catégorie débutant axée sur l'apprentissage et le fun.</p>
                <ul class="text-sm text-gray-500">
                  <li>• Combats à points</li>
                  <li>• Durée: 2 minutes</li>
                  <li>• Protections obligatoires</li>
                </ul>
              </div>
              <div class="border border-gray-200 rounded-lg p-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Ninjas Juniors (16-25 ans)</h3>
                <p class="text-gray-600 mb-4">Niveau intermédiaire avec techniques avancées.</p>
                <ul class="text-sm text-gray-500">
                  <li>• Combats techniques</li>
                  <li>• Durée: 3 minutes</li>
                  <li>• Épreuves d'agilité</li>
                </ul>
              </div>
              <div class="border border-gray-200 rounded-lg p-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Guerriers Z (25+ ans)</h3>
                <p class="text-gray-600 mb-4">Catégorie experte pour les plus aguerris.</p>
                <ul class="text-sm text-gray-500">
                  <li>• Combats intensifs</li>
                  <li>• Durée: 5 minutes</li>
                  <li>• Toutes techniques autorisées</li>
                </ul>
              </div>
              <div class="border border-gray-200 rounded-lg p-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Équipes Manga</h3>
                <p class="text-gray-600 mb-4">Combats d'équipe de 3 personnes.</p>
                <ul class="text-sm text-gray-500">
                  <li>• Stratégie d'équipe</li>
                  <li>• Durée: 7 minutes</li>
                  <li>• Coordination requise</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Galerie -->
          <section class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Aperçu de l'événement</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div class="aspect-square bg-gradient-to-br from-red-400 to-orange-400 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold">Zone de combat</span>
              </div>
              <div class="aspect-square bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold">Espace détente</span>
              </div>
              <div class="aspect-square bg-gradient-to-br from-green-400 to-teal-400 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold">Stand nourriture</span>
              </div>
              <div class="aspect-square bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold">Podium</span>
              </div>
              <div class="aspect-square bg-gradient-to-br from-pink-400 to-red-400 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold">Vestiaires</span>
              </div>
              <div class="aspect-square bg-gradient-to-br from-indigo-400 to-blue-400 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold">Espace photo</span>
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
                <span class="text-2xl font-bold text-purple-600">25€</span>
              </div>
              <p class="text-sm text-gray-500">Inclus: repas, trophées, goodies</p>
            </div>

            <!-- Participants -->
            <div class="mb-6">
              <div class="flex justify-between items-center mb-2">
                <span class="text-gray-600">Participants</span>
                <span class="font-semibold">42/60</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-purple-600 h-2 rounded-full" style="width: 70%"></div>
              </div>
              <p class="text-sm text-gray-500 mt-1">18 places restantes</p>
            </div>

            <!-- Bouton d'inscription -->
            <button class="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors mb-4">
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
                  <div class="text-gray-500">Tous niveaux acceptés</div>
                </div>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <div>
                  <div class="font-medium text-gray-700">Âge minimum</div>
                  <div class="text-gray-500">12 ans (autorisation parentale requise)</div>
                </div>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <div class="font-medium text-gray-700">Matériel fourni</div>
                  <div class="text-gray-500">Protections, gants, kimono si nécessaire</div>
                </div>
              </div>
            </div>

            <!-- Contact -->
            <div class="mt-6 pt-6 border-t border-gray-200">
              <h4 class="font-semibold text-gray-800 mb-3">Questions ?</h4>
              <div class="space-y-2 text-sm">
                <a href="mailto:tournament@crosskultur.fr" class="flex items-center text-purple-600 hover:text-purple-800">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  tournament@crosskultur.fr
                </a>
                <a href="tel:+33123456789" class="flex items-center text-purple-600 hover:text-purple-800">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  01 23 45 67 89
                </a>
              </div>
            </div>
          </div>

          <!-- Événements similaires -->
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-4">Événements similaires</h3>
            <div class="space-y-4">
              <div class="border border-gray-200 rounded-lg p-4">
                <h4 class="font-semibold text-gray-800 mb-1">École des Héros</h4>
                <p class="text-sm text-gray-600 mb-2">Entraînement à la My Hero Academia</p>
                <span class="text-xs text-purple-600 font-medium">22 Mars 2025</span>
              </div>
              <div class="border border-gray-200 rounded-lg p-4">
                <h4 class="font-semibold text-gray-800 mb-1">Grand Prix Gaming</h4>
                <p class="text-sm text-gray-600 mb-2">Tournoi de jeux vidéo manga</p>
                <span class="text-xs text-purple-600 font-medium">10 Juin 2025</span>
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
  title: 'Tournament Arc - CrossKultur',
  ogTitle: 'Tournament Arc - CrossKultur',
  description: 'Participez au Tournament Arc de CrossKultur ! Tournoi d\'arts martiaux inspiré des plus grands combats de mangas.',
  ogDescription: 'Participez au Tournament Arc de CrossKultur ! Tournoi d\'arts martiaux inspiré des plus grands combats de mangas.',
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
