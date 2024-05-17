<template>
  <div
    class="v-container fixed z-20 w-full border-b-[1px] border-gray-300 bg-white py-0 transition-all duration-300 ease-in-out 2xl:w-[1600px]"
    :class="[scrolled && '-translate-y-20']"
  >
    <div
      class="flex h-full w-full items-center gap-8 bg-white py-5 font-medium"
    >
      <NuxtImg src="/icons/nimbus.svg" width="115" />

      <NuxtLink>About</NuxtLink>
      <NuxtLink>Solutions</NuxtLink>
      <NuxtLink>Trial</NuxtLink>
      <NuxtLink>FAQ</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const scrolled = ref(false)

const { y } = useWindowScroll()

watch(
  () => y.value,
  (newV, oldV) => {
    if (newV > 20 && newV > oldV) {
      scrolled.value = true
    } else if (newV < oldV) {
      scrolled.value = false
    }
  },
)
</script>
