import { PrismaClient } from '@prisma/client'

async function getOneRandomStory(id: string) {
  const prisma = new PrismaClient()

  try {
    const game = await prisma.game.findUnique({
      where: { id },
    })
    return game
  } catch (err) {
    return null
  } finally {
    await prisma.$disconnect()
  }
}

export default getOneRandomStory
