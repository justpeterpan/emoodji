<template>
  <main>
    <section id="start" class="flex min-h-screen">
      <div class="bg-white w-1/2 flex justify-center flex-col p-16">
        <BaseHeadline text="Start tracking your mood" headline-type="h1" is-huge class="mb-12" />
        <div class="flex flex-col-reverse gap-8 xl:flex-row xl:gap-24 items-start">
          <div class="xl:w-1/2">
            <BaseButton class="w-full" text="Learn more" @click="goToSection('#features')" />
          </div>
          <div class="xl:w-1/2">
            <p class="text-lg">emoodji helps you to spot when and why mood swings in your team occur.</p>
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <div class="flex items-center justify-center h-full">
          <img src="/images/illu-hero.svg" alt="" />
        </div>
      </div>
    </section>
    <section id="features" class="py-12 flex min-h-screen items-center">
      <div class="container mx-auto">
        <div class="w-1/2">
          <BaseHeadline text="Amazing features" headline-type="h2" />
        </div>
        <div class="flex flex-col md:flex-row gap-16">
          <BaseCard :is-flippable="false" class="md:w-1/3">
            <template #front>
              <div class="text-left">
                <BaseIcon icon="select" class="mb-12" />
                <BaseHeadline headline-type="h3" text="Choose your mood" />
                <p class="text-lg">emoodji helps you to spot when and why mood swings in your team occur.</p>
              </div>
            </template>
          </BaseCard>
          <BaseCard :is-flippable="false" class="md:w-1/3">
            <template #front>
              <div class="text-left">
                <BaseIcon icon="graph" class="mb-12" />
                <BaseHeadline headline-type="h3" text="Keep track" />
                <p class="text-lg">emoodji helps you to spot when and why mood swings in your team occur.</p>
              </div>
            </template>
          </BaseCard>
          <BaseCard :is-flippable="false" class="md:w-1/3">
            <template #front>
              <div class="text-left">
                <BaseIcon icon="teams" class="mb-12" />
                <BaseHeadline headline-type="h3" text="emoodji for teams" />
                <p class="text-lg">emoodji helps you to spot when and why mood swings in your team occur.</p>
              </div>
            </template>
          </BaseCard>
        </div>
      </div>
    </section>
    <section id="cta" class="bg-white py-48">
      <div class="container mx-auto text-center flex items-center">
        <div class="lg:w-1/2 mx-auto flex flex-col items-center">
          <BaseHeadline headline-type="h2" text="Watcha waitin for" />
          <p class="mb-8">emoodji helps you to spot when and why mood swings in your team occur.</p>
          <BaseButton text="Sign up for free" />
        </div>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import BaseHeadline from '~/components/Base/BaseHeadline.vue'
const router = useRouter()

function goToSection(section: String) {
  router.push(section as RouteLocationRaw)
}
</script>
