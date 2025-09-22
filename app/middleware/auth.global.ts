export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server)
    return

  if (to.path.startsWith('/dashboard')) {
    if (!window.localStorage.getItem('SinkSiteToken'))
      return navigateTo('/')
  }

  if (to.path === '/') {
    try {
      await useAPI('/api/verify')
      return navigateTo('/dashboard/links')
    }
    catch (e) {
      console.warn(e)
    }
  }
})
