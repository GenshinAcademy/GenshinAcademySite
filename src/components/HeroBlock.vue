<template>
  <div
    class="hero"
    v-for="hero in heroes"
  >
    <img
      :src="hero.icon_url"
      @error="e => (e.target as HTMLImageElement).src = '/img/uchar.webp'"
      :alt="`${hero.name}`"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps([
  'heroes'
]);
</script>

<style scoped>
p {
  font-size: 16px;
  text-align: center;
}
</style>
