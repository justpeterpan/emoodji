<template>
  <div>
    <div v-if="!moodState.$state.hasPickedMood && !moodsPending">
      <MoodPicker :moods="moods" />
    </div>
    <div v-if="moodState.$state.hasPickedMood">
      <MoodPickedDisplay />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMood } from '~/stores/moods'

definePageMeta({
  middleware: 'auth'
})
const { data: moods, pending: moodsPending } = await useMoods('name, icon, id')
const user = useSupabaseUser()
await useLatestChosenMood(user.value?.id)
const moodState = useMood()
</script>
