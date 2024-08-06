function splitCharacters(characters: string) {
  if (characters.includes(' y ')) {
    characters = characters.replace(' y ', ', ')
  }

  const namesArray = characters.split(',').map((name) => name.trim())
  return namesArray
}

export default splitCharacters
