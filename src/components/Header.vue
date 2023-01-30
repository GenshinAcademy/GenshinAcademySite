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
        <button @click.prevent="toggleMenu"
                class="button button_outline-white button_svg header__btn min_768"
                v-if="!isOpen">
          <img src="/img/menu.svg" alt="menu">
          <span class="max_375">Меню</span>
        </button>
        <img
            v-if="isOpen"
            @click.prevent="toggleMenu"
            src="/img/close_ring_light.svg"
            alt="close">
      </div>
    </div>

    <HeaderMenu :isOpen="isOpen" :toggle="toggleMenu"/>

  </header>
</template>

<script lang="ts" setup>
  import HeaderMenu from "@/components/HeaderMenu.vue";
  import {ref, watch} from "vue";

  const isOpen = ref(false);

  function toggleMenu() {
    isOpen.value = !isOpen.value
  }

  /** Прокручивает экран в 0, и блокирует прокрутку страниы*/
  watch(isOpen, () => {
    if (isOpen.value) {
      window.scrollTo(0, 0)
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'unset'
    }
  })

</script>

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

  @include max-desktop_375 {
    .header__btn {
      border-radius: 50% !important;
      padding: 18px 14.5px !important;
    }
  }
</style>
