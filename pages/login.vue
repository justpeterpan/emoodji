<script setup lang="ts">
const user = useSupabaseUser()
const { auth } = useSupabaseClient()
const mail = ref('')
const requestedLogin = ref(false)

function loginViaMail() {
  auth.signInWithOtp({ email: mail.value })
  requestedLogin.value = true
}

async function loginViaGithub() {
  const { error } = await auth.signInWithOAuth({ provider: 'github' })

  if (error) {
    console.error('Error logging in', error)
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
  <div>
    <section v-if="!requestedLogin" class="min-h-screen flex items-center justify-center">
      <div class="container max-w-6xl">
        <div class="md:grid md:grid-cols-2 md:gap-24">
          <div class="mb-16 md:mb-0">
            <BaseHeadline headline-type="h1" is-huge text="Start tracking your mood" />
            <p class="text-xl">emoodji helps you to spot when and why mood swings in your team occur.</p>
          </div>
          <div class="md:flex md:flex-col md:justify-center">
            <div class="mb-4">
              <label class="block" for="">Mail</label>
              <BaseInput v-model="mail" type="email" />
            </div>
            <div>
              <BaseButton text="Login" @click="loginViaMail()" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-else class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <BaseHeadline headline-type="h2" text="It's magic!" />
        <p class="text-center">We sent you a magic link to log in to emoodji. Just check your mails.</p>
      </div>
    </section>
    <div class="pt-10">
      <button @click="loginViaGithub">Login with github</button>
    </div>
  </div>
</template>
