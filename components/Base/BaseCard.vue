<script setup lang="ts">
  const emit = defineEmits(['flip-card'])
  const props = withDefaults(defineProps<{
    cardName: string | undefined
    flippedCardName: string | undefined
    isFlippable?: boolean
  }>(), {
    flippedCardName: '',
    isFlippable: true
  })
  const isFlipped = computed(() => {
    if (props.isFlippable && props.cardName === props.flippedCardName) return true
    return false
  }) 
</script>

<template>
  <div class="mood-picker-item" :class="{ flipped: isFlipped }">
    <div
      :class="{
        'cursor-pointer': isFlippable
      }"
      class="mood-picker-item-inner border-4 border-black rounded shadow-brutal text-center transition-transform"
    >
      <div @click="emit('flip-card', props.cardName)" class="mood-picker-item-front flex flex-col items-center justify-center">
        <slot name="front" />
      </div>
      <div @click="emit('flip-card', props.cardName)" class="mood-picker-item-back p-4 flex flex-col justify-center">
        <slot name="back" />
      </div>
    </div>
  </div>
</template>

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