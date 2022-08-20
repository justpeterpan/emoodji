<template>
  <section class="py-24">
    <div class='max-w-sm mx-auto'>
      <h1 class='font-bold text-2xl mb-8 text-center'>Pick a mood</h1>
      <div class='grid grid-cols-2 gap-8'>
        <MoodPickerItem v-for="mood of moods" :key="mood.name" :name='mood.name' :icon='mood.icon' @click='pickMood(mood.name, mood.icon)' />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// TODO: Change to TS syntax
defineProps({
  moods: {
    type: Object,
    required: true
  }
})
const pickMood = () => {
  // TODO: Emit event and show MoodPickedDisplay
  console.log('mood picked')
}
</script>