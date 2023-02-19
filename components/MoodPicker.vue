<script setup lang="ts">
  const client = useSupabaseClient()
  const user = useSupabaseUser()

  defineProps<{
    moods: Record<string, any>[] | null
  }>()

  const setMood = async (moodId: string) => {
    await client
      .from('pickedMood')
      .insert({ moodId, userId: user.value?.id })
  }
</script>

<template>
  <div>
    <div v-for="mood in moods" :key="mood.name" @click="setMood(mood.id)">
      {{ mood.name }}
      {{ mood.icon }}
    </div>
  </div>
</template>