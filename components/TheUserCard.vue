<script setup lang="ts">
const user = useSupabaseUser()
const name = computed(() => user.value?.user_metadata.user_name)
const avatar = computed(() => user.value?.user_metadata.avatar_url)
</script>

<template>
  <div v-if="user">
    <img :src="avatar" :alt="name" />
    <p>{{ name }}</p>
  </div>
</template>
