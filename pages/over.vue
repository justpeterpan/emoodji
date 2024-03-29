<script setup lang="ts">
import { Line } from 'vue-chartjs'
import { Chart, registerables } from 'chart.js'

definePageMeta({
  middleware: 'auth'
})

Chart.register(...registerables)
const user = useSupabaseUser()
const client = useSupabaseClient()
const { data: pickedMoods } = await useAsyncData('pickedMoods', async () => {
  const { data } = await client
    .from('pickedMood')
    .select(`id, moodId, created_at, changed, description, emoodji(*)`)
    .eq('userId', user.value?.id)
    .order('created_at')

  return data
})

const { data: allMoods } = await useAsyncData('moods', async () => {
  const { data } = await client.from('emoodji').select('name, icon, id, value')
  return data
})
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
    pickedMoodsDescriptions.push(mood?.description || '')
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

const getOrCreateTooltip = (chart: any) => {
  let tooltipEl = chart.canvas.parentNode.querySelector('div')
  if (!tooltipEl) {
    tooltipEl = document.createElement('DIV')
    const tooltipTitle = document.createElement('P')
    tooltipTitle.innerText = 'Title'
    tooltipEl.append(tooltipTitle)
    tooltipEl.classList.add('tooltip')
    chart.canvas.parentNode.appendChild(tooltipEl)
  }
  return tooltipEl
}
const externalTooltipHandler = (context: any) => {
  const { chart, tooltip } = context
  const tooltipEl = getOrCreateTooltip(chart)
  tooltipEl.style.left = tooltip.x + 50 + 'px'
  tooltipEl.style.top = tooltip.y + 50 + 'px'
  tooltip.opacity === 0 ? (tooltipEl.style.opacity = 0) : (tooltipEl.style.opacity = 1)
  const tooltipTitle = tooltipEl.querySelector('p')
  tooltipTitle.innerText = tooltip.title
  tooltipEl.innerHTML = ''
  tooltipEl.append(tooltipTitle)
  tooltip.dataPoints.forEach((dataPoint: any) => {
    const dataPointIndex = dataPoint.dataIndex
    const moodDescription = document.createElement('P')
    moodDescription.innerText = pickedMoodsDescriptions[dataPointIndex]
    moodDescription.style.color = 'white'
    tooltipEl.append(moodDescription)
  })
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: false,
      external: externalTooltipHandler
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
        callback: function (value: number) {
          const temp = yAxisLabels.find((tick) => tick.value === value)
          return temp?.icon
        }
      }
    }
  }
}
</script>

<template>
  <section class="py-24 h-screen">
    <div v-if="pickedMoods?.length" class="sm:max-w-sm md:max-w-7xl mx-auto h-full pb-16">
      <BaseHeadline text="Overview" headline-type="h1" class="text-center" />
      <Line class="h-full" :data="chartData" :options="chartOptions" />
    </div>
    <BaseHeadline v-else class="text-center" text="No data yet, go track your mood!" headline-type="h1" />
  </section>
</template>

<style>
.tooltip {
  background: rgba(0, 0, 0, 1);
  padding: 0.5em;
  position: absolute;
  transform: translate(-50%, 0);
}
.tooltip p {
  color: white;
}
</style>
