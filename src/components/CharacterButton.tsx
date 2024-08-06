import { useState } from 'react'

type Props = {
  characterName: string
  className: string
  characterSelected: (characterName: string) => void
}

const CharacterButton = ({
  characterName,
  className,
  characterSelected,
}: Props) => {
  const [resultColor, setResultColor] = useState<undefined | string>()

  return (
    <button
      className={`${className} bg-[${resultColor}] px-2 py-0.5 rounded-lg`}
      onClick={() => characterSelected(characterName)}
    >
      {characterName}
    </button>
  )
}

export default CharacterButton
