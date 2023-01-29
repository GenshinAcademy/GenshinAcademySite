<template>
  <Header/>
  <FerretBlock/>
  <div class="bg__image">
    <img src="/img/bg_art.png" alt="bg">
  </div>
  <div class="wrapper container">
    <ArtTab/>
    <div class="hero_wrapper">
      <HeroTier/>
    </div>
  </div>
  <Footer/>
  <UserHints/>
  <ScrollBtn/>
</template>

<script setup>
  import Header from '@/components/Header.vue'
  import ArtTab from '@/components/ArtTab.vue'
  import HeroTier from '@/components/HeroTier.vue'
  import Footer from '@/components/Footer.vue'
  import UserHints from "@/components/UserHints.vue";
  import FerretBlock from "@/components/FerretBlock.vue";
  import ScrollBtn from "@/components/ScrollBtn.vue";</script>

<style lang="scss">

  .container {
    width: -webkit-fill-available;
    max-width: 1110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 30px;
  }

  body {
    background: $bg_body;
  }

  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .bg__image {
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    z-index: -1;

    & img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
  }

  .wrapper {
    padding: $pd_vbig;
    border-radius: $br_big;
    gap: $gp_small;
    background: $bg_base_dark;

    justify-content: center;
    align-items: stretch;
  }

  .hero_wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  img {
    user-select: none;
    -webkit-user-drag: none;
  }

  a {
    cursor: pointer;
  }

  @include max-desktop_992 {
    .wrapper {
      flex-direction: column;
      justify-content: flex-start;
    }
  }

  @include max-desktop_576 {
    .wrapper {
      padding: 50px 40px 40px 40px;
      gap: unset;
    }

    .hero_wrapper > .tier-wrapper {
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
    .wrapper, .hero_wrapper > .tier-wrapper {
      padding: 50px 20px 20px 20px !important;
    }

    .hero_wrapper > .tier-wrapper {
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