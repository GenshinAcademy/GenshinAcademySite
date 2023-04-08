<template>
  <Header/>
  <WeaselBlock/>
  <div class="bg__image top_95 maxh_400">
    <img class="full-height" src="/img/bg_art.png" alt="bg">
  </div>
  
  <div class="card container align-stretch p50">
    <ArtTab/>
    <div class="hero__wrapper relative full-width">
      <HeroTier/>
    </div>
  </div>
  
  <ScrollBtn :line="'titleResult'" :to="'titleInput'"/>
</template>

<script lang="ts" setup>
import Header from '@/_shared/components/Header/Header.vue';
import ArtTab from '@/pages/weasel/components/ArtTab.vue';
import HeroTier from '@/pages/weasel/components/HeroTier.vue';
import WeaselBlock from "@/pages/weasel/components/WeaselBlock.vue";
import ScrollBtn from "@/pages/weasel/components/ScrollBtn.vue";
import { usePageTitle } from "@/use/usePageTitle";

usePageTitle('weasel')
</script>

<style lang="scss" scoped>

@include max-desktop_992 {
  .card {
    flex-direction: column;
    justify-content: flex-start;
  }
}

@include max-desktop_576 {
  .card {
    padding: 50px 40px 40px 40px !important;
    gap: unset;
  }
  
  .hero__wrapper > .tier__wrapper {
    height: unset !important;
    padding: 50px 40px 40px 40px;
    border-radius: 30px;
    background: #1B1D2A;
    justify-content: center;
    align-items: stretch;
    
    position: absolute;
    width: calc(100% + 80px);
    top: 80px;
    left: -40px;
  }
}

@include max-desktop_480 {
  .card, .hero__wrapper > .tier__wrapper {
    padding: 50px 20px 20px 20px !important;
  }
  
  .hero__wrapper > .tier__wrapper {
    top: 50px;
    left: -20px;
    width: calc(100% + 40px);
  }
}

@include max-desktop_375 {
  .container {
    margin: unset;
  }
  .header {
    padding: 0 30px;
  }
}
</style>