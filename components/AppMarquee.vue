<template>
  <div class="v-container mt-6 !py-8">
    <NuxtMarquee
      gradient
      auto-fill
      pause-on-hover
      :gradient-width="100"
      :speed="20"
      class="cursor-pointer"
    >
      <NuxtImg
        v-for="logo in logos"
        :key="logo"
        :src="`/icons/marquee/${logo}.svg`"
        class="mr-10 h-10 transition-opacity duration-300 hover:opacity-60 md:mr-16"
      />
    </NuxtMarquee>
  </div>
</template>

<script setup lang="ts">
const logos = ref([
  'nlogo',
  'ojbrand',
  'flowler',
  'jwoww',
  'sprite',
  'qbrand',
  'daystar',
  'devvy',
  'nimbus-black',
  'rubick',
  'cynaroll',
  'pokes',
])
</script>
