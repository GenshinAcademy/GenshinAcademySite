<template>
  <div class="scroll" :class="{down: !scroll}">
    <img
        @click="scrollBtn"
        src="/img/up_button.svg"
        alt="scroll_btn">
  </div>
</template>

<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";

const scroll = ref(false)


function scrollBtn() {
  let result = document.getElementById('titleResult')
  let input = document.getElementById('titleInput')

  if (scroll.value)
    input.scrollIntoView()
  else
    result.scrollIntoView()


}

/** Следит за скроллом.
 * Когда заголовок "Результаты", пропадает, включает скролл к блоку "Ввод" */

function scrollCheck() {
  scroll.value = window.scrollY > 1400;
}

onMounted(() => {
  window.addEventListener('scroll', scrollCheck)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollCheck)
})

</script>

<style>
.scroll {
  position: fixed;
  right: -10px;
  bottom: -10px;
  z-index: 200;
}

.scroll.down {
  transform: rotate(180deg);
}
</style>
