export default defineNuxtRouteMiddleware((to, from) => {
  const { status } = useSession()

  if (status.value === 'authenticated') {
    return navigateTo('/dashboard')
  } else {
    return navigateTo('/login')
  }
})
