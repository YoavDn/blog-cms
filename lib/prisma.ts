import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// if (process.env.NODE_ENV === 'development')  prisma

export default prisma
