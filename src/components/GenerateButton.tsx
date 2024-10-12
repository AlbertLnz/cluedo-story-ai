import { useGame } from '@/store/store'
import { getStoryOfBBDD } from '@/utils/finals/getStoryOfBBDD'
import { getStoryOfOpenAI } from '@/utils/finals/getStoryOfOpenAI'
import Image from 'next/image'

type Props = {
  icon: string
  text: string
  className: string
  action: string
}

const GenerateButton = ({ icon, text, className, action }: Props) => {
  const setGame = useGame((state) => state.setGame)

  const handleAction = async (action: string) => {
    action === 'generateBBDD'
      ? setGame(await getStoryOfBBDD())
      : setGame(await getStoryOfOpenAI())
  }

  return (
    <button
      className={`${className} flex border-2 rounded-xl items-center justify-center px-8 py-0.5 bg-[#181618] text-md font-semibold text-lg`}
      onClick={() => handleAction(action)}
    >
      <Image src={icon} alt={text} width={50} height={50} className="p-2" />
      <p className="ml-2">{text}</p>
    </button>
  )
}

export default GenerateButton
