<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="props.open"
        class="fixed z-[60] flex h-[100dvh] w-full items-center justify-center bg-[#00000040] font-[Poppins] outline-none"
      >
        <div
          ref="modalRef"
          class="relative w-11/12 max-w-[999px] rounded-2xl bg-white lg:w-7/12"
        >
          <slot />

          <NuxtImg
            src="/icons/close.svg"
            class="absolute right-5 top-5 w-8 cursor-pointer"
            @click="emit('onClose')"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  open: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['onClose'])

const modalRef = ref(null)

const { disableScroll } = useDisableScroll()

onClickOutside(modalRef, () => emit('onClose'))

watch(
  () => props.open,
  (newV) => disableScroll(newV),
)
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.4s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>
