<script setup lang="ts">
const user = useSupabaseUser()
</script>

<template>
  <div>
    <TheHeader />
    <main class="bg-green-light min-h-screen">
      <slot />
    </main>
    <TheFooter />
    <TheNavigation v-if="!!user" />
  </div>
</template>

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
