<template>
  <div>
    <AppLayoutTheLogo />
    <main class="bg-green-100 min-h-screen px-8">
      <slot />
    </main>
    <TheNavigation v-if='!!user' />
  </div>
</template>

<script setup lang='ts'>
import TheNavigation from '../components/AppLayout/TheNavigation'

const user = useSupabaseUser()
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
