<template>
  <div class="mx-auto max-w-[1600px] font-[Poppins]">
    <div class="w-full">
      <AppHeader />
      <slot />
      <div class="v-container py-0">
        <div class="border-t-[1px] border-gray-300 py-6 text-sm text-[#838b7f]">
          <div class="flex items-center justify-end gap-2">
            <NuxtImg src="/icons/copyright.svg" class="w-3" />
            <span>2024 NIMBUS • All rights reserved</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
