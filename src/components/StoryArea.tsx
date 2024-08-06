import { Game } from '@/types/games'

type Props = {
  game: Game | null
}

const StoryArea = ({ game }: Props) => {
  return (
    <div className="border-2 border-indigo-500/60 rounded-lg p-8">
      <p className="text-center leading-relaxed">{game?.history}</p>
    </div>
  )
}

export default StoryArea
