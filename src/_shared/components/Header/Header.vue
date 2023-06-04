<template>
  <header id="header" class="relative block_row maxh_100 full-width">
    <div class="container block_column">
      <div class="block_row full-width justify-between m_y20">
        
        <div class="logo">
          <router-link to="/" class="block_column">
            <img src="/img/icon/logo/logo.svg" alt="logo">
          </router-link>
        </div>
        
        <div class="header__link block_row gap-5 max_992">
          <p>
            <router-link to="/">{{ t("header.main") }}</router-link>
          </p>
          <p>
            <router-link to="/#tools">{{ t("header.tools") }}</router-link>
          </p>
          <p>
            <router-link to="/tables">{{ t("header.tables") }}</router-link>
          </p>
          <p>
            <a href="https://teletype.in/@genshinacademy/mini-guides" target="_blank">{{ t("header.guides") }}</a>
          </p>
        </div>
        
        <div class="header__button block_row gap-20">
          
          <ChangeLanguage is-mobile="true" panel="bg_100"/>
          
          <!-- Menu button -->
          <button @click.prevent="toggleMenu"
                  class="button button_outline-white button_svg header__btn min_992"
                  v-if="!isOpenMenu">
            <img src="/img/menu.svg" alt="menu">
            <span class="max_480">{{ t('header.menu') }}</span>
          </button>
          
          <!-- Menu close button -->
          <img
              v-if="isOpenMenu"
              @click.prevent="toggleMenu"
              src="/img/close_ring_light.svg"
              class="event_unset pointer"
              alt="close">
        </div>
      
      </div>
      <p class="divider" v-if="props.divider"></p>
    </div>
    
    <HeaderMenu :isOpen="isOpenMenu" :toggle="toggleMenu"/>
  </header>
</template>

<script lang="ts" setup>
import HeaderMenu from "@/_shared/components/Header/HeaderMenu.vue";
import { watch } from "vue";
import { useI18n } from "vue-i18n";
import { useOpen } from "@/use/useOpen";
import ChangeLanguage from "@/_shared/components/ChangeLanguage/ChangeLanguage.vue";

const props = defineProps(['divider'])

const { isOpen: isOpenMenu, toggle: toggleMenu } = useOpen();

const { t } = useI18n()


/** Прокручивает экран в 0, и блокирует прокрутку страниы*/
watch(isOpenMenu, () => {
  if (isOpenMenu.value) {
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

.header__btn:hover {
  border-color: $gray_700;
  color: $gray_700;
  background: transparent;
}

@include max-desktop_375 {
  .header__btn {
    padding: 18px 14.5px !important;
  }
}
</style>