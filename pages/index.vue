<template>
  <div>
    <div v-if="!moodState.hasPickedMood && !moodsPending">
      <MoodPicker :moods="moods" />
    </div>
    <div v-if="moodState.hasPickedMood && !todaysMoodPending">
      <MoodPickedDisplay :mood="todaysMood" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMood } from '~/stores/moods'
definePageMeta({
  middleware: 'auth'
})
const user = useSupabaseUser()
const { data: moods, pending: moodsPending } = await useMoods('name, icon, id')
const { data: lastChosenMood, pending: todaysMoodPending } = await useLatestChosenMood(user.value?.id)
const todaysMood = lastChosenMood.value?.find((mood) => mood.created_at)
const today = new Date().toISOString().slice(0, 10)
const moodState = useMood()
onMounted(() => {
  if (today === todaysMood?.created_at?.slice(0, 10)) {
    moodState.setHasPickedMood(true)
  } else {
    moodState.setHasPickedMood(false)
  }
})
</script>
