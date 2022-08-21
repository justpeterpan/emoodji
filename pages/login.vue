<template>
  <section v-if='!requestedLogin' class="min-h-screen flex items-center justify-center">
    <div>
      <h1 class="text-4xl font-bold mb-16">Start tracking your mood</h1>
      <div class="mb-4">
        <label class="block" for="">Mail</label>
        <input v-model="mail" class="block bg-gray-600 text-white rounded shadow-brutal-sm w-full p-2" type="text" />
      </div>
      <div>
        <button class="bg-green-500 block font-bold rounded shadow-brutal-sm w-full py-2" @click="loginUser()">
          Login
        </button>
      </div>
    </div>
  </section>
  <section v-else class="min-h-screen flex items-center justify-center">
    <p class='text-center'>We sent you a magic link to log in to emoodji. Just check your mails.</p>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const user = useSupabaseUser()
const { auth } = useSupabaseClient()
const mail = ref('')

const requestedLogin = ref(false)

watchEffect(() => {
  if (user.value) {
    navigateTo('/')
  }
})

function loginUser(){
  auth.signIn({ email: mail.value })
  requestedLogin.value = true
}
</script>
