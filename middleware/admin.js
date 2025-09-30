export default defineNuxtRouteMiddleware((to, from) => {
  // Vérifier si l'utilisateur est déjà authentifié
  const isAuthenticated = useCookie('admin-authenticated', {
    default: () => false,
    maxAge: 60 * 60 * 8, // 8 heures de session
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  })

  // Si pas authentifié et pas sur la page de login, rediriger
  if (!isAuthenticated.value && to.path !== '/admin/login') {
    return navigateTo('/admin/login')
  }

  // Si authentifié et sur la page de login, rediriger vers le dashboard
  if (isAuthenticated.value && to.path === '/admin/login') {
    return navigateTo('/admin')
  }
})