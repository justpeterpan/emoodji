<template>
  <NuxtLink :to="logoPath"><p class="font-bold">emoodji</p></NuxtLink>
</template>

<script setup lang="ts">
const user = useSupabaseUser()

const logoPath = computed(() => {
  return user.value ? '/' : '/splash'
})
</script>
