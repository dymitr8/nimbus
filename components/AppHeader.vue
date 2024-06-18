<template>
  <div
    class="fixed z-50 w-full bg-white py-0 transition-all duration-300 ease-in-out 2xl:w-[1600px]"
    :class="[scrolled && '-translate-y-20']"
  >
    <div
      class="v-container relative z-50 flex h-full w-full justify-between border-b-[1px] border-gray-300 bg-white py-4"
    >
      <div class="flex items-center gap-10">
        <NuxtImg
          src="/icons/nimbus.svg"
          class="w- w-[105px] cursor-pointer"
          loading="lazy"
          @click="hashScroll(null)"
        />

        <ClientOnly>
          <Teleport to="#drawer" :disabled="greaterOrEqual('lg').value">
            <div class="flex flex-col justify-between">
              <div class="gap-6 lg:flex">
                <div
                  v-for="item in links"
                  :key="item"
                  class="cursor-pointer border-b-[1px] border-gray-300 py-6 lg:border-none lg:py-0"
                  @click="hashScroll(`#${item.toLowerCase()}`)"
                >
                  {{ item }}
                </div>
              </div>
            </div>
          </Teleport>
        </ClientOnly>
      </div>

      <div class="flex gap-4">
        <ClientOnly>
          <Teleport to="#drawer" :disabled="greaterOrEqual('md').value">
            <div
              class="mb-4 w-full space-y-4 md:mb-0 md:flex md:gap-2 md:space-y-0"
            >
              <BaseButton title="Get a demo" outlined small />
              <BaseButton
                title="Start your free trial"
                icon="ai-white"
                class="min-w-52"
                small
                @click="modal = true"
              />
            </div>
          </Teleport>
        </ClientOnly>

        <NuxtImg
          :src="`/icons/${drawer ? 'close' : 'burger-menu'}.svg`"
          loading="lazy"
          class="block min-w-8 lg:hidden"
          @click="drawer = !drawer"
        />
      </div>
    </div>

    <div
      id="drawer"
      class="v-container fixed z-10 m-auto flex h-[calc(100dvh-65px)] w-full flex-col justify-between bg-white py-2 transition-all duration-300 md:h-[calc(100dvh-79px)]"
      :class="[drawer ? 'top-[65px] md:top-[79px]' : '-top-[100dvh]']"
    />

    <BaseModal :open="modal" @on-close="modal = false">
      <BaseTrialForm />
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const drawer = ref(false)
const modal = ref(false)
const scrolled = ref(false)
const links = ref(['About', 'Solutions', 'Trial', 'FAQ'])

const router = useRouter()
const { y } = useWindowScroll()
const { greaterOrEqual } = useBreakpoints(breakpointsTailwind)
const { freezeScroll } = useScrollFreeze()

function hashScroll(hash: string | null) {
  const timeout = greaterOrEqual('lg').value ? 0 : 300
  drawer.value = false

  setTimeout(() => {
    if (!hash) return scrollTo({ top: 0, behavior: 'smooth' })

    router.push({ hash })
  }, timeout)
}

watch(
  () => y.value,
  (newV, oldV) => {
    if (newV === 0) router.push({ hash: '' })

    if (newV > 70 && newV > oldV) {
      scrolled.value = true
    } else if (newV < oldV) {
      scrolled.value = false
    }
  },
)

watch(
  () => drawer.value,
  (newV) => freezeScroll(newV),
)
</script>
