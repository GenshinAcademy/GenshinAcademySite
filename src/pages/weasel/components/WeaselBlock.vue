<template>
  <div class="weasel__wrapper m_y30 container_wrapper">
    <div class="container container_m0 card__image weasel">
      <div class="weasel__info-wrapper">
        <p class="text_body2 text_font-sub">{{ $t('weasel.breadCrumbs') }}</p>
        
        <div class="relative">
          <h2 class="weasel__title mt_20">{{ $t('weasel.weaselTitle') }}</h2>
          <img class="weasel_image_bg min_576" src="/img/weasel_bg2.png" alt="weasel">
        </div>
        
        <p class="text_body2 text_font-sub mt_15">{{ $t('weasel.weaselBody') }}</p>
      </div>
      <div class="weasel__image">
        <img class="weasel_image_bg max_576" src="/img/weasel_bg.png" alt="weasel_bg">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.weasel__info {
  @extend .text_note;
}

.weasel__image {
  max-width: 300px;
  height: 140px;
}

.weasel_image_bg {
  position: relative;
  top: -320px;
  left: -400px;
  border-radius: 30px;
  z-index: -2;
}

.weasel_image_fg {
  display: none;
  position: relative;
  top: -50px;
  left: -60px;
}


@include max-desktop_992 {
  .weasel__wrapper {
    align-items: flex-end;
    z-index: 4;
    overflow: hidden;
  }
  .weasel__image {
    max-width: 240px;
    height: 110px;
  }
  .weasel_image_fg {
    position: relative;
    right: -40px;
    bottom: -20px;
    z-index: 1;
    transform: scale(0.9);
  }
  .weasel_image_bg {
    top: -330px !important;
    left: -420px !important;
  }
}

@include max-desktop_576 {
  .weasel {
    padding: 50px 40px 40px 40px !important;
  }
  
  .weasel_image_bg {
    position: absolute;
    top: -350px !important;
    right: -705px !important;
    left: unset !important;
    z-index: -1;
  }
  
  .weasel__title {
    width: 50%;
  }
}

@include max-desktop_480 {
  .weasel_image_bg {
    top: -360px !important;
    right: -705px !important;
    scale: 0.85;
  }
}

</style>