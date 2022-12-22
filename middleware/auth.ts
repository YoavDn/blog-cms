export default defineNuxtRouteMiddleware((to, from) => {
  const { data: session } = useSession()
  if (session) {
    console.log('canttt')
    return abortNavigation()
  }
  return navigateTo('/')
})
