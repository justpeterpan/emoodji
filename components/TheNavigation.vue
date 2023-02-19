<script setup lang="ts">
const nav = [
  {
    imgSrc: '/images/icon-select.png',
    path: '/',
    position: 'bottom-20',
    name: 'Home'
  },
  {
    imgSrc: '/images/icon-graph.png',
    path: '/over',
    position: 'bottom-14 left-14',
    name: 'Over'
  },
  {
    imgSrc: '/images/icon-logout.png',
    path: '/logout',
    position: 'left-20',
    name: 'log out'
  }
]
</script>

<template>
          <div>
            <NuxtLink
              v-for="navItem in nav"
              :key="navItem.path"
              :class="navItem.position"
              class="w-12 h-12 block rounded-full bg-green absolute"
              :to="navItem.path"
            >
            {{ navItem.name }}
            </NuxtLink>
          </div>
</template>
