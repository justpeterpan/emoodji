<script setup lang="ts">
const client = useSupabaseClient()
const user = useSupabaseUser()
const description = ref('')
const props = defineProps<{
  moods: any
  description?: string
}>()
const flippedCardName = ref('')
const setMood = async (mood: Record<string, string>) => {
  await client.from('pickedMood').insert({ moodId: mood.id, userId: user.value?.id, description: description.value })

  useState('clientMood', () => {
    return {
      created_at: new Date().toISOString(),
      description: description.value,
      moodId: mood.id,
      emoodji: mood
    }
  })
}

function flipCard(mood: any, boxName: string) {
  if (mood.name === boxName) flippedCardName.value = boxName
  description.value = ''
}
</script>

<template>
  <section class="py-24">
    <div class="max-w-sm mx-auto">
      <BaseHeadline headline-type="h1" class="text-center" text="How ya doin?" />
      <div class="grid grid-cols-2 gap-8">
        <BaseCard
          v-for="mood in props.moods"
          :key="mood.name"
          :card-name="mood.name"
          :flipped-card-name="flippedCardName"
          is-flippable
          @flip-card="flipCard(mood, $event)"
        >
          <template #front>
            <div class="flex flex-col items-center justify-center">
              <span class="text-5xl block mb-2">{{ mood.icon }}</span>
              {{ mood.name }}
              <div v-if="props.description" class="italic">„{{ props.description }}“</div>
            </div>
          </template>
          <template #back>
            <p class="font-bold mb-2">tell me y</p>
            <BaseInput v-model="description" type="text" :disabled="flippedCardName !== mood.name" />
            <BaseButton text="Pick mood" @click="setMood(mood)" />
          </template>
        </BaseCard>
      </div>
    </div>
  </section>
</template>
