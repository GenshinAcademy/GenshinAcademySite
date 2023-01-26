<template>
  <header class="header">
    <div class="container">

      <div class="header__logo">
        <a>
          <img src="/img/logo.svg" alt="logo">
        </a>
      </div>

      <div class="header__link max_768">
        <p><a>Главная</a></p>
        <p><a>Инструменты</a></p>
        <p><a>Таблицы</a></p>
        <p><a>Гайды</a></p>
      </div>

      <div class="header__button">
        <button class="button button_outline-white max_768">Контакты</button>
        <button @click.prevent="toggleMenu" class="button button_outline-white button_svg min_768">
          <img src="/img/menu.svg" alt="menu">
          <span class="max_375">Меню</span>
        </button>
      </div>
    </div>

    <HeaderMenu :isOpen="isOpen" :toggle="toggleMenu"/>

  </header>
</template>

<style lang="scss">

.header {
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;

  &__link {
    display: flex;
    align-items: center;
    gap: 5px;

    & p {
      padding: 10px 15px;
    }
  }
}

</style>
<script setup>
import HeaderMenu from "@/components/HeaderMenu.vue";
import {ref} from "vue";

const isOpen = ref(false);

function toggleMenu() {

  isOpen.value = !isOpen.value
}

</script>