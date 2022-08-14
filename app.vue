<template>
  <div v-if="!moodsPending && !themePending" :class="themeColors">
    <h1 class="text-5xl">emoodji</h1>
    <div v-for="mood of moods" :key="mood.name">{{ mood.name }} {{ mood.icon }}</div>
  </div>
</template>

<script setup lang="ts">
const { data: moods, pending: moodsPending } = await useMoods('moods', 'emoodji', 'name, icon')
const { data: theme, pending: themePending } = await useTheme('theme', 'theme', 'default')

const themeColors = computed(() => {
  const usedTheme = theme.value?.find((item) => item.name)
  return `bg-[${usedTheme?.config?.backgroundColor}] text-${usedTheme?.config?.textColor}`
})
</script>
