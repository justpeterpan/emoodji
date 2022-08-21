export type Mood = {
  name: string
  icon: string
  id: number
  value: number
}

export type PickedMood = {
  moodId: number
  userId?: string
  changed: number
  emoodji: Mood
  description?: string
  created_at?: string
} | null
