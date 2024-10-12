import { useUserInteractions } from '@/store/store'
import { Game } from '@/types/games'
import { useEffect, useState } from 'react'
import ShowConclusionContainer from './ShowConclusionContainer'

type Props = {
  game: Game | null
}

const StoryArea = ({ game }: Props) => {
  const userShowStory = useUserInteractions((state) => state.userShowStory)
  const [showData, setShowData] = useState(game?.history)

  useEffect(() => {
    if (game) {
      setShowData(userShowStory ? game.history : game.solution)
    }
  }, [userShowStory, game])

  return (
    <div className='border-2 border-indigo-500/60 rounded-lg p-8 relative w-full h-72 bg-[#222222] z-auto'>
      <p className='text-center leading-relaxed text-balance'>{showData}</p>
      <ShowConclusionContainer />
    </div>
  )
}

export default StoryArea
