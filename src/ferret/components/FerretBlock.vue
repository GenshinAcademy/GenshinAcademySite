<template>
  <div class="ferret__wrapper m_y30 container_wrapper">
    <div class="container container_m0 card__image ferret">
      <div class="ferret__info-wrapper">
        <p class="text_body2 text_font-sub">Инструменты / Хорёк-оценщик</p>
        
        <div class="relative">
          <h2 class="ferret__title mt_20">Хорёк-оценщик</h2>
          <img class="ferret_image_bg min_576" src="/img/ferret_bg2.png" alt="ferret">
        </div>
        
        <p class="text_body2 text_font-sub mt_15">Он оценивает артефакты и говорит, каким персонажам они могут подойти.
          Не можешь
          решить,
          оставить артефакт или отправить на «корм»? Хорёк-оценщик поможет!</p>
      </div>
      <div class="ferret__image">
        <img class="ferret_image_bg max_576" src="/img/ferret_bg.png" alt="ferret_bg">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  
  .ferret__info {
    @extend .text_note;
  }
  
  .ferret__image {
    max-width: 300px;
    height: 140px;
  }
  
  .ferret_image_bg {
    position: relative;
    top: -320px;
    left: -400px;
    border-radius: 30px;
    z-index: -2;
  }
  
  .ferret_image_fg {
    display: none;
    position: relative;
    top: -50px;
    left: -60px;
  }
  
  
  @include max-desktop_992 {
    .ferret__wrapper {
      align-items: flex-end;
      z-index: 4;
      overflow: hidden;
    }
    .ferret__image {
      max-width: 240px;
      height: 110px;
    }
    .ferret_image_fg {
      position: relative;
      right: -40px;
      bottom: -20px;
      z-index: 1;
      transform: scale(0.9);
    }
    .ferret_image_bg {
      top: -330px !important;
      left: -420px !important;
    }
  }
  
  @include max-desktop_576 {
    .ferret {
      padding: 50px 40px 40px 40px !important;
    }
    
    .ferret_image_bg {
      position: absolute;
      top: -350px !important;
      right: -705px !important;
      left: unset !important;
      z-index: -1;
    }
    
    .ferret__title {
      width: 50%;
    }
  }
  
  @include max-desktop_480 {
    .ferret_image_bg {
      top: -360px !important;
      right: -705px !important;
      scale: 0.85;
    }
  }

</style>