import { Game } from '@/types/games'

export const getStoryOfBBDD = async (): Promise<Game | null> => {
  try {
    const response = await fetch('/api/randomStoryBBDD')
    if (!response.ok) {
      throw new Error('Error fetching the story')
    }
    const storyData: Game = await response.json()
    return storyData
  } catch (err) {
    console.error('Error fetching the story:', err)
    return null
  }
}
