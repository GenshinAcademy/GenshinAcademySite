<template>
  <div
      class="scroll"
      v-if="scrollView"
  >
    <img
        @click="useScroll(to)"
        src="/img/up_button.svg"
        alt="scroll_btn"
        class="event_unset"
    >
  </div>
</template>

<script lang="ts" setup>
  import { onBeforeUnmount, onMounted, ref } from "vue";
  import { useScroll } from "@/use/useScroll";
  
  const scrollView = ref(false);
  
  const {to, line} = defineProps(['line', 'to'])
  
  let line_ = document.getElementById(line);
  
  // const scroll =
  
  /** Следит за скроллом.
   * Когда заголовок "Результаты", достигает верхнего края экрана, отображает кнопку */
  
  function scrollCheck() {
    if (line_) {
      scrollView.value = line_.getBoundingClientRect().y < 10;
    }
  }
  
  onMounted(() => {
    window.addEventListener('scroll', scrollCheck);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', scrollCheck);
  })

</script>

<style>
  .scroll {
    position: fixed;
    right: -10px;
    bottom: -10px;
    z-index: 200;
  }
</style>
