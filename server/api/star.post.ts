import prisma from '~~/lib/prisma'
const config = useRuntimeConfig()
export default defineEventHandler(async event => {
  console.log('New request: ' + event.node.req.url)
  console.log(config.googleClientSecret)
  await prisma.star.create({
    data: {},
  })
  const stars = await prisma.star.findMany()

  return stars
})