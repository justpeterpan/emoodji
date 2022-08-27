<template>
  <input
    class='mb-2 block bg-gray text-white rounded shadow-brutal-sm w-full p-2'
    :value='modelValue' :type='`${type}`'
    @input='updateValue' />
</template>

<script setup lang='ts'>
defineProps<{
  modelValue: string
  type: 'text' | 'email' | 'date'
}>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>