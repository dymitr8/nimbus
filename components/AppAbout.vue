<template>
  <div class="v-container">
    <h3 class="mt-4 text-sm uppercase text-primary">About us</h3>
    <h4 class="mt-4 text-4xl font-medium tracking-wider">
      Empowering Innovation AI
    </h4>
    <p class="mt-10 font-light text-gray-600">
      We are driven by the vision of transforming businesses with artificial
      intelligence. Founded in 2022, we have consistently pushed the boundaries
      of AI to offer smart, scalable, and intuitive solutions that drive growth
      and efficiency.

      <br v-for="i in 2" :key="i" />

      Our team of expert data scientists, engineers, and strategists combines
      cutting-edge technology with deep industry knowledge to deliver custom AI
      solutions that cater to unique business challenges.
    </p>

    <div class="flex flex-wrap gap-x-6">
      <div
        v-for="(item, index) in metrics"
        :key="item.metric"
        class="mt-14 max-w-[150px] space-y-2"
        :class="index === 2 && 'max-w-[170px]'"
      >
        <div class="text-3xl font-semibold">{{ item.metric }}</div>
        <div class="font-light text-gray-600">{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const metrics = ref([
  {
    metric: '15+',
    label: 'Years at Computer Science',
  },
  {
    metric: '22',
    label: 'Clients Countries Worldwide',
  },
  {
    metric: '370+',
    label: 'Projects Successfully Implemented',
  },
])
</script>
