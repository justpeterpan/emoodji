<template>
  <section v-if="!moodsPending && !themePending" class="min-h-screen flex flex-col justify-center">
    <div class='max-w-sm mx-auto'>
      <h1 class='font-bold text-2xl mb-8 text-center'>Pick a mood</h1>
      <div class='grid grid-cols-2 gap-8'>
        <MoodBox v-for="mood of moods" :key="mood.name" :name='mood.name' :icon='mood.icon' />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: moods, pending: moodsPending } = await useMoods('moods', 'emoodji', 'name, icon')
</script>