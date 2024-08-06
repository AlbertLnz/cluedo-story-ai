type Language = 'es' | 'en'

export interface Game {
  history: string
  solution: string
  characters: string
  impostor_character: string
  language: Language
}
