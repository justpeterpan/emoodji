<script setup lang="ts">
  const client = useSupabaseClient()
  const user = useSupabaseUser()

  defineProps<{
    moods: any
  }>()

  const flippedCardName = ref('')

  const setMood = async (moodId: string) => {
    // await client
    //   .from('pickedMood')
    //   .insert({ moodId, userId: user.value?.id })
    console.log(moodId)
  }

  function flipCard (mood: any, boxName: string) {
    if( mood.name === boxName ) flippedCardName.value = boxName 
  }
</script>

<template>
    <section class="py-24">
      <div class="max-w-sm mx-auto">
        <BaseHeadline headline-type="h1" class="text-center" text="How ya doin?" />
        <div class="grid grid-cols-2 gap-8">
          <BaseCard :card-name="mood.name" :flipped-card-name="flippedCardName" v-for="mood in moods" :key="mood.name" is-flippable @flip-card="flipCard(mood, $event)">
            <template #front>
              <div class="flex flex-col items-center justify-center">
                <span class="text-5xl block mb-2">{{ mood.icon }}</span>
                {{  mood.name }}
              </div>
            </template>
            <template #back>
              <p class="font-bold mb-2">tell me y</p>
              <BaseButton text="Pick mood" @click="setMood(mood.id)"/>
            </template>
          </BaseCard> 
        </div>
      </div>
    </section>
</template>