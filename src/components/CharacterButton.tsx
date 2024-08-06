type Props = {
  characterName: string
  className: string
  onClick: () => void
}

const CharacterButton = ({ characterName, className, onClick }: Props) => {
  return (
    <button className={`${className} px-2 py-0.5 rounded-lg`} onClick={onClick}>
      {characterName}
    </button>
  )
}

export default CharacterButton
