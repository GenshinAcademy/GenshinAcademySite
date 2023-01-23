<template>
  <div class="hero" v-for="hero in heroes">
    <img :src="checkSRC(hero.name)"
         @error="e => e.target.src = '/geo.png'"
         :alt="`${hero.name}`"
         @click="() => console.log(heroes)"
    />
    <!--    <img :src="`/geo.png`" :alt="`${hero.name}`"/>-->
<!--    <p>{{ hero.name }}</p>-->
  </div>
</template>

<script setup>
defineProps({heroes: 'heroes'})

/* Поменять на обычную ссылку */
function checkSRC(name) {
  return `https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_${name}.png`;
}

</script>

<style scoped>
p {
  font-size: 16px;
  text-align: center;
}
</style>
