<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative h-96 overflow-hidden">
      <img 
        src="/balle_prison.jpg" 
        alt="Balle au Prisonnier"
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
          <h1 class="text-5xl font-bold mb-4">Tournoi Balle au Prisonnier</h1>
          <p class="text-xl opacity-90 mb-6">
            Un tournoi de balle au prisonnier épique inspiré des plus grands moments d'anime ! 
            Stratégie, réflexes et esprit d'équipe seront vos meilleurs atouts !
          </p>
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center text-white/80">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              22 Février 2025
            </div>
            <div class="flex items-center text-white/80">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Gymnase municipal
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
                Revivez l'intensité des matchs de balle au prisonnier les plus épiques des anime ! 
                Inspiré des moments légendaires de séries comme "Prison School", "Assassination Classroom" 
                ou encore les scènes mémorables de tournois scolaires, cet événement promet des émotions fortes !
              </p>
              <p class="mb-4">
                Plus qu'un simple jeu, ce tournoi met l'accent sur la stratégie d'équipe, les réflexes, 
                et l'esprit sportif. Chaque équipe devra développer ses propres tactiques pour éliminer 
                les adversaires tout en protégeant ses coéquipiers.
              </p>
              <p>
                Attendez-vous à des retournements de situation dignes des meilleurs anime, avec des 
                "techniques spéciales" autorisées et des moments de pure adrénaline !
              </p>
            </div>
          </section>

          <!-- Règles spéciales -->
          <section class="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Règles spéciales manga</h2>
            <div class="space-y-6">
              <div class="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 class="text-xl font-bold text-red-700 mb-3">🔥 Techniques spéciales autorisées</h3>
                <ul class="text-gray-700 space-y-2">
                  <li>• <strong>Thunder Shot :</strong> Lancer puissant avec effet sonore</li>
                  <li>• <strong>Shadow Clone :</strong> Feinte de lancer pour tromper l'adversaire</li>
                  <li>• <strong>Phoenix Dodge :</strong> Esquive spectaculaire avec roulade</li>
                  <li>• <strong>Team Combo :</strong> Passes coordonnées entre coéquipiers</li>
                </ul>
              </div>
              
              <div class="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <h3 class="text-xl font-bold text-blue-700 mb-3">⚡ Règles manga</h3>
                <ul class="text-gray-700 space-y-2">
                  <li>• <strong>Mode héroïque :</strong> Dernier joueur = pouvoirs temporaires</li>
                  <li>• <strong>Power-up :</strong> Balles spéciales apparaissent aléatoirement</li>
                  <li>• <strong>Rage Mode :</strong> Équipe menée peut activer un bonus</li>
                  <li>• <strong>Friendship Power :</strong> Encouragements = bonus d'équipe</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Format du tournoi -->
          <section class="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Format du tournoi</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="border border-gray-200 rounded-lg p-6 text-center">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span class="text-green-600 font-bold text-xl">1</span>
                </div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Phase de groupes</h3>
                <p class="text-sm text-gray-600">8 équipes, 2 groupes de 4. Tous contre tous dans chaque groupe.</p>
              </div>
              <div class="border border-gray-200 rounded-lg p-6 text-center">
                <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span class="text-orange-600 font-bold text-xl">2</span>
                </div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Demi-finales</h3>
                <p class="text-sm text-gray-600">Les 2 premiers de chaque groupe s'affrontent en croisant les groupes.</p>
              </div>
              <div class="border border-gray-200 rounded-lg p-6 text-center">
                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span class="text-purple-600 font-bold text-xl">3</span>
                </div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Finale</h3>
                <p class="text-sm text-gray-600">Grande finale + match pour la 3ème place. Spectacle garanti !</p>
              </div>
            </div>
          </section>

          <!-- Programme -->
          <section class="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Programme de la journée</h2>
            <div class="space-y-4">
              <div class="flex items-center p-4 border border-gray-200 rounded-lg">
                <div class="w-16 text-center">
                  <span class="text-lg font-bold text-red-600">9h00</span>
                </div>
                <div class="ml-4">
                  <h4 class="font-semibold text-gray-800">Accueil et formation des équipes</h4>
                  <p class="text-sm text-gray-600">Tirage au sort, présentation des règles spéciales</p>
                </div>
              </div>
              <div class="flex items-center p-4 border border-gray-200 rounded-lg">
                <div class="w-16 text-center">
                  <span class="text-lg font-bold text-red-600">9h30</span>
                </div>
                <div class="ml-4">
                  <h4 class="font-semibold text-gray-800">Échauffement et démonstrations</h4>
                  <p class="text-sm text-gray-600">Apprentissage des techniques spéciales</p>
                </div>
              </div>
              <div class="flex items-center p-4 border border-gray-200 rounded-lg">
                <div class="w-16 text-center">
                  <span class="text-lg font-bold text-red-600">10h00</span>
                </div>
                <div class="ml-4">
                  <h4 class="font-semibold text-gray-800">Phase de groupes</h4>
                  <p class="text-sm text-gray-600">Matchs de qualification sur 2 terrains simultanés</p>
                </div>
              </div>
              <div class="flex items-center p-4 border border-gray-200 rounded-lg">
                <div class="w-16 text-center">
                  <span class="text-lg font-bold text-red-600">12h30</span>
                </div>
                <div class="ml-4">
                  <h4 class="font-semibold text-gray-800">Pause déjeuner</h4>
                  <p class="text-sm text-gray-600">Bento japonais + analyse des matchs matinaux</p>
                </div>
              </div>
              <div class="flex items-center p-4 border border-gray-200 rounded-lg">
                <div class="w-16 text-center">
                  <span class="text-lg font-bold text-red-600">14h00</span>
                </div>
                <div class="ml-4">
                  <h4 class="font-semibold text-gray-800">Phases finales</h4>
                  <p class="text-sm text-gray-600">Demi-finales, finale et remise des prix</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Galerie concept -->
          <section class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Ambiance du tournoi</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div class="aspect-square bg-gradient-to-br from-red-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold text-center">Thunder<br>Shot</span>
              </div>
              <div class="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold text-center">Epic<br>Dodges</span>
              </div>
              <div class="aspect-square bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold text-center">Team<br>Spirit</span>
              </div>
              <div class="aspect-square bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold text-center">Victory<br>Dance</span>
              </div>
              <div class="aspect-square bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold text-center">Rage<br>Mode</span>
              </div>
              <div class="aspect-square bg-gradient-to-br from-indigo-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-semibold text-center">Final<br>Showdown</span>
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
                <span class="text-2xl font-bold text-red-600">20€</span>
              </div>
              <p class="text-sm text-gray-500">Inclus: repas, boissons, goodies</p>
            </div>

            <!-- Participants -->
            <div class="mb-6">
              <div class="flex justify-between items-center mb-2">
                <span class="text-gray-600">Inscrits</span>
                <span class="font-semibold">16/40</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-red-600 h-2 rounded-full" style="width: 40%"></div>
              </div>
              <p class="text-sm text-gray-500 mt-1">24 places restantes</p>
            </div>

            <!-- Bouton d'inscription -->
            <button class="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors mb-4">
              Rejoindre le tournoi !
            </button>

            <!-- Informations complémentaires -->
            <div class="space-y-4 text-sm">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <div class="font-medium text-gray-700">Niveau</div>
                  <div class="text-gray-500">Débutants bienvenus !</div>
                </div>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <div>
                  <div class="font-medium text-gray-700">Âge</div>
                  <div class="text-gray-500">10 ans minimum</div>
                </div>
              </div>
              <div class="flex items-start">
                <svg class="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <div>
                  <div class="font-medium text-gray-700">Équipes</div>
                  <div class="text-gray-500">8 équipes de 5 joueurs</div>
                </div>
              </div>
            </div>

            <!-- Contact -->
            <div class="mt-6 pt-6 border-t border-gray-200">
              <h4 class="font-semibold text-gray-800 mb-3">Questions ?</h4>
              <div class="space-y-2 text-sm">
                <a href="mailto:prison@crosskultur.fr" class="flex items-center text-red-600 hover:text-red-800">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  prison@crosskultur.fr
                </a>
              </div>
            </div>
          </div>

          <!-- Prix -->
          <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 class="text-xl font-bold text-gray-800 mb-4">🏆 Récompenses</h3>
            <div class="space-y-3">
              <div class="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <span class="font-medium text-yellow-800">1ère place</span>
                <span class="text-sm text-yellow-700">Trophée + 100€ cash</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <span class="font-medium text-gray-700">2ème place</span>
                <span class="text-sm text-gray-600">Médailles + 50€ cash</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                <span class="font-medium text-orange-700">3ème place</span>
                <span class="text-sm text-orange-600">Médailles + goodies</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                <span class="font-medium text-purple-700">Meilleur joueur</span>
                <span class="text-sm text-purple-600">Prix spécial</span>
              </div>
            </div>
          </div>

          <!-- Équipement -->
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-4">📦 Équipement fourni</h3>
            <div class="space-y-2 text-sm text-gray-600">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Balles officielles souples
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Chasubles d'équipe
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Protections (optionnelles)
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Arbitres qualifiés
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
  title: 'Tournoi Balle au Prisonnier - CrossKultur',
  ogTitle: 'Tournoi Balle au Prisonnier - CrossKultur',
  description: 'Participez au tournoi de balle au prisonnier le plus épique ! Techniques spéciales, esprit manga et fun garanti.',
  ogDescription: 'Participez au tournoi de balle au prisonnier le plus épique ! Techniques spéciales, esprit manga et fun garanti.',
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
