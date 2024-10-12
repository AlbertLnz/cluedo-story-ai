type Props = {
  characterName: string
  className: string
  onClick: () => void
}

const CharacterButton = ({ characterName, className, onClick }: Props) => {
  return (
    <button
      className={`${className} px-6 py-1 rounded-lg text-lg`}
      onClick={onClick}
    >
      {characterName}
    </button>
  )
}

export default CharacterButton
