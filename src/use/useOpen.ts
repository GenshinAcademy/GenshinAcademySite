import { ref } from "vue";


export function useOpen() {
  
  const isOpen = ref(false);
  
  function open() {
    isOpen.value = true
  }
  
  function close() {
    isOpen.value = false
  }
  
  function toggle() {
    isOpen.value = !isOpen.value
  }
  
  return { isOpen, close, open, toggle }
}