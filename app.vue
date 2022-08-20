<template>
  <main v-if="!moodsPending && !themePending" class="bg-pink-500 min-h-screen flex flex-col justify-center" :class="themeColors">
    <div class='max-w-sm mx-auto'>
      <div class='grid grid-cols-2 gap-8'>
        <MoodBox v-for="mood of moods" :key="mood.name" :name='mood.name' :icon='mood.icon'></MoodBox>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const { data: moods, pending: moodsPending } = await useMoods('moods', 'emoodji', 'name, icon')
const { data: theme, pending: themePending } = await useTheme('theme', 'theme', 'default')

const themeColors = computed(() => {
  const usedTheme = theme.value?.find((item) => item.name)
  return `bg-[${usedTheme?.config?.backgroundColor}] text-${usedTheme?.config?.textColor}`
})
</script>
