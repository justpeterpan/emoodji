<script setup lang="ts">
  const user = useSupabaseUser()
  const supabase = useSupabaseClient()

  async function login () {
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'github' })

    if (error) {
      console.log('Error logging in', error)
    }
    navigateTo('/')
  }

  watchEffect(() => {
    if (user.value) {
      navigateTo('/')
    }
  })
</script>

<template>
  <div class="pt-10">
    <button @click="login">Login with github</button>
  </div>
</template>