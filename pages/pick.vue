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
    <div v-if="pending">loading</div>
    <ul v-else>
      <li v-for="mood in moods" :key="mood.id">
        <span>{{ mood.name }}</span>
        <span>{{ mood.icon }}</span>
      </li>
    </ul>
  </div>
</template>
