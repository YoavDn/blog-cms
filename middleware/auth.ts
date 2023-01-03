export default defineNuxtRouteMiddleware((to, from) => {
  const { data: session } = useSession()
  console.log('a;dlfkj', to.params, session.value)
  if (!session.value) {
    return navigateTo('/')
  }

  if (
    to.params.user ===
    session.value.user!.name!.replaceAll(' ', '_').toLowerCase()
  ) {
    return
  }
  return navigateTo('/error')
})
