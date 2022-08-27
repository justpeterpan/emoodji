<template>
  <section class='py-24 h-screen'>
    <div v-if='pickedMoods?.length' class='max-w-sm mx-auto h-full pb-16'>
      <BaseHeadline text='Overview' headline-type='h1' class='text-center' />
      <LineChart class='h-full' :chart-data='chartData' :options='chartOptions' />
    </div>
    <BaseHeadline
      v-else
      class='text-center'
      text='No data yet, go track your mood!'
      headline-type='h1' />
  </section>
</template>

<script setup lang='ts'>
import { LineChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

definePageMeta({
  middleware: 'auth'
})

const user = useSupabaseUser()
const { data: pickedMoods } = await usePickedMoods(user.value?.id)
const { data: allMoods } = await useMoods('name, icon, value')
Chart.register(...registerables)

// Chart.register(...registerables, zoomPlugin);

interface YAxisItem {
  icon: string
  value: number
}

const xAxisLabels: string[] = []
const yAxisLabels: YAxisItem[] = []
const pickedMoodsValues: number[] = []
const pickedMoodsDescriptions: string[] = []

allMoods?.value?.forEach((mood) => {
  yAxisLabels.push({ icon: mood.icon, value: mood.value })
})

if (pickedMoods.value?.length) {
  pickedMoods.value.forEach((mood) => {
    const date = new Date(mood.created_at!)
    const dateFormatted = date.toLocaleDateString('en-GB', { month: 'numeric', day: 'numeric' })
    xAxisLabels.push(dateFormatted)
    pickedMoodsValues.push(mood.emoodji.value)
    pickedMoodsDescriptions.push(mood.description)
  })
}

const chartData = {
  labels: xAxisLabels,
  datasets: [
    {
      data: pickedMoodsValues,
      pointStyle: 'circle',
      pointRadius: 7,
      pointBorderColor: '#0C0C0F',
      pointBorderWidth: '2',
      pointBackgroundColor: '#C2FFDE',
      pointHoverRadius: 7,
      pointHoverBorderColor: '#0C0C0F',
      pointHoverBorderWidth: '2',
      pointHoverBackgroundColor: '#FF6197',
      borderColor: '#0C0C0F',
      borderWidth: '2'
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      backgroundColor: 'rgba(0,0,0,1)',
      cornerRadius: 0,
      padding: 10,
      displayColors: false,
      titleFont: { family: 'Syne', size: 13 },
      bodyFont: { family: 'Syne', size: 18 },
      callbacks: {
        label: (context) => {
          return pickedMoodsDescriptions[context.dataIndex]
        }
      }
    }
  },
  scales: {
    x: {
      grid: {
        borderDash: [4, 4]
      },
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
        borderDash: [4, 4]
      },
      ticks: {
        stepSize: 1,
        font: {
          size: 30
        },
        callback: function(value: number) {
          const temp = yAxisLabels.find((tick) => tick.value === value)
          return temp?.icon
        }
      }
    }
  }
}
</script>
