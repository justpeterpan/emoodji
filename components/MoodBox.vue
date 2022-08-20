<template>
  <div class='bg-white border-4 border-black rounded shadow-brutal px-6 py-10 cursor-pointer text-center hover:scale-110 transition-transform'>
    <div>
      <span class='text-5xl block mb-2'>{{ icon }}</span>
    </div>
    {{ name }}
  </div>
</template>

<script setup lang='ts'>

defineProps({
  icon: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

</script>