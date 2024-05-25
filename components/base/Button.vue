<template>
  <button
    class="flex w-full items-center justify-center gap-2 rounded-2xl border-[1px] !border-primary bg-primary px-8 py-4 text-sm text-white transition-all duration-300 hover:opacity-90"
    :class="[
      props.outlined && ' bg-white !text-primary hover:bg-[#e2ffd8]',
      props.small && 'md:px-5 md:py-3',
    ]"
  >
    <span> {{ props.title }} </span>
    <NuxtImg
      v-if="props.icon"
      :src="`/icons/${props.icon}.svg`"
      loading="lazy"
      class="min-w-4"
    />
  </button>
</template>

<script setup lang="ts">
interface Props {
  title: string
  icon?: string
  outlined?: boolean
  small?: boolean
}

const props = defineProps<Props>()
</script>
