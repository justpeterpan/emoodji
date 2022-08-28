<template>
  <div>
    <TheLogo />
    <main class="bg-green-light min-h-screen px-8">
      <slot />
    </main>
    <TheNavigation v-if="!!user" />
  </div>
</template>

<script setup lang="ts">
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
