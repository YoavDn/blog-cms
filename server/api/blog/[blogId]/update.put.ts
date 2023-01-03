import { getServerSession } from '#auth'
import prisma from '~~/lib/prisma'

export default defineEventHandler(async event => {
  const body = await readBody(event)
  const session = await getServerSession(event)
  if (!session) {
    return null
  }

  const updateUser = await prisma.blogPost.update({
    where: {
      id: Number(event.context.params.blogId),
    },
    include: { tags: true },
    data: {
      content: body.content,
      title: body.title,
    },
  })

  return updateUser
})
