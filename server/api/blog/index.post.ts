import prisma from '~~/lib/prisma'
import { getServerSession } from '#auth'

export default defineEventHandler(async event => {
  const session = await getServerSession(event)
  console.log(session)
  if (!session) {
    return { status: 'unauthenticated!' }
  }
  const body = await readBody(event)
  const user = await prisma.user.findUnique({
    where: {
      email: session!.user!.email!,
    },
  })
  console.log(body, 'user is:', user!.id)
  const blogPost = await prisma.blogPost.create({
    data: {
      userId: user!.id,
    },
  })

  return blogPost
})
