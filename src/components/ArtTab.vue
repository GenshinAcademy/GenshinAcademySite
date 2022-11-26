<template>
  <div class="art-wrapper">
    <div class="art-stats">
      <p class="art-wrapper__title">Выбор Артефакта</p>
      <ul class="art-stats__art-list">
        <li
            class="art-stats__art-item"
            :class="style(art.name)"
            v-for="art in list"
            @click="selectedArt(art.name, art.stat)"
        >
          <img :src="`/${art.name}.svg`" :alt="art.name"/>
        </li>
      </ul>
      <MainStatSelect :view="viewMain" ref="hide"/>
    </div>
    <SubStatSelect/>
  </div>
</template>

<script setup>
  import MainStatSelect from '@/components/MainStatSelect.vue'
  import SubStatSelect from '@/components/SubStatSelect.vue'
  import { useListsStore } from '@/stores/lists.js'
  import { useCharacterStore } from '@/stores/character.js'
  import { ref } from 'vue'

  const list = useListsStore().art
  const store = useCharacterStore()

  store.is_user_art()

  const viewMain = ref([store.user_art.main])
  const hide = ref(null)

  /**
   * Выбирает артефакт при условии и очищает ранее выбранный:
   *
   * 1. Артефакт не был выбран
   *
   * @param {name} name - Название артефакта
   * @param {Array} stats - Основные характеристики артефакта
   */
  function selectedArt (name, stats) {
    if (store.user_art.art !== stats.name) {
      store.art_clear()
      store.user_art.art = name
      viewMain.value = stats
      hide.value.isHide = false
    }
  }

  function style (art) {
    let check = store.user_art.art

    return {
      active: art === check,
      Aleft: 'flower' === art && art === check,
      Aright: 'crown' === art && art === check,
    }
  }
</script>

<style lang="scss">
  .art-wrapper {
    max-width: 550px;
    background: rgba(106, 106, 106, 0.22);
    border-radius: $br_base;
    padding: $pd_big;
    text-align: center;

    & li {
      font-size: 24px;
      line-height: 29px;
      user-select: none;
    }

    &__title {
      font-size: $header_2;
      line-height: 58px;
      color: $color_black;
      text-shadow: 0px -12px 23px rgb(0 0 0 / 44%);
      margin-bottom: $mg_big;
    }

    &__title_white {
      background: linear-gradient(180deg, #f2e6bb 0%, rgba(82, 81, 81, 0) 100%);
      border-radius: 38px 38px 0px 0px;
      color: $color_white;
      font-size: $header_3;
      line-height: 39px;
      margin: $mg_vbig 0;
    }
  }
</style>
