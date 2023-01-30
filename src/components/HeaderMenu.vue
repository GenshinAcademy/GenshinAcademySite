<template>
  <div class="menu__close" @click.prevent.self="props.toggle()" :class="{view: props.isOpen}">
    <div :class="{menu__open: props.isOpen}" class="menu" @click.prevent>
      <div class="menu__link min_768 menu__wrapper">
        <p><a>Главная</a></p>
        <p class="divider"></p>
        <p><a>Инструменты</a></p>
        <p class="divider"></p>
        <p><a>Таблицы</a></p>
        <p class="divider"></p>
        <p><a>Гайды</a></p>
      </div>
      
      <div class="menu__button mt_20 menu__wrapper">
        <p><a>Контакты</a></p>
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
    top: 80px;
    right: -250px;
    height: 100vh;
    padding: 40px;
    background: $bg_base_dark;
    z-index: 1000;

    &.menu__open {
      left: 0;
      right: 0;
    }

    &__wrapper {
      background: #272935;
      border-radius: 20px;
      padding: 30px;
      width: 100%;
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
      top: 80px;
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