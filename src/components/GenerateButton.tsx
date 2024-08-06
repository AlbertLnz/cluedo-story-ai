import { useGame } from '@/store/store'
import { getStoryOfBBDD } from '@/utils/finals/getStoryOfBBDD'
import Image from 'next/image'

type Props = {
  icon: string
  text: string
  className: string
  action: string
}

const GenerateButton = ({ icon, text, className, action }: Props) => {
  const setGame = useGame((state) => state.setGame)
  const game = useGame((state) => state.game)

  const handleAction = async (action: string) => {
    action === 'generateBBDD' ? setGame(await getStoryOfBBDD()) : ''
  }

  return (
    <button
      className={`${className} flex border-2 rounded-xl items-center justify-center px-2 py-0.5`}
      onClick={() => handleAction(action)}
    >
      <Image src={icon} alt={text} width={50} height={50} />
      <p>{text}</p>
    </button>
  )
}

export default GenerateButton
