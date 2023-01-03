import prisma from '~~/lib/prisma'

export default defineEventHandler(async event => {
  try {
    const blog = await prisma.blogPost.findUnique({
      where: {
        id: +event.context.params.blogId,
      },
      include: { tags: true, User: true },
    })

    return blog
  } catch (err) {
    return console.log(err)
  }
})
