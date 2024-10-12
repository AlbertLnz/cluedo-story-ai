import { useGame, useUserInteractions } from '@/store/store'
import splitCharacters from '@/utils/splitCharacters'
import { useEffect, useState } from 'react'
import CharacterButton from './CharacterButton'

const ButtonsList = () => {
  const game = useGame((state) => state.game)
  const setUserSelectCharacter = useUserInteractions(
    (state) => state.setUserSelectCharacter
  )
  const [charactersArray, setCharactersArray] = useState<string[]>([])
  const [characterSelected, setCharacterSelected] = useState<
    undefined | string
  >()
  const setUserShowStory = useUserInteractions(
    (state) => state.setUserShowStory
  )

  const handleCharacterSelect = (character: string) => {
    setCharacterSelected(character)
    setUserSelectCharacter(character)
    setUserShowStory(false) // para ver la 'solution'
  }

  const getButtonColor = (character: string) => {
    if (characterSelected === undefined) {
      return 'bg-[#553AB8]'
    }

    return character === game?.impostor_character
      ? 'bg-[#25A954]'
      : 'bg-[#E31D65]'
  }

  useEffect(() => {
    if (game?.characters) {
      setCharactersArray(splitCharacters(game.characters))
    }
  }, [game])

  return (
    <div>
      {game && (
        <div className='pt-4 space-x-8'>
          {charactersArray.slice(0, 4).map((character, index) => (
            <CharacterButton
              key={index}
              characterName={character}
              className={getButtonColor(character)}
              onClick={() => handleCharacterSelect(character)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ButtonsList
