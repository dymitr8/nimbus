export function useScrollFreeze() {
  const freezeScroll = (newV: boolean) => {
    document.body.style.overflow = newV ? 'clip' : 'auto'
    document.body.style.touchAction = newV ? 'none' : 'auto'
  }

  const isScrollFreezed = computed(() => document.body.style.overflow === 'clip')
 
  return { freezeScroll, isScrollFreezed }
}