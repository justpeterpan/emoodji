<template>
  <section class="min-h-screen flex items-center justify-center">
    <div class='w-full md:max-w-xs'>
      <button class="bg-green-500 block font-bold rounded shadow-brutal-sm w-full py-2" @click="auth.signOut()">
        Logout
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const { auth } = useSupabaseClient()

definePageMeta({
  middleware: 'auth'
})

</script>