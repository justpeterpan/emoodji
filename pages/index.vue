<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const client = useSupabaseClient()
const user = useSupabaseUser()

const { data: moods, pending: pendingMoods } = await useAsyncData('moods', async () => {
  const { data } = await client.from('emoodji').select('name, icon, id')
  return data
})
const { data: latestMood, pending: pendingLatestMood } = await useAsyncData('latestMood', async () => {
  const { data } = await client
        .from('pickedMood')
        .select(`created_at, description, moodId, emoodji(*)`)
        .eq('userId', user.value?.id)
        .order('created_at', { ascending: false })
        .limit(1)
  return data?.[0] 
})

const today = new Date().toISOString().slice(0, 10)
const todaysMood = useState('currentMood', () => {
  if (today === latestMood.value?.created_at?.slice(0, 10)) {
    return latestMood.value
  }
  return null
})
const clientMood = useState('clientMood')
const showMoodPicker = computed(() => {
  return !todaysMood.value?.moodId && !clientMood.value?.moodId
})
const showPickedMood = computed(() => {
  return todaysMood.value?.moodId || clientMood.value?.moodId
})
</script>

<template>
  <div>
    <MoodPicker :moods="moods" v-if="showMoodPicker" />
    <MoodPicked v-if="showPickedMood" />
  </div>
</template>