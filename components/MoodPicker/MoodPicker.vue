<template>
  <section class="py-24">
    <div class="max-w-sm mx-auto">
      <BaseHeadline headline-type="h1" class="text-center" text="How ya doin?" />
      <div class="grid grid-cols-2 gap-8">
        <MoodPickerItem v-for="mood of moods" :key="mood.name" v-bind="mood" @pickMood="pickMood(mood, $event)" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Mood, PickedMood } from '~/types'
import { useMood } from '~/stores/moods'

const client = useSupabaseClient()
const user = useSupabaseUser()

defineProps<{ moods: Mood[] | null }>()
const pickMood = async (mood: Mood, description: any) => {
  await client.from<PickedMood>('pickedMood').insert({
    moodId: mood.id,
    userId: user.value?.id,
    description
  })
  useMood().setMood(true, { moodId: mood.id, userId: user.value?.id!, changed: 0, description, emoodji: mood })
}
</script>
