import { BlogPost, Tag, User } from '@prisma/client'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { data: session } = useSession()
  const id = (to.params.title as string).split('-').pop()
  const { data: blog } = await useFetch<
    (BlogPost & { tags: Tag[]; User: User }) | null
  >(`/api/blog/${id}`)
  if (!session.value) {
    return navigateTo('/')
  }

  if (blog.value!.User.email === session.value.user!.email) {
    return
  }
  return navigateTo('/error')
})
