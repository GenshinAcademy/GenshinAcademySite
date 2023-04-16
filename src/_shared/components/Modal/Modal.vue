<template>
  <div class="modal__wrapper full-width" :class="isOpen ? 'modal__active': '' " @click.self="close">
    <div class="modal">
      <img class="modal__close img_object-unset" @click="close" src="/img/icon/button/close.svg" alt="close">
      <slot></slot>
    </div>
  </div>
</template>


<script setup lang='ts'>
const { isOpen, close } = defineProps(['isOpen', 'close']);
</script>


<style lang='scss'>

</style>