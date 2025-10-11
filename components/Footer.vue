<template>
  <footer class="bg-purple-700 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Cross Kultur </h3>
          <p class="text-gray-300">Association qui organise des événements inspirés de la pop-culture, transposés dans la réalité.</p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Navigation</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-gray-300 hover:text-white transition-colors">Accueil</NuxtLink></li>
            <li><NuxtLink to="/roadmap" class="text-gray-300 hover:text-white transition-colors">Roadmap</NuxtLink></li>
            <li><NuxtLink to="/evenements" class="text-gray-300 hover:text-white transition-colors">Événements</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-gray-300 hover:text-white transition-colors">Contact</NuxtLink></li>
            <li><NuxtLink to="/billetterie" class="text-gray-300 hover:text-white transition-colors">Billetterie</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Réseaux Sociaux</h3>
          <div class="flex space-x-4">
            <a href="https://www.instagram.com/crosskultur.fr/" class="text-gray-300 hover:text-white transition-colors">
              <span class="sr-only">Instagram</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path 
      d="M7.5 2h9a5.5 5.5 0 0 1 5.5 5.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm9.75 1.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" 
      
    />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@crosskultur" class="text-gray-300 hover:text-white transition-colors">
              <span class="sr-only">TikTok</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-purple-700 mt-8 pt-8 text-center">
        <p class="text-gray-300">&copy; 2025 Cross Kultur. Tous droits réservés.</p>
      </div>
      <div class="border-t border-purple-700 mt-2 pt-2 text-center">
        <p class="text-gray-300">By <a href="https://www.kimdev.fr" class="text-purple-400 hover:underline">KIMDEV</a></p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Aucune logique nécessaire pour le footer pour le moment
</script>
