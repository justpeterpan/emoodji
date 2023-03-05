<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const client = useSupabaseClient()
const user = useSupabaseUser()

const { data: isTeamMember } = await useAsyncData('teamMember', async () => {
  const { data } = await client.from('teamMember').select('memberId').eq('memberId', user.value?.id)
  return !!data?.[0]?.memberId
})

async function addUserToTeam() {
  if (!isTeamMember.value) {
    const { data, error } = await client.from('teamMember').insert([{ memberId: user.value?.id, teamId: process.env.TEAM_ID }])
    if (error) {
      console.error('Error adding user to team', error)
    }
    if (data) {
      console.info('User added to team', data)
    }
  }
  useState('teamId', () => useRuntimeConfig().teamId)
  console.info('User is already a team member')
}

const { data: moods } = await useAsyncData('moods', async () => {
  const { data } = await client.from('emoodji').select('name, icon, id')
  return data
})
const { data: latestMood } = await useAsyncData('latestMood', async () => {
  const { data } = await client
    .from('pickedMood')
    .select(`created_at, description, moodId, emoodji(*)`)
    .eq('userId', user.value?.id)
    .order('created_at', { ascending: false })
    .limit(1)
  return data?.[0]
})

onMounted(async () => {
  await addUserToTeam()
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
    <MoodPicker v-if="showMoodPicker" :moods="moods" />
    <MoodPicked v-if="showPickedMood" />
  </div>
</template>
