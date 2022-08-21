<template>
  <div>
    <div v-if="!moodState.$state.hasPickedMood && !moodsPending">
      <MoodPicker :moods="moods" />
    </div>
    <div v-if="moodState.$state.hasPickedMood && !todaysMoodPending">
      <MoodPickedDisplay :mood="moodState.$state.pickedMood" />
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
const today = new Date().toISOString().slice(0, 10)
const moodState = useMood()
const todaysMood = lastChosenMood.value?.find((mood) => mood?.created_at)

onMounted(() => {
  if (today === todaysMood?.created_at?.slice(0, 10)) {
    moodState.setMood(true, todaysMood)
  } else {
    moodState.setMood(false, null)
  }
})
</script>
