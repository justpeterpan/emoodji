<template>
  <section class="py-24">
    <div class="max-w-sm mx-auto">
      <h1 class="font-extrabold text-2xl mb-8 text-center">ur mood today</h1>
      <div v-if="state?.moodId" class="w-full">
        <MoodPickerItem :is-flippable="false" is-square class="w-full" v-bind="moodPickerItemData" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useMood } from '~/stores/moods'
const state = useMood().pickedMood
const moodPickerItemData = { name: state?.emoodji.name, icon: state?.emoodji.icon, description: state?.description }
</script>
