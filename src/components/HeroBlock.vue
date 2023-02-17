<template>
  <div class="hero" v-for="hero in heroes">
    <img :src="hero.icon_url"
         @error="e => e.target.src = '/img/uchar.webp'"
         :alt="`${hero.name}`"
    />
    <p>{{ hero.name }}</p>
  </div>
</template>

<script setup>
  defineProps({heroes: 'heroes'})
</script>

<style lang="scss" scoped>
  .hero {
    position: relative;

    & p {
      position: absolute;
      top: 20px;
      font-size: 16px;
      text-align: center;
      display: none;
      z-index: 1;
      margin: 3px;
      transition: 0s;
      user-select: none;
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
  }
</style>
