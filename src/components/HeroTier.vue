<template>
  <div class="tier-wrapper">
    <div id="best">
      <div class="hero" v-for="hero in heroes">
        <img :src="`/${hero.icon_url}`" :alt="`${hero.name}`">
      </div>
    </div>
    <div id="good"></div>
    <div id="normal"></div>
    <div id="bad"></div>
  </div>
</template>


<script setup>
  import {useCharacterStore} from "@/stores/character.js";

  const heroes = useCharacterStore().heroes

</script>


<style lang="scss">
  .tier-wrapper {
    width: 100%;

    & > div {
      box-shadow: 4px 4px 21px 7px rgb(0 0 0 / 25%);
      border-radius: $br_base;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 240px;
      margin-bottom: $mg_big;
      padding: $pd_vbig;
    }

    #best {
      background: $best;
    }

    #good {
      background: $good;
    }

    #normal {
      background: $norm;
    }

    #bad {
      background: $bad;
    }

    .hero {
    }
  }
</style>