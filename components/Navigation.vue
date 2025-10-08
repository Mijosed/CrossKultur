<template>
  <header class="bg-white shadow-lg sticky top-0 z-50">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3">
          <img 
            src="/logo.png" 
            alt="Cross Kultur  Logo" 
            class="h-16 w-auto rounded-xl"
          />
        </NuxtLink>

        <!-- Mobile menu button -->
        <button @click="toggleMobileMenu" class="md:hidden text-gray-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <NuxtLink to="/" class="nav-link">Accueil</NuxtLink>
          <NuxtLink to="/roadmap" class="nav-link">Roadmap</NuxtLink>
          <NuxtLink to="/evenements" class="nav-link">Événements</NuxtLink>
          <NuxtLink to="/billetterie" class="nav-link">Billetterie</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-show="isMobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-gray-200">
        <div class="flex flex-col space-y-2 pt-4">
          <NuxtLink to="/" class="mobile-nav-link" @click="closeMobileMenu">Accueil</NuxtLink>
          <NuxtLink to="/roadmap" class="mobile-nav-link" @click="closeMobileMenu">Roadmap</NuxtLink>
          <NuxtLink to="/evenements" class="mobile-nav-link" @click="closeMobileMenu">Événements</NuxtLink>
          <NuxtLink to="/billetterie" class="mobile-nav-link" @click="closeMobileMenu">Billetterie</NuxtLink>
          <NuxtLink to="/contact" class="mobile-nav-link" @click="closeMobileMenu">Contact</NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-600 hover:text-purple-600 font-medium transition-colors duration-200 relative;
}

.nav-link.router-link-active {
  @apply text-purple-600;
}

.nav-link.router-link-active::after {
  content: '';
  @apply absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform scale-x-100;
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform scale-x-0 transition-transform duration-200;
}

.nav-link:hover::after {
  @apply scale-x-100;
}

.mobile-nav-link {
  @apply block py-2 px-4 text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-all duration-200;
}

.mobile-nav-link.router-link-active {
  @apply text-purple-600 bg-purple-50;
}
</style>
