<script setup lang="ts">
const { auth } = useSupabaseClient()
async function logout() {
  const { error } = await auth.signOut()
  if (error) {
    console.error('Error logging out', error)
  }
  await navigateTo('/login')
}
await logout()
</script>

<template><div>Logging out...</div></template>
