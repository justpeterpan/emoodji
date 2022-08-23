<template>
  <section class="min-h-screen flex items-center justify-center">
    <div class="w-full md:max-w-xs">Cya</div>
  </section>
</template>

<script setup lang="ts">
const { auth } = useSupabaseClient()
onMounted(() => {
  auth.signOut().finally(() => navigateTo('/login'))
})
</script>
