<template>
 <div>
   <div v-if='!hasChosenMood && !moodsPending'>
     <MoodPicker :moods='moods' />
   </div>
   <div v-if='hasChosenMood'>
     <MoodPickedDisplay />
   </div>
 </div>
</template>

<script setup lang="ts">
const { data: moods, pending: moodsPending } = await useMoods('moods', 'emoodji', 'name, icon')
const hasChosenMood = false
</script>