<template>
  <div class="art-wrapper">
    <p class="title">Вводные</p>
    <div class="art-stats">
      <p class="art-wrapper__title">Выберите артефакт</p>
      <ul class="art-stats__art-list">
        <li
            class="art-stats__art-item"
            :class="style(art.name)"
            v-for="art in list"
            @click="selectedArt(art.name, art.stat)"
        >
          <img :src="`/img/${art.name}.svg`" :alt="art.name"/>
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
import {useListsStore} from '@/stores/lists.js'
import {useCharacterStore} from '@/stores/character.js'
import {ref} from 'vue'

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
function selectedArt(name, stats) {
  if (store.user_art.art !== stats.name) {
    store.art_clear()
    store.user_art.art = name
    viewMain.value = stats
    hide.value.isHide = false
  }
}

/**
 * Возвращение поля основного стата, к начальному виду
 */

function style(art) {
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
  max-width: 395px;
  border-radius: $br_base;
  text-align: center;

  & > div {
    margin-top: 10px;
    padding: 30px;
    background: $bg_base;
    border-radius: $br_normal;
    text-align: start;
  }

  & li {
    font-size: 16px;
    user-select: none;
  }

  &__title {
    font-size: $text_base;
    text-shadow: 0px -12px 23px rgb(0 0 0 / 44%);
    margin-bottom: $mg_big;
  }
}

@include max-desktop_992 {
  .art-wrapper {
    max-width: 100%;
  }
}

@include max-desktop_480 {
  .art-wrapper > div {
    padding: 30px 15px;
  }
}
</style>
