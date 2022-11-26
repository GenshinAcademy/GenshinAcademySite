<template>
  <div class="tier-wrapper">
    <div v-for="cat in categories" :id="cat">
      <HeroBlock :heroes="heroes.sort[cat]"/>
    </div>
  </div>
</template>

<script setup>
  import HeroBlock from '@/components/HeroBlock.vue'
  import { useCharacterStore } from '@/stores/character.js'
  import { onMounted } from 'vue'

  const heroes = useCharacterStore()
  const categories = ['best', 'good', 'normal', 'bad']

  onMounted(() => {
    heroes.get_hero()
  })

</script>

<style lang="scss">
  .tier-wrapper {
    width: 100%;

    & > div {
      width: 100%;
      height: 240px;
      box-shadow: 4px 4px 21px 7px rgb(0 0 0 / 25%);
      border-radius: $br_base;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: $gp_small;
      margin-bottom: $mg_big;
      padding: $pd_small;
      overflow: hidden;
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
      & img {
        width: 155px;
        height: 215px;
        border-radius: 25px;
      }
    }
  }
</style>
