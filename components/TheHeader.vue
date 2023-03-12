<template>
  <header class="fixed z-10 w-full py-2">
    <div class="container mx-auto flex justify-between">
      <TheLogo />
      <BaseButton v-if="!user" is-small :is-primary="false" text="Login" @click="goToLogin()" />
    </div>
  </header>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
const router = useRouter()
function goToLogin() {
  router.push('/login')
}
</script>
