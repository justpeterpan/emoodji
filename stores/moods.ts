import { defineStore } from 'pinia'
import { PickedMood } from '~/types'

export const useMood = defineStore('mood', {
  state: () => ({
    hasPickedMood: false,
    pickedMood: {} as PickedMood | null
  }),
  actions: {
    setMood(picked: boolean, mood: PickedMood | null) {
      this.pickedMood = mood
      this.hasPickedMood = picked
    }
  }
})
