<template>
  <div class="fixed left-8 bottom-4">
    <div class="relative">
      <div class="nav-toggle flex justify-center items-center w-12 h-12 bg-black block rounded-full">
        <button ref="navToggle" class="hamburger hamburger--squeeze" type="button" @click="toggleNav">
          <span class="hamburger-box">
            <span class="hamburger-inner" />
          </span>
        </button>
      </div>
      <nav class="absolute -z-10 h-full bottom-0 left-0 w-12 h-12">
        <div ref="navItems" class="nav-items relative h-full">
          <div
            v-for="navItem in nav"
            :key="navItem.path"
            :class="navItem.position"
            class="w-12 h-12 block rounded-full bg-green-500 absolute"
          >
            <div class="h-full flex justify-center items-center flex-col">
              <NuxtLink :to="navItem.path">
                <div class="w-6 h-6">
                  <img :src="navItem.imgSrc" alt="" />
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
const navToggle = ref<null | { classList: { toggle: (arg0: string) => null } }>(null)
const navItems = ref<null | { classList: { toggle: (arg0: string) => null } }>(null)
const toggleNav = () => {
  navToggle.value?.classList.toggle('is-active')
  navItems.value?.classList.toggle('is-active')
}

onClickOutside(navToggle, () => {
  navToggle.value.classList.remove('is-active')
  navItems.value?.classList.remove('is-active')
})

interface NavItem {
  imgSrc: string
  path: string
  position: string
}

const nav: NavItem[] = [
  {
    imgSrc: '/images/icon-select.png',
    path: '/',
    position: 'bottom-20'
  },
  {
    imgSrc: '/images/icon-graph.png',
    path: '/overview',
    position: 'bottom-14 left-14'
  },
  {
    imgSrc: '/images/icon-settings.png',
    path: '/logout',
    position: 'left-20'
  }
]
</script>

<style>
.hamburger {
  padding: 0 !important;
}
.nav-items > div {
  transition: all 250ms ease;
}
.nav-items > div:nth-of-type(1) {
  transform: translateY(166%) scale(0);
}
.nav-items > div:nth-of-type(2) {
  transform: translate(-117%, 120%) scale(0);
}
.nav-items > div:nth-of-type(3) {
  transform: translateX(-166%) scale(0);
}
.nav-items.is-active > div {
  transform: translate(0) scale(1);
}
</style>
