<template>
  <button class="bg-green block font-bold rounded shadow-brutal-sm w-full py-2">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>
