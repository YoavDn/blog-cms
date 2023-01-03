import prisma from '~~/lib/prisma'
import { getServerSession } from '#auth'
import { BlogPost } from '@prisma/client'

export default defineEventHandler(async event => {
  try {
    const session = await getServerSession(event)
    // const body = await readBody(event)
    const user = await prisma.user.findUnique({
      where: {
        email: session!.user!.email!,
      },
    })

    const blogPost = await prisma.blogPost.create({
      data: {
        userId: user!.id,
      },
      include: { tags: true },
    })

    return blogPost
  } catch (err) {
    console.log(err)
  }
})
