import { useUserInteractions } from '@/store/store'
import Image from 'next/image'

const ShowConclusionContainer = () => {
  const userSelectedCharacter = useUserInteractions(
    (state) => state.userSelectCharacter
  )
  const userShowStory = useUserInteractions((state) => state.userShowStory)
  const setUserShowStory = useUserInteractions(
    (state) => state.setUserShowStory
  )

  const handleResetApp = () => {
    location.reload()
  }

  return (
    <div
      className={`flex flex-col absolute top-0 right-0 space-y-4 transition-transform duration-300 ease-in-out ${
        userSelectedCharacter ? 'translate-x-12 z-10' : 'translate-x-0'
      } -z-10`}
    >
      <button
        className={`border border-violet-600 bg-yellow-300 rounded-lg cursor-pointer ${
          userShowStory ? 'bg-orange-400' : ''
        }`}
        onClick={() => setUserShowStory(true)}
      >
        <Image
          src='/story_icon.webp'
          alt='story'
          width={30}
          height={30}
          className='p-1'
        />
      </button>
      <button
        className={`border border-violet-600 bg-yellow-300 rounded-lg cursor-pointer ${
          userShowStory ? '' : 'bg-orange-400'
        }`}
        onClick={() => setUserShowStory(false)}
      >
        <Image
          src='/conclusion_icon.png'
          alt='conclusion'
          width={30}
          height={30}
          className='p-1'
        />
      </button>
      <button
        className='bg-white border border-violet-600 rounded-lg cursor-pointer'
        onClick={handleResetApp}
      >
        <Image
          src='/reset_icon.png'
          alt='reset'
          width={30}
          height={30}
          className='p-1'
        />
      </button>
    </div>
  )
}

export default ShowConclusionContainer
