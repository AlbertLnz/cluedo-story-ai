import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getRandomId(): Promise<string | null> {
  try {
    const games = await prisma.game.findMany()
    const randomIndex = Math.floor(Math.random() * games.length)

    if (games.length === 0) return null

    return games[randomIndex].id
  } catch (err) {
    return null
  } finally {
    await prisma.$disconnect()
  }
}

export default getRandomId
