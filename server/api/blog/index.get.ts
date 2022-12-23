import prisma from '~~/lib/prisma'
import { getServerSession } from '#auth'

export default defineEventHandler(async event => {
  const session = await getServerSession(event)
  console.log('session is:', session)
  if (!session) {
    console.log('unauthenticated!')
    return null
  }
  const user = await prisma.user.findUnique({
    where: {
      email: session.user?.email!,
    },
  })
  const blogs = await prisma.blogPost.findMany({
    where: {
      userId: user?.id,
    },
  })
  console.log('blogs are:', blogs)
  return blogs
})
