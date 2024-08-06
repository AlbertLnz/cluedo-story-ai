import CharacterButton from './CharacterButton'

const ButtonsList = () => {
  return (
    <div className="pt-4 space-x-8">
      <CharacterButton
        character_name="Character 1"
        className="bg-orange-400/70"
      />
      <CharacterButton
        character_name="Character 2"
        className="bg-orange-400/70"
      />
      <CharacterButton
        character_name="Character 3"
        className="bg-orange-400/70"
      />
      <CharacterButton
        character_name="Character 4"
        className="bg-orange-400/70"
      />
    </div>
  )
}

export default ButtonsList
