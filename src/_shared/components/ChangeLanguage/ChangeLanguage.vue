<template>
  <div class="relative block_row gap-20 full-width">
    <button class="button header__btn button_outline-white full-width maxw_300 block_row gap-15 relative z_15"
            :class="isMobile ? 'max_992_op': '' " @click="toggleAccordion">
      {{ t('language') }}:
      <span>{{ t('currentLanguage') }}</span>
      <ArrowDown :class="isOpenAccordion ? 'arrow_top' : ''"/>
    </button>
    
    <div class="accordion__overlay" @click="closeAccordion" v-show="isOpenAccordion"></div>
    
    <div class="accordion__panel block_column gap-15 full-width p20 br_10" :class="panel" v-show="isOpenAccordion">
      <p
          class="active"
          v-for="(lang, key) in langList"
          @click="switchLang(key)" :key="key"
      >
        {{ t(lang) }}
      </p>
    </div>
  </div>
</template>


<script setup lang='ts'>
import ArrowDown from '/public/img/icon/arrow/chevron-down.svg?component'

import { useOpen } from "@/use";
import { useI18n } from "vue-i18n";
import { langList, SelectLocales } from "@/localization";

const { isMobile, panel } = defineProps(['isMobile', 'panel'])

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

</script>


<style lang='scss' scoped>
.top_90 {
  top: 90px !important;
}

.accordion__overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
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

.max_992_op {
  @include max-desktop_992 {
    opacity: 0;
    max-width: 10px;
    pointer-events: none;
  }
}

</style>