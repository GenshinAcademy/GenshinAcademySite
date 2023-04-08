<template>
  <div class="hero block_row align-end" v-for="hero in heroes">
    <img
        :src="hero.icon_url"
        @error="(e: HTMLImageElement) => {if (e.target) {(e.target).src = '/img/uchar.webp'}}"
        :alt="`${hero.name}`"
        class="pointer_all"
    />
    <p>{{ hero.name }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps(['heroes']);
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  @extend .block_row;
  height: 88px;
  justify-content: flex-end;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
  
  & p {
    display: none;
    position: absolute;
    bottom: 5px;
    width: 100%;
    text-align: center;
    user-select: none;
    word-break: keep-all;
  }
  
  & img:hover {
    transition: 0s;
    position: relative;
    opacity: 0.3;
    z-index: 2;
    
    & + p {
      display: block;
    }
  }
  
  & img {
    width: 76px;
    height: 75px;
    object-fit: contain;
  }
}
</style>
