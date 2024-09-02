import { breakpointsTailwind } from '@vueuse/core'

export function useScrollSpy(target: Ref<HTMLDivElement | null>) {
  const targetIsVisible = ref(false)

  const { greaterOrEqual } = useBreakpoints(breakpointsTailwind)
  const threshold: number = greaterOrEqual('md').value ? 0.4 : 0.15

  useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      targetIsVisible.value = isIntersecting
    },
    { threshold, root: null, rootMargin: '0px' },
  )

  const scrollSpyClass = computed(() => [
    targetIsVisible.value
      ? 'translate-x-0 opacity-100 transition-all duration-700'
      : 'translate-x-6 opacity-0 transition-all duration-700',
  ])

  return { scrollSpyClass }
}
