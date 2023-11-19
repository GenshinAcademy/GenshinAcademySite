<template>
  <div id="subHeader" class="tables__wrapper m_y30 container_wrapper">
    <div class="container container_m0 card__image weasel">
      <div class="relative z_2 weasel__info-wrapper">
        <p class="text_body2 text_font-sub">{{ $t('tables.breadCrumbs') }}</p>
        
        <div class="relative">
          <h2 class="weasel__title mt_20">{{ $t('tables.Title') }}</h2>
        </div>
        
        <p class="text_body2 text_font-sub mt_15">{{ $t('tables.Body') }}</p>
      </div>
      <div class="tables__image">
        <!--        <img class="traveler__img" src="/img/tables.png" alt="traveler">-->
        <img class="traveler__img max_576 mr_40" src="/tables.svg" alt="traveler">
        <img class="traveler__img min_576" src="/tables_576px.svg" alt="traveler">
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


@include max-desktop_768 {
  .tables__image {
    max-width: 300px;
  }
}

@include max-desktop_576 {
  .tables__image {
    max-width: 200px;
    scale: 0.7;
    transform: translate(0, 60px);
  }
}

@include max-desktop_480 {
  .tables__image {
    max-width: 50px !important;
    scale: 0.8;
    transform: translate(-200px, 20px);
    filter: blur(2px) brightness(0.5);
  }
}
</style>