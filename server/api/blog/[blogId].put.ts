import { getServerSession } from '#auth'
import prisma from '~~/lib/prisma'

export default defineEventHandler(async event => {
  const body = await readBody(event)
  const session = await getServerSession(event)
  if (!session) {
    return null
  }
  console.log(body)

  const updateUser = await prisma.blogPost.update({
    where: {
      id: +event.context.params.blogId,
    },
    data: {
      content: body.content,
    },
  })

  return updateUser
})
