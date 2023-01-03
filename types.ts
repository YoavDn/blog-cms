import { Prisma } from '@prisma/client'
// import getBlogWithTags  from '~~/server/api/blog/[blogId]'

// type BlogPostWithTags = Prisma.PromiseReturnType<typeof getBlogPostWithTags>
const blogWithTags = Prisma.validator<Prisma.BlogPostArgs>()({
  include: { tags: true },
})

type BlogWithTags = Prisma.BlogPostGetPayload<typeof blogWithTags>
