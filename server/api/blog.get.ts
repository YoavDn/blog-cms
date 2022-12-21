import prisma from '~~/lib/prisma'
import { getServerSession } from '#auth'

export default defineEventHandler(async event => {
  const session = await getServerSession(event)

  if (!session) {
    return { status: 'unauthenticated!' }
  }
  const user = await prisma.user.findUnique({
    where: {
      email: session!.user!.email!,
    },
  })
  const blogs = await prisma.blogPost.findMany({
    where: {
      userId: user?.id,
    },
  })
  console.log(blogs)
  return {
    api: 'work',
  }
})
