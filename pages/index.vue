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
</script>

<template>
  <div>
    <pre>
      {{ useState('currentMood') }}
      {{ useState('clientMood') }}
    </pre>
    <MoodTheMoodPicker :moods="moods" v-if="!pendingMoods && !pendingLatestMood && !todaysMood?.moodId && !clientMood?.moodId" />
    <MoodThePickedMood v-if="!pendingMoods && !pendingLatestMood && (todaysMood?.moodId || clientMood?.moodId)" />
  </div>
</template>