<template>
  <div class="mt-2 space-y-6 px-6 py-14 md:space-y-8 md:px-12">
    <h2 class="text-3xl font-medium tracking-wider md:text-4xl">
      Join Nimbus Early Bird Program!
    </h2>

    <p class="text-sm font-light text-gray-600 md:text-base">
      Sign up now for early access to Nimbus, the cutting-edge AI data
      processing platform. Enjoy exclusive benefits as one of our first users!
    </p>

    <form id="trialForm" @submit.prevent="validate">
      <label
        for="emailInput"
        class="ml-1 text-sm text-gray-500 transition-colors duration-500"
        :class="[error && 'text-red-500']"
        >Email</label
      >
      <input
        v-model="email"
        ref="inputRef"
        id="emailInput"
        type="text"
        class="max-h-[54px] w-full rounded-2xl border-[1px] border-gray-300 px-4 py-4 outline-none transition-colors duration-500"
        :class="[error && 'border-red-500']"
      />
      <div class="h-5">
        <Transition name="fade">
          <label
            v-if="error"
            for="emailInput"
            class="ml-1 text-sm text-red-500"
          >
            Please provide a valid address
          </label>
        </Transition>
      </div>
    </form>

    <BaseButton
      title="Submit"
      class="tracking-widest"
      type="submit"
      form="trialForm"
    />
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const inputRef = ref(null)
const error = ref(false)
const success = ref(false)

function validate() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  error.value = !emailRegex.test(email.value)

  if (!error.value) success.value = true
}

onMounted(() => {
  if (inputRef.value) {
    ;(inputRef.value as HTMLElement).focus()
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
