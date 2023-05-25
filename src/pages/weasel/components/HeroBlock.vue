<template>
  <div class="hero block_row align-end" v-for="hero in heroes">
    <img
        :src="hero.icon_url"
        @error="e => {if (e.target) {(e.target as HTMLImageElement).src = '/img/optimized/uchar.webp'}}"
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
  
  &:hover {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.6) 100%);
    
    & img {
      transition: 0s;
      position: relative;
      //opacity: 0.3;
      z-index: 2;
    
      & + p {
        display: block;
      }
    }
  }
  
  & p {
    display: none;
    position: absolute;
    bottom: 80px;
    text-align: center;
    user-select: none;
    background: #ffffff;
    color: #0c0f1d;
    padding: 10px 5px;
    border-radius: 8px;
    line-height: 20px;
    z-index: 100;
    left: 50%;
    width: fit-content;
    transform: translate(-50%,0);
    min-width: 110px;
  }
  
  
  
  & img {
    width: 76px;
    height: 75px;
    object-fit: contain;
  }
}
</style>
