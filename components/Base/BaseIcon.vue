<template>
  <img :src="getIcon(icon)" width="50" alt="" />
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    required: true
  }
})

const IconSelect = 'images/icon-select.png'
const IconGraph = 'images/icon-graph.png'
const IconTeams = 'images/icon-teams.png'

function getIcon(icon: String) {
  switch (icon) {
    case 'select':
      return IconSelect
    case 'graph':
      return IconGraph
    case 'teams':
      return IconTeams
  }
}
</script>
