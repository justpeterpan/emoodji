<script setup lang="ts">
  const { auth } = useSupabaseClient()
  async function logout() {
    const { error } = await auth.signOut()
    if (error) {
      console.log('Error logging out', error)
    }
    await navigateTo('/login')
  }
  await logout()
</script>

<template>
  Logging out...
</template>