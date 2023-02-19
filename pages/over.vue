<script setup lang="ts">
  definePageMeta({
    middleware: 'auth'
  })

  const user = useSupabaseUser()
  const client = useSupabaseClient()
  const { data: pickedMoods, pending } = await useAsyncData('pickedMoods',
    async() => {
      const { data } =  await client
        .from('pickedMood')
        .select(`id, moodId, created_at, changed, description, emoodji(*)`)
        .eq('userId', user.value?.id)
        .order('created_at')

      return  data
    }
  )
</script>

<template>
  <div>
    <div v-if="pending">
      loading
    </div>
    <ul v-else>
      <li v-for="mood in pickedMoods" :key="mood.id">
        <span>{{ mood.id }}</span>
        <span>{{ mood.emoodji.icon }}</span>
        <span>{{ mood.description }}</span>
        <span>{{ mood.created_at }}</span>
      </li>
    </ul>
  </div>
</template>