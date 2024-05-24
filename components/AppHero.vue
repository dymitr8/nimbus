<template>
  <div class="v-container !pt-32">
    <div class="grid w-full gap-10 lg:grid-cols-2">
      <div
        class="flex flex-col justify-between space-y-8 sm:w-10/12 lg:w-full lg:max-w-[600px]"
      >
        <h2
          class="text-[62px] font-semibold leading-[74px] md:text-[70px] md:leading-[85px]"
        >
          Unleash the Power of Data
        </h2>
        <p class="text-xl font-light leading-[34px] text-gray-600">
          Step into the future with our state-of-the-art AI solutions. Unleash
          the potential of machine learning to innovate, optimize, and transform
          your business processes.
        </p>

        <div>
          <div class="relative sm:w-max">
            <BaseButton title="Book an appointment" class="md:w-max" />
            <div
              class="absolute right-[14px] top-[14px] h-2 w-2 animate-ping rounded-full bg-white"
            />
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <div
          class="grid w-full grid-cols-3 gap-4 sm:w-2/3 md:w-1/2 lg:w-11/12 xl:w-9/12"
        >
          <div
            v-for="(item, index) in images"
            :key="index"
            class="aspect-square h-auto w-full"
          >
            <div
              v-if="index === 3"
              class="relative h-full w-full scale-75 rounded-[34px] bg-gray-300"
            >
              <div
                class="absolute -right-4 -top-4 h-12 w-12 -rotate-[10deg] rounded-xl bg-primary"
              />
            </div>

            <div
              v-else
              class="relative h-full w-full"
              :class="[index === 0 && 'hidden']"
            >
              <div
                class="absolute left-[3px] top-1 h-full w-full -rotate-6 rounded-[34px] bg-gray-300"
              />

              <NuxtImg
                v-if="!!item"
                :src="`/hero/${item}.jpg`"
                format="webp"
                quality="10"
                class="z-2 absolute h-full w-full rounded-[34px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const images = ref([null, 1, 2, null, 3, 4, 5, 6, 7])
</script>
