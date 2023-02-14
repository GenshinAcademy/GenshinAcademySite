<template>
  <div class="menu__close" @click.prevent.self="props.toggle()" :class="{view: props.isOpen}">
    <div :class="{menu__open: props.isOpen}" class="menu" @click.prevent>
      <div class="card bg_200 br_20 block_column gap-20 min_768 card_gray">
        <p>
          <router-link to="/">Главная</router-link>
        </p>
        <p class="divider"></p>
        <p>
          <router-link to="/ferret">Инструменты</router-link>
        </p>
        <p class="divider"></p>
        <p>
          <router-link to="/ferret">Таблицы</router-link>
        </p>
        <p class="divider"></p>
        <p>
          <router-link to="/ferret">Гайды</router-link>
        </p>
      </div>
      
      <div class="menu__button mt_20 card bg_200 br_20">
        <p><a>Контакты</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps(['isOpen', 'toggle'])
</script>

<style lang="scss" scoped>
  .menu {
    position: fixed;
    top: 80px;
    right: -250px;
    height: 100vh;
    padding: 40px;
    background: $bg_base_dark;
    z-index: 100;
    
    &.menu__open {
      left: 0;
      right: 0;
    }
    
    &__close {
      display: none;
      position: fixed;
      top: 80px;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 90;
      
      &.view {
        display: block;
      }
    }
  }
</style>