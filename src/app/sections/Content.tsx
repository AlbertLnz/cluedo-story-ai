import ButtonsList from '@/components/CharacterButtonsList'
import GenerateButton from '@/components/GenerateButton'
import StoryArea from '@/components/StoryArea'
import { useGame } from '@/store/store'

const Content = () => {
  const game = useGame((state) => state.game)

  return (
    <>
      <div className="flex space-x-12 mb-4">
        <GenerateButton
          icon="/ai_stars_icon.webp"
          text="Generate by IA"
          className="border-[#763983]"
          action="generateIA"
        />
        <GenerateButton
          icon="/db_icon.webp"
          text="Generate by BBDD"
          className="border-[#23AAF2]"
          action="generateBBDD"
        />
      </div>
      <StoryArea game={game} />
      <ButtonsList />
    </>
  )
}

export default Content
