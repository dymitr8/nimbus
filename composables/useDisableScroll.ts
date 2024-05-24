export function useDisableScroll() {
  const disableScroll = (newV: boolean) => {
    document.body.style.overflow = newV ? 'clip' : 'auto'
    document.body.style.touchAction = newV ? 'none' : 'auto'
  }
 
  return { disableScroll }
}