<template>
  <div class="menu__close" @click.prevent.self="props.toggle()" :class="{view: props.isOpen}">
    <div :class="{menu__open: props.isOpen}" class="menu" @click.prevent>
      <!--      <div class="menu__button">-->
      <!--        <button @click.prevent="props.toggle()" class="button button_outline-white button_svg min_768">-->
      <!--          <img src="/img/menu.svg" alt="menu">-->
      <!--        </button>-->
      <!--      </div>-->

      <div class="menu__link min_768">
        <p><a>Главная</a></p>
        <p><a>Инструменты</a></p>
        <p><a>Таблицы</a></p>
        <p><a>Гайды</a></p>
      </div>
      <div class="menu__button mt_20">
        <button class="button button_outline-white min_768">Контакты</button>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps(['isOpen', 'toggle'])

</script>

<style lang="scss">
.menu {
  position: fixed;
  top: 0px;
  right: -200px;
  height: 100vh;
  padding: 30px 20px;
  background: $bg_base_dark;
  z-index: 1000;

  &.menu__open {
    right: 0;
  }

  &__link {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    justify-content: center;
    flex-direction: column;
  }

  &__close {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    &.view {
      display: block;
    }
  }
}

</style>