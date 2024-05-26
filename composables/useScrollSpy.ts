export function useScrollSpy(target: Ref<HTMLDivElement | null>) {
  const targetIsVisible = ref(false)

  useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      targetIsVisible.value = isIntersecting
    },
    { threshold: 0.4, root: null, rootMargin: '0px' },
  )

  const scrollSpyClass = computed(() => [
    targetIsVisible.value
      ? 'translate-x-0 opacity-100 transition-all duration-700'
      : 'translate-x-6 opacity-0 transition-all duration-500',
  ])

  return { scrollSpyClass }
}