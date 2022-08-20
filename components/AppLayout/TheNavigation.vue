<template>
  <div class='fixed left-8 bottom-4'>
    <div class='relative'>
      <div class='nav-toggle flex justify-center items-center w-12 h-12 bg-black block rounded-full'>
        <button ref='navToggle' class="hamburger hamburger--squeeze" type="button" @click='toggleNav'>
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <nav class='absolute -z-10 h-full bottom-0 left-0 w-12 h-12'>
        <div ref='navItems' class='nav-items relative h-full'>
          <div class='w-12 h-12 block rounded-full bg-green-500 absolute bottom-20'>
            <div class='h-full flex justify-center items-center flex-col'>
              <NuxtLink to='/'>
                <div class='w-6 h-6'>
                  <img src='~/assets/images/icon-select.png' alt=''>
                </div>
              </NuxtLink>
            </div>
          </div>
          <div class='w-12 h-12 block rounded-full bg-green-500 absolute bottom-14 left-14'>
            <div class='h-full flex justify-center items-center flex-col'>
              <NuxtLink to='/overview'>
                <div class='w-6 h-6'>
                  <img src='~/assets/images/icon-graph.png' alt=''>
                </div>
              </NuxtLink>
            </div>
          </div>
          <div class='w-12 h-12 block rounded-full bg-green-500 absolute left-20'>
            <div class='h-full flex justify-center items-center flex-col'>
              <NuxtLink to='/settings'>
                <div class='w-6 h-6'>
                  <img src='~/assets/images/icon-settings.png' alt=''>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang='ts'>
const navToggle = ref(null)
const navItems = ref(null)
function toggleNav(){
  navToggle.value.classList.toggle('is-active')
  navItems.value.classList.toggle('is-active')
}
</script>

<style>
.hamburger{
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
  transform: translate(0)scale(1)
}
</style>