<template>
  <div class="v-container grid gap-y-10 bg-secondary lg:grid-cols-2">
    <div class="flex flex-col justify-between">
      <div>
        <h4 class="text-4xl font-medium tracking-wider">
          Experience the Future of Business Analytics
        </h4>
        <p class="mt-4 font-light text-gray-600">
          Get hands-on with our advanced AI-driven features and see the
          difference for yourself. Start your free trial today.
        </p>

        <div class="mt-8 space-y-4">
          <div
            v-for="item in analytics"
            :key="item"
            class="flex items-center gap-2"
          >
            <NuxtImg src="/icons/ai.svg" class="min-w-5" />
            <span class="font-light">{{ item }}</span>
          </div>
        </div>
      </div>
      <BaseButton
        title="Start your free trial"
        icon="ai-white"
        class="mt-8 sm:w-max"
      />
      <!-- <div
        class="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-white sm:w-max"
      >
        <span> Start your free trial </span>
        <NuxtImg src="/icons/ai-white.svg" class="min-w-5" />
      </div> -->
    </div>

    <div class="flex justify-end">
      <div
        class="relative h-full w-full rounded-2xl border-[1px] border-gray-300 p-5 lg:w-10/12"
      >
        <div
          class="absolute -bottom-[1px] -left-[1px] z-10 flex w-8/12 gap-4 rounded-2xl border-[1px] border-gray-300 bg-white p-5"
        >
          <NuxtImg src="/icons/ai-bright.svg" class="min-w-7" />

          <div class="flex w-full animate-pulse flex-col gap-2">
            <div class="h-2.5 w-1/2 rounded-lg bg-gray-300" />
            <div class="h-2 w-full rounded-lg bg-gray-300" />
          </div>
        </div>

        <NuxtImg
          src="/abstract.jpg"
          format="webp"
          quality="30"
          class="h-full w-full rounded-2xl object-cover object-center"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const analytics = ref([
  'Context-aware natural language search and discovery',
  'Embark on a journey of data-driven decision-making',
  'Single permission model for data + AI',
])
</script>
