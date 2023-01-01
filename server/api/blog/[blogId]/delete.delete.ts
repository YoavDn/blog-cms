import prisma from '~~/lib/prisma'

export default defineEventHandler(async event => {
  try {
    const blog = await prisma.blogPost.delete({
      where: {
        id: Number(event.context.params.blogId),
      },
    })

    return { status: 'ok', msg: 'delete successfully' }
  } catch (err) {
    return console.log(err)
  }
})
