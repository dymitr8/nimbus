<template>
  <div
    class="v-container fixed z-20 w-full border-b-[1px] border-gray-300 bg-white py-0 transition-all duration-300 ease-in-out 2xl:w-[1600px]"
    :class="[scrolled && '-translate-y-24']"
  >
    <div class="flex h-full w-full justify-between bg-white py-5 font-medium">
      <div class="flex items-center gap-8">
        <NuxtLink to="/">
          <NuxtImg src="/icons/nimbus.svg" width="115" />
        </NuxtLink>

        <div
          v-for="item in links"
          :key="item"
          class="cursor-pointer"
          @click="$router.push({ hash: `#${item.toLowerCase()}` })"
        >
          {{ item }}
        </div>
      </div>

      <div class="flex gap-2">
        <div>
          <div
            class="flex w-full items-center justify-center gap-2 rounded-2xl border-[1px] border-primary px-5 py-3 text-sm text-primary sm:w-max"
          >
            <span> Get a demo </span>
          </div>
        </div>

        <div>
          <div
            class="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm text-white sm:w-max"
          >
            <span> Start your free trial </span>
            <NuxtImg src="/icons/ai-white.svg" class="min-w-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const scrolled = ref(false)
const links = ref(['About', 'Solutions', 'Trial', 'FAQ'])

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
