import prisma from '~~/lib/prisma'
import { BlogPost } from '@prisma/client'

export default defineEventHandler(async event => {
  try {
    const body = await readBody(event)
    const { isNew, tag, name, toRemove } = body.options

    const blogPost = await prisma.blogPost.update({
      where: {
        id: Number(event.context.params.blogId),
      },
      include: { tags: true },
      data: {
        tags: isNew
          ? { create: { name } }
          : toRemove
          ? { disconnect: [{ id: tag.id }] }
          : { connect: [{ id: tag.id }] },
      },
    })

    return blogPost
  } catch (err) {
    console.log(err)
  }
})
