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
          
          <!-- Todo: Accordion вынести в отдельный компонент -->
          <div class="relative block_row gap-20">
            <button class="button button_outline-white max_768 block_row gap-15" @click="toggleAccordion">
              {{ t('language') }}:
              <span>{{ t('currentLanguage') }}</span>
              <span class="icon- icon-arrow-down2"></span>
            </button>
            
            <div class="accordion__overlay" @click="closeAccordion" v-show="isOpenAccordion"></div>
            <div class="accordion__panel block_column gap-15 bg_100 p20 br_10" v-show="isOpenAccordion">
              <p
                  class="active"
                  v-for="(lang, key) in langList"
                  @click="switchLang(key)" :key="key"
              >
                {{ t(lang) }}
              </p>
            </div>
          </div>
          
          
          <!--          <button class="button button_outline-white max_768">{{ t("header.contacts") }}</button>-->
          
          <!-- Menu button -->
          <button @click.prevent="toggleMenu"
                  class="button button_outline-white button_svg header__btn min_992"
                  v-if="!isOpenMenu">
            <img src="/img/menu.svg" alt="menu">
            <span class="max_375">Меню</span>
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
import { langList, SelectLocales } from "@/localization";
import { useOpen } from "@/use/useOpen";

const props = defineProps(['divider'])

const { isOpen: isOpenMenu, toggle: toggleMenu } = useOpen();
const { isOpen: isOpenAccordion, toggle: toggleAccordion, close: closeAccordion } = useOpen();

const { t, locale } = useI18n()

function setLang(lang: string) {
  locale.value = lang
  closeAccordion()
  SelectLocales(lang, locale)
}

function switchLang(key: string) {
  setLang(key)
  location.reload()
}


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

.accordion__overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
}

.accordion__panel {
  min-width: 200px;
  position: absolute;
  top: 65px;
  left: 0;
  z-index: 100;
  
  p {
    padding: 5px;
    width: fit-content;
    cursor: pointer;
    color: $gray_500;
  }
  
  p:hover {
    color: $gray_700;
  }
}

@include max-desktop_375 {
  .header__btn {
    padding: 18px 14.5px !important;
  }
}
</style>