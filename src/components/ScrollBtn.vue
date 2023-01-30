<template>
  <div
    class="scroll min_992"
    v-if="scrollView"
  >
    <img
      @click="scrollBtn"
      src="/img/up_button.svg"
      alt="scroll_btn"
    >
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const scroll = ref(false);
const scrollView = ref(false);

let result = document.getElementById('titleResult');
let input = document.getElementById('titleInput');


function scrollBtn() {
  if (input) {
    input.scrollIntoView();
  }
}

/** Следит за скроллом.
 * Когда заголовок "Результаты", достигает верхнего края экрана, отображает кнопку */

function scrollCheck() {
  if (result) {
    scrollView.value = result.getBoundingClientRect().y < 10;
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

.scroll.down {
  transform: rotate(180deg);
}
</style>
