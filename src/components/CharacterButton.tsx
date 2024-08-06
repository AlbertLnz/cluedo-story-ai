type Props = {
  character_name: string
  className: string
}

const CharacterButton = ({ character_name, className }: Props) => {
  return (
    <button className={`${className} px-2 py-0.5 rounded-lg`}>
      {character_name}
    </button>
  )
}

export default CharacterButton
