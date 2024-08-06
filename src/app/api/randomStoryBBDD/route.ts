import getRandomId from '@/utils/randomizeId'
import getOneRandomStory from '@/utils/storySearch'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const randomId = await getRandomId()
    if (!randomId) {
      return NextResponse.json({ message: 'No random story found' })
    }

    const story = await getOneRandomStory(randomId)
    if (!story) {
      return NextResponse.json({ message: 'Story not found' })
    }

    return NextResponse.json(story)
  } catch (error: any) {
    return NextResponse.json({
      message: 'Internal server error',
      error: error.message,
    })
  } finally {
    await prisma.$disconnect()
  }
}
