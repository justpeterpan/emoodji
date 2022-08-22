<template>
  <div ref="moodPicker" class="mood-picker-item">
    <div
      :class="{
        'cursor-pointer': props.isFlippable
      }"
      class="mood-picker-item-inner border-4 border-black rounded shadow-brutal text-center transition-transform"
    >
      <div class="mood-picker-item-front flex flex-col items-center justify-center" @click="flipBox()">
        <span class="text-5xl block mb-2">{{ props.icon }}</span>
        {{ props.name }}
      </div>
      <div class="mood-picker-item-back p-4 flex flex-col justify-between">
        <div>
          <p class="font-bold mb-2">Add a comment</p>
          <input v-model="description" class="mb-2 block bg-gray-600 text-white rounded shadow-brutal-sm w-full p-2" type="text" />
          <button class="bg-green-500 block font-bold rounded shadow-brutal-sm w-full py-2" @click="emit('pick-mood', description)">
            Pick mood
          </button>
        </div>
        <div>
          <button @click="flipBox()">Back</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    required: false,
    default: ''
  },
  name: {
    type: String,
    required: false,
    default: ''
  },
  isFlippable: {
    type: Boolean,
    required: false,
    default: true
  }
})

const moodPicker = ref(null)

const flipBox = () => {
  if (props.isFlippable) moodPicker.value.classList.toggle('flipped')
}

const emit = defineEmits(['pick-mood'])
const description = ref('')
</script>

<style>
.mood-picker-item {
  perspective: 800px;
  height: 300px;
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
</style>
