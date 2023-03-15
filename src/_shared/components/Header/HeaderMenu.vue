<template>
  <div class="menu__close" @click.prevent.self="props.toggle()" :class="{view: props.isOpen}">
    <div :class="{menu__open: props.isOpen}" class="menu" @click.prevent>
      <div class="card bg_200 br_20 block_column gap-20 min_768 card_gray">
        <p>
          <router-link to="/">{{ t("header.main") }}</router-link>
        </p>
        <p>
          <router-link to="/ferret">{{ t("header.tools") }}</router-link>
        </p>
        <p>
          <router-link to="/ferret">{{ t("header.tables") }}</router-link>
        </p>
        <p>
          <router-link to="/ferret">{{ t("header.guides") }}</router-link>
        </p>
      </div>
      
      <div class="menu__button mt_20 card bg_200 br_20">
        <p><a>Контакты</a></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const props = defineProps(['isOpen', 'toggle'])
const { t } = useI18n()
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

