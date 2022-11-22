<template>
  <Header/>
  <div class="wrapper">
    <ArtTab/>
    <HeroTier/>
  </div>
  <Footer/>
</template>

<script setup>
  import Header from '@/components/Header.vue'
  import ArtTab from '@/components/ArtTab.vue'
  import HeroTier from '@/components/HeroTier.vue'
  import Footer from '@/components/Footer.vue'
</script>

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
    max-width: 1920px;
    padding: $pd_vbig;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: $gp_big;
  }

  img {
    user-select: none;
    -webkit-user-drag: none;
  }
</style>