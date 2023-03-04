<script setup lang="ts">
const state = useState('todaysPickedMood').value
const moodPickerItemData = { name: state?.emoodji.name, icon: state?.emoodji.icon, description: state?.description }
</script>

<template>
  <section class="py-24">
    <div class="max-w-sm mx-auto">
      <h1 class="font-extrabold text-2xl mb-8 text-center">ur mood today</h1>
      <div v-if="state?.moodId" class="w-full">
        <BaseCard :is-flippable="false">
          <template #front>
            <div class="flex flex-col items-center justify-center">
              <span class="text-5xl block mb-2">{{ moodPickerItemData.icon }}</span>
              {{ moodPickerItemData.name }}
              <div v-if="moodPickerItemData.description" class="italic">„{{ moodPickerItemData.description }}“</div>
            </div>
          </template>
        </BaseCard>
      </div>
    </div>
  </section>
</template>