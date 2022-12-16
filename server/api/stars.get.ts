import prisma from '~~/lib/prisma'

export default defineEventHandler(async event => {
  console.log('New request: ' + event.node.req.url)
  const stars = await prisma.star.findMany()

  return stars
})
