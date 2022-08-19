<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <TheNavigation />
  </div>
</template>


<script>
import TheNavigation from './components/AppLayout/TheNavigation'
export default {
  components: { TheNavigation }
}
</script>
