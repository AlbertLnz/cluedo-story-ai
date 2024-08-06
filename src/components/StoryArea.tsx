import { Game } from '@/types/games'
import { useEffect, useState } from 'react'

const StoryArea = () => {
  const [story, setStory] = useState<Game | null>(null)

  const getStoryOfBBDD = async () => {
    try {
      const response = await fetch('/api/randomStoryBBDD')
      if (!response.ok) {
        throw new Error('Error fetching the story')
      }
      const storyData: Game = await response.json()
      setStory(storyData)
    } catch (err) {
      console.error('Error fetching the story:', err)
    }
  }

  useEffect(() => {
    getStoryOfBBDD()
  }, [])

  return <div>{story?.history}</div>
}

export default StoryArea
