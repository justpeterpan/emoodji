<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    text: string
    isSmall?: boolean
    isPrimary?: boolean
  }>(),
  {
    isSmall: false,
    isPrimary: true
  }
)

const cssClasses = computed(() => {
  let classes = ''
  props.isSmall ? (classes += 'px-2 py-1 text-sm ') : (classes += 'px-4 py-2 ')

  props.isPrimary ? (classes += 'bg-green') : (classes += 'bg-gray text-white')
  return classes
})
</script>

<template>
  <button class="block font-bold rounded shadow-brutal-sm" :class="[cssClasses]">
    {{ text }}
  </button>
</template>
