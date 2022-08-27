<template>
  <div class='mood-picker-item' :class="{ flipped: isFlipped, 'square': props.isSquare }">
    <div
      :class="{
        'cursor-pointer': props.isFlippable
      }"
      class='mood-picker-item-inner border-4 border-black rounded shadow-brutal text-center transition-transform'
    >
      <div class='mood-picker-item-front flex flex-col items-center justify-center' @click='flipBox()'>
        <span class='text-5xl block mb-2'>{{ props.icon }}</span>
        {{ props.name }}
        <div v-if='props.description' class='italic'>„{{ props.description }}“</div>
      </div>
      <div class='mood-picker-item-back p-4 flex flex-col justify-center' @click.self='flipBox()'>
        <p class='font-bold mb-2'>tell me y</p>
        <BaseInput
          v-model='description'
          type='text'
          :disabled='!isFlipped' />
        <BaseButton text='Pick mood' :disabled='!isFlipped' @click="emit('pick-mood', description)" />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
interface Props {
  icon: string
  name: string
  description?: string
  isFlippable?: boolean
  isSquare?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  description: '',
  isFlippable: true,
  isSquare: false
})

const isFlipped = ref(false)
const flipBox = () => {
  if (props.isFlippable) isFlipped.value = !isFlipped.value
}

const emit = defineEmits(['pick-mood'])
const description = ref('')
</script>

<style>
.mood-picker-item {
  perspective: 800px;
  height: 200px;
}

.mood-picker-item.flipped .mood-picker-item-inner {
  transform: rotateY(180deg);
}

.mood-picker-item-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.2s;
  transform-style: preserve-3d;
}

.mood-picker-item-front,
.mood-picker-item-back {
  background: #fff;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.mood-picker-item-back {
  transform: rotateY(180deg);
}

.square {
  position: relative;
  height: unset;
}

.square:after {
  content: '';
  display: block;
  padding-bottom: 100%;
}

.square .mood-picker-item-inner {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
