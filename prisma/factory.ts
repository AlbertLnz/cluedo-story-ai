import { PrismaClient } from '@prisma/client'
import games from '../src/data/games'

const prisma = new PrismaClient()

async function factoryExampleHistories() {
  for (const game of games) {
    await prisma.game.create({
      data: game,
    })
  }
}

factoryExampleHistories()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
