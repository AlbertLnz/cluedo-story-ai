import { Game } from './games'

export interface GameStore {
  game: Game | null
  setGame: (game: Game | null) => void
}

export interface UserInteractionsStore {
  userSelectCharacter: null | string
  setUserSelectCharacter: (characterName: string) => void
  userShowStory: boolean
  setUserShowStory: (showText: boolean) => void
}
