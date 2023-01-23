<template>
  <Header/>
  <div class="wrapper">
    <ArtTab/>
    <HeroTier/>
  </div>
  <Footer/>
  <UserHints/>
</template>

<script setup>
  import Header from '@/components/Header.vue'
  import ArtTab from '@/components/ArtTab.vue'
  import HeroTier from '@/components/HeroTier.vue'
  import Footer from '@/components/Footer.vue'
  import UserHints from "@/components/UserHints.vue";</script>

<style lang="scss">
  body {
    background: $bg_body;
  }

  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .wrapper {
    width: 100%;
    max-width: 1110px;
    padding: $pd_vbig;
    border-radius: $br_big;
    gap: $gp_small;
    background: $bg_base;

    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  img {
    user-select: none;
    -webkit-user-drag: none;
  }

  .divider {
    width: 100%;
    height: 1px;
    border-bottom: 1px solid $bg_light_1;

    &.divider_hide {
      display: none;
    }

    &.m_10 {
      margin: 10px 0;
    }
  }

  .image_align {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .title {
    font-size: $header_3;
    text-align: start;
    margin-bottom: 30px;
  }
</style>
