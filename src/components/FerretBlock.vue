<template>
  <div class="ferret ">
    <div class="container ferret__wrapper">
      <div class="ferret__info-wrapper">
        <p class="ferret__link">Инструменты / Хорёк-оценщик</p>
        <div class="ferret__title_wraper">
          <h2 class="ferret__title mt_20">Хорёк-оценщик</h2>
          <img class="ferret_image_bg min_576" src="/img/ferret_bg2.png" alt="ferret">
        </div>
        <p class="ferret__info mt_15">Он оценивает артефакты и говорит, каким персонажам они могут подойти. Не можешь
          решить,
          оставить артефакт или отправить на «корм»? Хорёк-оценщик поможет!</p>
      </div>
      <div class="ferret__image">
        <img class="ferret_image_bg max_576" src="/img/ferret_bg.png" alt="ferret_bg">
      </div>
    </div>
  </div>
</template>

<style lang="scss">

  .ferret {
    margin: 30px 0;

    &__wrapper {
      overflow: hidden;
      position: relative;
      padding: 50px 0 50px 50px;
      border-radius: 30px;
      background: rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(23.5px);
    }

    &__link {
      @extend .text_note;
    }

    &__title {
      @extend h2;

      &_wrapper {
        position: relative;
      }
    }

    &__info {
      @extend .text_note;
    }

    &__image {
      max-width: 300px;
      height: 140px;

      & .ferret_image_bg {
        position: relative;
        top: -320px;
        left: -400px;
        border-radius: 30px;
        z-index: -2;
      }

      & .ferret_image_fg {
        display: none;
        position: relative;
        top: -50px;
        left: -60px;
      }
    }
  }


  @include max-desktop_992 {
    .ferret__wrapper {
      align-items: flex-end;
      z-index: 100;
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
    .ferret__wrapper {
      padding: 50px 0 40px 40px;
    }

    .ferret_image_bg {
      position: absolute;
      top: -265px !important;
      right: -685px !important;
      left: unset !important;
      z-index: -1;
    }

    .ferret__title {
      width: 50%;
    }
  }

  @include max-desktop_480 {
    .ferret_image_bg {
      top: -275px !important;
      right: -675px !important;
      scale: 0.85;
    }
  }

</style>