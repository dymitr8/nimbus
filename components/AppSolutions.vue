<template>
  <div class="v-container flex flex-col gap-16">
    <div class="m-auto">
      <h3 class="text-center text-sm uppercase text-swampy">Solutions</h3>
      <h4
        class="mt-4 text-center text-3xl font-medium tracking-wider md:text-4xl"
      >
        Revolutionize Your <br />
        Business with Our <br />
        AI-Powered Features
      </h4>
    </div>

    <div
      class="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0"
    >
      <div v-for="item in solutions" class="border-t-2 border-gray-300 pt-10">
        <NuxtImg :src="`/logos/solutions/${item.icon}.svg`" width="60" />

        <div class="mt-16">
          <h4 class="w-9/12 text-2xl font-semibold">{{ item.title }}</h4>
          <p class="mt-3 font-light text-gray-600">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const solutions = ref([
  {
    icon: 'analytics',
    title: 'Advanced Data Analytics',
    text: 'Predictive analytics to gain actionable insights and forecast future trends.',
  },
  {
    icon: 'operations',
    title: 'Operations with Automation',
    text: 'Enhance your operational efficiency with our AI-driven automated workflows.',
  },
  {
    icon: 'nlp',
    title: 'Unlock Insights with NLP',
    text: 'Language processing to extract meaningful unstructured data.',
  },
  {
    icon: 'custom',
    title: 'Custom AI for Your Needs',
    text: 'Collaborate with our team of AI experts to build and deploy bespoke models.',
  },
])
</script>
