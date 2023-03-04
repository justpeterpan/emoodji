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
  return data
})
const today = new Date().toISOString().slice(0, 10)
const todaysMood = latestMood.value?.find(mood => mood.created_at)
const hasMoodPicked = useState('hasMoodPicked', () => {
  if (today === todaysMood?.created_at?.slice(0, 10)) {
    useState('todaysPickedMood', () => todaysMood)
    return true
  }
  return false
})

console.log(useState('todaysPickedMood').value)
</script>

<template>
  <div>
    <MoodTheMoodPicker :moods="moods" v-if="!pendingMoods && !pendingLatestMood && !hasMoodPicked"/>
    <MoodThePickedMood v-if="!pendingMoods && !pendingLatestMood && hasMoodPicked" />
  </div>
</template>