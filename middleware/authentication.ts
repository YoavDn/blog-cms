export default defineNuxtRouteMiddleware((to, from) => {
  const { data: session } = useSession()
  if (!session.value) return '/'
  return
})
