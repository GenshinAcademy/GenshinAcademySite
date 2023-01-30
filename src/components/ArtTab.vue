<template>
  <div class="art-wrapper">
    <p
      class="title"
      id="titleInput"
    >Вводные</p>
    <div class="art-stats">
      <p class="art-wrapper__title">Выберите артефакт</p>
      <ul class="art-stats__art-list">
        <li
          class="art-stats__art-item"
          :class="style(art.name)"
          v-for="art in list"
          @click="selectedArt(art)"
        >
          <img
            :src="`/img/${art.name}.svg`"
            :alt="art.name"
          />
        </li>
      </ul>
      <MainStatSelect
        :view="viewMain"
        ref="hide"
      />
    </div>
    <SubStatSelect />
  </div>
</template>

<script lang="ts" setup>
import MainStatSelect from '@/components/MainStatSelect.vue';
import SubStatSelect from '@/components/SubStatSelect.vue';
import { useListsStore } from '@/stores/lists.js';
import { useCharacterStore } from '@/stores/character.js';
import { ref } from 'vue';
import { Artifact, Circlet, Feather, Flower, Goblet, Sands, Stat } from '@/scripts/models/ferretAppraiser';

const list: Artifact[] = useListsStore().artifacts;
const store = useCharacterStore();
const viewMain = ref<Stat[]>([store.chosen_art.main_stat]);
const hide = ref(null);

/**
 * Выбирает артефакт при условии и очищает ранее выбранный:
 *
 * 1. Артефакт не был выбран
 *
 * @param {name} name - Название артефакта
 * @param {Array} stats - Основные характеристики артефакта
 */
function selectedArt(artifact: Artifact) {
  if (store.chosen_art.slot !== artifact.name && hide.value) {
    store.art_clear();
    store.chosen_art.slot = artifact.name;
    viewMain.value = artifact.stats;

    // TODO: Переписать
    // @ts-ignore
    hide.value.isHide = false;
  } else {
    // @ts-ignore
    hide.value.isHide = true;
  }
}

/** Возвращение поля основного стата, к начальному виду */

function style(artifactName: string) {
  return { active: artifactName === store.chosen_art.slot };
}
</script>

<style lang="scss">
.art-wrapper {
  max-width: 400px;
  border-radius: $br_base;
  text-align: center;

  &>div {
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
  .art-wrapper>div {
    padding: 30px 15px;
  }
}
</style>
