<template>
  <section class="py-24 h-screen">
    <div class='max-w-sm mx-auto h-full pb-16'>
      <h1 class='font-bold text-2xl mb-8 text-center'>Overview</h1>
      <LineChart class="h-full" :chart-data="chartData" :options="chartOptions" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js"

definePageMeta({
  middleware: 'auth'
})

const user = useSupabaseUser()
const { data: pickedMoods } = await usePickedMoods(user.value?.id)
const { data: allMoods } = await useMoods()
Chart.register(...registerables);

const xAxisLabels = []
const yAxisLabels = []
const pickedMoodsValues = []

allMoods.value.forEach( mood => {
  yAxisLabels.push({icon: mood.icon, value: mood.value})
})

const dateLocale = 'en-GB'
const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' }
pickedMoods.value.forEach( mood => {
  const date = new Date(mood.emoodji.created_at)
  const dateFormatted = date.toLocaleDateString(dateLocale, dateOptions)
  xAxisLabels.push(dateFormatted)
  pickedMoodsValues.push(mood.emoodji.value)
})

const chartData = {
  labels: xAxisLabels,
  datasets: [
    {
      data: pickedMoodsValues,
      pointStyle: 'circle',
      pointRadius: 7,
      pointBorderColor: '#0C0C0F',
      pointBorderWidth: '2',
      pointBackgroundColor: '#DCFCE7',
      borderColor: '#0C0C0F',
      borderWidth: '2',
    },
  ],

};

const chartOptions =  {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      ticks: {
        font: {
          family: 'Syne',
          weight: '700'
        },
        autoSkip: false,
        maxRotation: 45,
        minRotation: 45
      }
    },
    y: {
      grid: {
        color: 'rgba(0,0,0,.125)',
      },
      ticks: {
        stepSize: 1,
        font: {
          size: 30
        },
        callback: function(value){
          const temp = yAxisLabels.find( tick => tick.value === value)
          return temp?.icon
        }
      }
    }
  }
}

</script>
