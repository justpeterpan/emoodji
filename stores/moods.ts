import { defineStore } from 'pinia'

export const useMood = defineStore('mood', {
  state: () => ({
    hasPickedMood: false
  }),
  actions: {
    setHasPickedMood(picked: boolean) {
      this.hasPickedMood = picked
    }
  }
})
