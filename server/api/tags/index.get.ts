import prisma from '~~/lib/prisma'

export default defineEventHandler(async event => {
  const query = getQuery(event)
  let tags
  if (query.name) {
    tags = await prisma.tag.findMany({
      where: {
        name: {
          startsWith: String(query.name),
        },
      },
    })
  } else {
    tags = await prisma.tag.findMany({
      take: 10,
    })
  }
  return tags
})
