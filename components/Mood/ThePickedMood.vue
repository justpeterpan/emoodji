<script setup lang="ts">
  const state = useState('currentMood').value?.moodId ? useState('currentMood').value : useState('clientMood').value
</script>

<template>
  <section class="py-24">
    <div class="max-w-sm mx-auto">
      <h1 class="font-extrabold text-2xl mb-8 text-center">ur mood today</h1>
      <div v-if="state?.moodId" class="w-full">
        <BaseCard :is-flippable="false">
          <template #front>
            <div class="flex flex-col items-center justify-center">
              <span class="text-5xl block mb-2">{{ state.emoodji.icon }}</span>
              {{ state.emoodji.name }}
              <div v-if="state.description" class="italic">„{{ state.description }}“</div>
            </div>
          </template>
        </BaseCard>
      </div>
    </div>
  </section>
</template>