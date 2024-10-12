import { GameStore, UserInteractionsStore } from '@/types/store'
import { create } from 'zustand'

export const useGame = create<GameStore>((set) => ({
  game: null,
  setGame: (game) => {
    set(() => ({ game }))
  },
}))

export const useUserInteractions = create<UserInteractionsStore>((set) => ({
  userSelectCharacter: null,
  setUserSelectCharacter: (characterName) => {
    set(() => ({ userSelectCharacter: characterName }))
  },
  userShowStory: true, // 'true -> game.story' ; 'false -> game.conclusion' on StoryArea component
  setUserShowStory: (showText) => {
    set(() => ({ userShowStory: showText }))
  },
}))
