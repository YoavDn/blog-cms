import { getServerSession } from '#auth'
import { Tag } from '@prisma/client'
import prisma from '~~/lib/prisma'

export default defineEventHandler(async event => {
  const body = await readBody(event)
  const session = await getServerSession(event)
  if (!session) {
    return null
  }

  console.log(body.tags)

  const updateUser = await prisma.blogPost.update({
    where: {
      id: Number(event.context.params.blogId),
    },
    include: { tags: true, User: true },
    data: {
      tags: {
        set: body.tags.map((tag: Tag) => {
          return { id: tag.id }
        }),
      },
      content: body.content,
      title: body.title,
      published: body.published,
      publishedAt: body.published ? new Date() : null,
    },
  })

  return updateUser
})
