<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const client = useSupabaseClient()
const { data: moods, pending } = await useAsyncData('moods', async () => {
  const { data } = await client.from('emoodji').select('name, icon, id')
  return data
})
</script>

<template>
  <div>
    <MoodPicker :moods="moods" />
  </div>
</template>