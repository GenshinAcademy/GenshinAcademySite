<template>
  <div id="subHeader" class="tables__wrapper m_y30 container_wrapper">
    <div class="container container_m0 card__image weasel">
      <div class="weasel__info-wrapper">
        <p class="text_body2 text_font-sub">{{ $t('tables.breadCrumbs') }}</p>
        
        <div class="relative">
          <h2 class="weasel__title mt_20">{{ $t('tables.Title') }}</h2>
        </div>
        
        <p class="text_body2 text_font-sub mt_15">{{ $t('tables.Body') }}</p>
      </div>
      <div class="tables__image">
        <img class="traveler__img" src="/img/tables.png" alt="traveler">
      </div>
    </div>
  </div>

</template>


<script setup lang='ts'>

</script>


<style lang='scss' scoped>
.tables__wrapper {
  & .container {
    max-height: 250px;
  }
}
</style>