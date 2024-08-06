import { GameStore } from '@/types/store'
import { create } from 'zustand'

export const useGame = create<GameStore>((set) => ({
  game: null,
  setGame: (game) => {
    set(() => ({ game }))
  },
}))
