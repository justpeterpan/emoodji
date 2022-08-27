<template>
  <component
    :is='headlineType' class='font-extrabold mb-8' :class="{
    'text-5xl': headlineType === 'h1' && isHuge,
    'text-3xl': headlineType === 'h2'
  }">{{ text }}
  </component>
</template>

<script setup lang='ts'>
withDefaults(defineProps<{
  text: string,
  headlineType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  isHuge?: boolean
}>(), {
  isHuge: false
})
</script>