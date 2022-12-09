<template>
  <section class="py-24 h-screen">
    <div>
      <label>team name</label>
      <input v-model="teamName" type="text" />
    </div>
    <div>
      <label>sprint duration in weeks</label>
      <input v-model="sprintDuration" type="text" />
    </div>
    <div>
      <label>initial sprint start</label>
      <input type="date" @change="getSprintStartDate($event)" />
    </div>
    <div>
      <label>upload logo</label>
      <input
        type="file"
        accept="image/*"
        class="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-dashed file:border-black file:text-sm file:font-semibold"
        @change="uploadLogo($event)"
      />
    </div>
    <BaseButton text="create Team" @click="createTeam" />
    <div v-if="newTeamName">{{ newTeamName.name }}</div>
  </section>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const teamName = ref('')
const sprintDuration = ref(0)
const initialSprintStart = ref()
const newTeamName = ref()
const logo = ref<File | null>()

const uploadLogo = ($event: Event) => {
  const target = $event.target as HTMLInputElement
  if (target && target.files) {
    logo.value = target.files[0]
  }
}

const getSprintStartDate = ($event: Event) => {
  const target = $event.target as HTMLInputElement
  if (target && target.value) {
    initialSprintStart.value = target.value
  }
}

const userStorageBucket = async () => {
  if (typeof user.value?.id === 'string') {
    const { data } = await supabase.storage.getBucket(user.value.id)
    if (typeof data?.name === 'string') {
      bucketExists.value = data.name
    }
  }
}

const bucketExists = ref('')

onMounted(async () => {
  userStorageBucket()
  await getTeam()
})

const getTeam = async () => {
  if (typeof user.value?.id === 'string') {
    const { data } = await supabase.from('team').select('name').eq('created_by', user.value.id)
    newTeamName.value = data![0]
  }
}

const createTeam = async () => {
  const logoId = ref('')
  if (typeof user.value?.id === 'string' && !bucketExists) {
    await supabase.storage.createBucket(user.value.id)
  }
  if (typeof user.value?.id === 'string' && logo.value) {
    await supabase.storage.from(user.value?.id).upload('team-logo.png', logo.value)
  }
  if (typeof user.value?.id === 'string' && bucketExists) {
    const { data } = await supabase.storage.from(user.value.id).list()
    logoId.value = data![1].id
  }
  await supabase.from('team').insert({
    name: teamName.value,
    created_by: user.value?.id,
    logo: logoId.value,
    sprint_duration: sprintDuration.value,
    start: initialSprintStart.value
  })
}
</script>
