import ButtonsList from '@/components/CharacterButtonsList'
import GenerateButton from '@/components/GenerateButton'
import StoryArea from '@/components/StoryArea'

const Content = () => {
  return (
    <>
      <div className="flex space-x-12 mb-4">
        <GenerateButton
          icon="/ai_stars_icon.webp"
          text="Generate by IA"
          className="border-[#763983]"
        />
        <GenerateButton
          icon="/db_icon.webp"
          text="Generate by BBDD"
          className="border-[#23AAF2]"
        />
      </div>
      <StoryArea />
      <ButtonsList />
    </>
  )
}

export default Content
