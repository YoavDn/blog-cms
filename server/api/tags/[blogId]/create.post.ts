import prisma from '~~/lib/prisma'
import { BlogPost } from '@prisma/client'

export default defineEventHandler(async event => {
  try {
    const body = await readBody(event)

    const blogPost = await prisma.blogPost.update({
      where: {
        id: Number(event.context.params.blogId),
      },
      data: {
        tags: { create: [{ name: body.name }] },
      },
    })

    return blogPost
  } catch (err) {
    console.log(err)
  }
})
