import prisma from '~~/lib/prisma'
import { getServerSession } from '#auth'

export default defineEventHandler(async event => {
  const session = await getServerSession(event)
  if (!session) {
    return null
  }

  const blog = await prisma.blogPost.findUnique({
    where: {
      id: +event.context.params.blogId,
    },
  })
  return blog
})
