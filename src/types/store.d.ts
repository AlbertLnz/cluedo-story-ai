import { Game } from './games'

export interface GameStore {
  game: Game | null
  setGame: (game: Game | null) => void
}
