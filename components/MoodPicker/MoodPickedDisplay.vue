<template>
  <section class="py-24">
    <div class="max-w-sm mx-auto">
      <h1 class="font-bold text-2xl mb-8 text-center">You picked:</h1>
      <div v-if="mood?.created_at" class="w-full">
        <MoodPickerItem class="w-full" :name="mood.emoodji.name" :icon="mood.emoodji.icon" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PickedMood } from '~/types'
defineProps<{ mood: PickedMood | undefined }>()
</script>
