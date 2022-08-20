<template>
  <section class="py-24">
    <div class='max-w-sm mx-auto'>
      <h1 class='font-bold text-2xl mb-8 text-center'>You picked:</h1>
      <div class='w-full'>
        <MoodBox :key="mood.name" class='w-full' :name='mood.name' :icon='mood.icon' />
      </div>
    </div>
  </section>
</template>

<script setup lang='ts'>
const mood = {
  name: 'Angry',
  icon: '😠'
}
</script>