<template>
  <div class="tier__wrapper relative block_column full-height justify-start">
    <p class="text_title text_start mb_30" id="titleResult">{{ $t("weasel.response") }}</p>
    
    <div v-for="(value, i) in tiers" :id="value[1]" :class="{'m0': !heroes.appraiser_start}">
      <div class="tier__hero-wrapper" v-if="heroes.appraiser_start">
        <p class="full-width">{{ $t(`weasel.tier.${value[1]}`) }}</p>
        <HeroBlock :heroes="heroes.sortedCharactersStats[i]"/>
      </div>
    </div>
    <div class="tier__hero-preview" v-if="!heroes.appraiser_start">
      <div class="preview-wrapper">
        <img src="/img/weasel_logo.svg" alt="weasel">
        <p>{{ $t("weasel.weaselHint") }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import HeroBlock from '@/pages/weasel/components/HeroBlock.vue';
  import { useCharacterStore } from '@/stores/character';
  import { onMounted } from 'vue';
  import { useListsStore } from "@/stores/lists";
  
  const heroes = useCharacterStore();
  const tiers = useListsStore().tiers;

</script>

<style lang="scss" scoped>
  
  .tier__wrapper {
    & > div {
      border-radius: 20px;
      margin-bottom: 10px;
    }
    
    #S {
      background: $best;
    }
    
    #A {
      background: $good;
    }
    
    #B {
      background: $norm;
    }
    
    #C {
      background: $bad;
    }
  }
  
  .tier__hero-wrapper {
    width: 100%;
    min-height: 80px;
    border-radius: 20px;
    @extend .block_wrap;
    
    margin-left: 2px;
    padding: 30px 30px 0 30px;
    border: 1px solid $bg_light_1;
    background: $bg_base_dark;
  }
  
  .tier__hero-preview {
    @extend .block_row;
    border: 1px solid $gray_300;
    height: 100%;
    background: unset !important;
    
    & .preview-wrapper {
      position: relative;
      width: 340px;
      border: 1px solid $gray_300;
      border-radius: 0 30px 30px 30px;
      padding: 60px 30px 30px 30px;
    }
    
    & img {
      top: -20px;
      position: absolute;
    }
    
  }
  
  @include max-desktop_992 {
    .tier__wrapper, .tier__hero-preview {
      min-height: 450px;
    }
  }
  
  @include max-desktop_480 {
    .tier__wrapper .tier__hero-preview .preview-wrapper {
      width: 240px;
    }
  }
</style>