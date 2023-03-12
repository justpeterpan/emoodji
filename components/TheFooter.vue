<template>
  <footer class="bg-black text-white py-4">
    <div class="container mx-auto">
      <p>
        <span>emoodji</span> <span>{{ year }}</span>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
