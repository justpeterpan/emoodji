<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string
    headlineType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    isHuge?: boolean
  }>(),
  {
    isHuge: false
  }
)
</script>

<template>
  <component
    :is="headlineType"
    class="mb-8"
    :class="{
      'text-6xl font-extrabold ': headlineType === 'h1' && isHuge,
      'text-5xl font-extrabold ': headlineType === 'h1',
      'text-4xl font-extrabold': headlineType === 'h2',
      'text-2xl font-bold': headlineType === 'h3'
    }"
    >{{ text }}
  </component>
</template>
