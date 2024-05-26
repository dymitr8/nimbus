export function useScrollSpy(target: Ref<HTMLDivElement | null>) {
  const targetIsVisible = ref(false)

  useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      targetIsVisible.value = isIntersecting
    },
    { threshold: 0.3 },
  )

  const scrollSpyClass = computed(() => [
    targetIsVisible.value
      ? 'translate-y-0 opacity-100 transition-all duration-700'
      : 'translate-y-10 opacity-0 transition-all duration-700',
  ])

  return { scrollSpyClass }
}