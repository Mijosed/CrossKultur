<template>
  <div class="py-12 bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-gray-800 mb-6">Contactez-nous</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Une question ? Une suggestion ? Envie de rejoindre l'aventure ? 
          N'hésitez pas à nous contacter ! Nous répondons à tous les messages avec plaisir.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Formulaire de contact -->
        <div class="bg-white rounded-xl shadow-lg p-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h2>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Nom et Prénom -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="firstName"
                  v-model="form.firstName"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
                  placeholder="Votre prénom"
                >
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="lastName"
                  v-model="form.lastName"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
                  placeholder="Votre nom"
                >
              </div>
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Adresse email *
              </label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
                placeholder="votre.email@exemple.com"
              >
            </div>

            <!-- Téléphone -->
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                Téléphone (optionnel)
              </label>
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
                placeholder="01 23 45 67 89"
              >
            </div>

            <!-- Sujet -->
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                Sujet *
              </label>
              <select
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
              >
                <option value="">Choisissez un sujet</option>
                <option value="inscription">Inscription à un événement</option>
                <option value="information">Demande d'information</option>
                <option value="partenariat">Proposition de partenariat</option>
                <option value="benevole">Devenir bénévole</option>
                <option value="suggestion">Suggestion d'événement</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors resize-vertical"
                placeholder="Écrivez votre message ici..."
              ></textarea>
            </div>

            <!-- Bouton de soumission -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting" class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Envoi en cours...
              </span>
              <span v-else>Envoyer le message</span>
            </button>
          </form>

          <!-- Message de confirmation -->
          <div v-if="isSubmitted" class="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="font-medium">Message envoyé avec succès !</span>
            </div>
            <p class="mt-2 text-sm">Nous vous répondrons dans les plus brefs délais.</p>
          </div>
        </div>

        <!-- Informations de contact -->
        <div class="space-y-8">
          <!-- Coordonnées -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Nos coordonnées</h2>
            
            <div class="space-y-6">
              <!-- Email principal -->
              <div class="flex items-start">
                <div class="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-800">Email</h3>
                  <a href="mailto:contact@crosskultur.fr" class="text-purple-600 hover:text-purple-800 transition-colors">
                    contact@crosskultur.fr
                  </a>
                  <p class="text-sm text-gray-500 mt-1">Réponse sous 24h</p>
                </div>
              </div>

              
            </div>
          </div>

          <!-- Réseaux sociaux -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Suivez-nous</h2>
            <p class="text-gray-600 mb-6">
              Restez connectés avec la communauté CrossKultur sur nos réseaux sociaux !
            </p>
            
            <div class="grid grid-cols-2 gap-4">
              <!-- Instagram -->
              <a href="#" class="flex items-center p-4 border border-gray-200 rounded-lg hover:border-pink-300 hover:bg-pink-50 transition-all duration-300 group">
                <div class="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path 
      d="M7.5 2h9a5.5 5.5 0 0 1 5.5 5.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm9.75 1.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" 
      fill="white" 
    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">Instagram</h3>
                  <p class="text-sm text-gray-500">@crosskultur.fr</p>
                </div>
              </a>

              <!-- TikTok -->
              <a href="#" class="flex items-center p-4 border border-gray-200 rounded-lg hover:border-gray-800 hover:bg-gray-50 transition-all duration-300 group">
                <div class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">TikTok</h3>
                  <p class="text-sm text-gray-500">@crosskultur</p>
                </div>
              </a>

              <!-- Discord -->
              <a href="#" class="flex items-center p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300 group">
                <div class="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">Discord</h3>
                  <p class="text-sm text-gray-500">CrossKultur Community</p>
                </div>
              </a>
            </div>
          </div>

          <!-- FAQ rapide -->
          <div class="bg-white rounded-xl shadow-lg p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Questions fréquentes</h2>
            
            <div class="space-y-4">
              <div class="border-b border-gray-200 pb-4">
                <h3 class="font-semibold text-gray-800 mb-2">Comment puis-je rejoindre CrossKultur ?</h3>
                <p class="text-sm text-gray-600">
                  Vous pouvez nous rejoindre en tant que membre actif, bénévole ou simplement participer à nos événements. 
                  Contactez-nous pour en savoir plus !
                </p>
              </div>
              
              <div class="border-b border-gray-200 pb-4">
                <h3 class="font-semibold text-gray-800 mb-2">Faut-il être expert en manga pour participer ?</h3>
                <p class="text-sm text-gray-600">
                  Pas du tout ! Nos événements sont ouverts à tous, débutants comme experts. 
                  La passion et la bonne humeur sont nos seuls prérequis.
                </p>
              </div>
              
              <div>
                <h3 class="font-semibold text-gray-800 mb-2">Organisez-vous des événements sur mesure ?</h3>
                <p class="text-sm text-gray-600">
                  Oui ! Nous proposons des événements personnalisés pour les écoles, entreprises et autres associations. 
                  Contactez-nous pour discuter de votre projet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Métadonnées de la page
useSeoMeta({
  title: 'Contact - CrossKultur',
  ogTitle: 'Contact - CrossKultur',
  description: 'Contactez CrossKultur pour toutes vos questions sur nos événements manga. Formulaire de contact et coordonnées.',
  ogDescription: 'Contactez CrossKultur pour toutes vos questions sur nos événements manga. Formulaire de contact et coordonnées.',
})

// État du formulaire
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  newsletter: false
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

// Méthode de soumission du formulaire
const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulation d'envoi (remplacer par votre logique d'envoi réelle)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Réinitialiser le formulaire
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      newsletter: false
    }
    
    isSubmitted.value = true
    
    // Masquer le message de confirmation après 5 secondes
    setTimeout(() => {
      isSubmitted.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error)
    // Gérer l'erreur ici
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Animation pour le spinner */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* Focus personnalisé pour les champs de formulaire */
input:focus,
select:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.1);
}

/* Animation pour l'apparition du message de confirmation */
.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
