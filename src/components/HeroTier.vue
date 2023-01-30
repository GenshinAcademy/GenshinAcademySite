<template>
  <div class="tier-wrapper">
    <p class="title" id="titleResult">Результаты</p>
    <div v-for="value in tier">
      <div class="tier__hero-wrapper" :id="getKey(value)" v-if="heroes.appraiser_start">
        <p class="tier__title">{{ getValue(value) }}</p>
        <HeroBlock :heroes="heroes.sort[getKey(value)]"/>
      </div>
    </div>
    <div class="tier__hero-preview" v-if="!heroes.appraiser_start">
      <div class="preview-wrapper">
        <img src="/img/ferret_logo.svg" alt="ferret">
        <p>Выберите артефакт и нажмите «Оценить».</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import HeroBlock from '@/components/HeroBlock.vue'
  import {useCharacterStore} from '@/stores/character.js'
  import {onMounted} from 'vue'
  import {getKey, getValue} from "../handler.js";
  import {useListsStore} from "@/stores/lists.js";

  const heroes = useCharacterStore()
  const tier = useListsStore().tier

  onMounted(() => {
    heroes.get_hero()
  })
</script>

<style lang="scss">
  .tier-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    & > div {
      margin-bottom: 20px;
      background: linear-gradient(180deg, #30B4DD 0%, #60C83B 100%) !important;
      border-radius: 20px;
    }

    .tier__hero-wrapper {
      margin-left: 1px;

      width: 100%;
      min-height: 150px;
      border-radius: $br_normal;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: $gp_vsmall;
      padding: 30px 30px 0 30px;
      border: 1px solid $bg_light_1;
      background: $bg_base_dark;
      //border-left: 3px solid $color_active;

      & > div {
        display: flex;
        align-items: center;
        flex-direction: column;
        word-break: break-all;
      }
    }

    .tier__hero-preview {
      position: relative;
      border: 1px solid $bg_light_1;
      width: 100%;
      height: 100%;
      background: unset !important;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;

      & .preview-wrapper {
        position: relative;
        width: 340px;
        height: fit-content;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 0 30px 30px 30px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 60px 30px 30px 30px;
      }

      & img {
        top: -20px;
        position: absolute;
      }

    }

    #best {
      margin-left: 2px;
      //position: relative;
      //border-radius: 30px;
      //background: #1B1D2A;
      //border: 1px solid rgba(255, 255, 255, 0.1);
      //border-left-color: $best;

      &:before {
        //border-image-source: linear-gradient(180deg, #30B4DD 0%, #60C83B 100%) !important;
        //border-image-slice: 0 0 0 1 !important;
        //content: "";
        //position: absolute;
        //top: 0;
        //bottom: 0;
        //left: -2px;
        //right: 0;
        //background: linear-gradient(180deg, #30B4DD 0%, #60C83B 100%), #F6D79D;
        //border-radius: 34px;
        //z-index: -1;
      }
    }

    #good {
      border-left-color: $good;
    }

    #normal {
      border-left-color: $norm;
    }

    #bad {
      border-left-color: $bad;
    }

    & .tier__title {
      width: 100%;
      margin-bottom: 20px;
    }

    .hero {
      & img {
        width: 76px;
        height: 75px;
        border-radius: 20px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
        object-fit: contain;
      }
    }
  }

  @include max-desktop_992 {
    .tier-wrapper, .tier__hero-preview {
      min-height: 450px;
    }
  }

  @include max-desktop_480 {
    .tier-wrapper .tier__hero-preview .preview-wrapper {
      width: 240px;
    }
  }
</style>
