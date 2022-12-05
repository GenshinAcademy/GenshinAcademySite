<template>
  <div class="hero" v-for="hero in heroes">
<!--<img :src="`/${hero.icon_url}`" :alt="`${hero.name}`"/>-->
    <img :src="`/geo.png`" :alt="`${hero.name}`"/>
    <p>{{hero.name}}</p>
  </div>
</template>

<script setup>
  defineProps({ heroes: 'heroes' })
</script>

<style scoped>
  p {
    font-size: 22px;
    color: #000000;
    text-align: center;
  }
</style>
