<template>
  <header class="relative block_row maxh_100 full-width">
    <div class="container block_column">
      <div class="block_row full-width justify-between m_y20">
        
        <div class="logo">
          <router-link to="/">
            <img src="/img/logo.svg" alt="logo">
          </router-link>
        </div>
        
        <div class="header__link block_row gap-5 max_768">
          <p>
            <router-link to="/">Главная</router-link>
          </p>
          <p>
            <router-link to="/ferret">Инструменты</router-link>
          </p>
          <p>
            <router-link to="/ferret">Таблицы</router-link>
          </p>
          <p>
            <router-link to="/ferret">Гайды</router-link>
          </p>
        </div>
        
        <div class="header__button">
          <button class="button button_outline-white max_768">Контакты</button>
          <!-- Menu button -->
          <button @click.prevent="toggleMenu"
                  class="button button_outline-white button_svg header__btn min_768"
                  v-if="!isOpen">
            <img src="/img/menu.svg" alt="menu">
            <span class="max_375">Меню</span>
          </button>
          <!-- Menu close button -->
          <img
              v-if="isOpen"
              @click.prevent="toggleMenu"
              src="/img/close_ring_light.svg"
              alt="close">
        </div>
      
      </div>
      <p class="divider" v-if="props.divider"></p>
    </div>
    
    <HeaderMenu :isOpen="isOpen" :toggle="toggleMenu"/>
  </header>
</template>

<script lang="ts" setup>
  import HeaderMenu from "@/ferret/components/HeaderMenu.vue";
  import { ref, watch } from "vue";
  
  const props = defineProps(['divider'])
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
  .header__link p {
    padding: 10px 15px;
  }
  
  @include max-desktop_375 {
    .header__btn {
      padding: 18px 14.5px !important;
    }
  }
</style>