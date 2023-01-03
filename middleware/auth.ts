export default defineNuxtRouteMiddleware(async (to, from) => {
  const { data: session } = useSession()
  const id = (to.params.title as string).split('-').pop()
  const { data: blog } = await useFetch(`/api/blog/${'1'}`)
  if (!session.value) {
    return navigateTo('/')
  }

  if (blog.value?.User.email === session.value.user!.email) {
    return
  }
  return navigateTo('/error')
})
