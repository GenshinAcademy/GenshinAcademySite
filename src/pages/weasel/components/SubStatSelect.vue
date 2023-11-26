<template>
  <div class="art-sub-stats card card_bg full-width br_20 bg_200">
    <p class="text_body text_start mb_20">{{ $t("weasel.subStats") }}</p>

    <ul class="block_wrap gap-10 justify-around">
      <li
        v-for="stat in list.subStats"
        class="stats-item image_align"
        :class="style(stat.value)"
        @click="() => selectedStat(stat.value)"
        @contextmenu.prevent="() => clearStats(stat.value)"
      >
        <span :class='`icon-${stat.value}`'></span>
        {{ $t(stat.value) }}
      </li>
    </ul>
  </div>

  <div class="art-button card full-width br_20 bg_200">
    <a
      href="#titleResult"
      class="image_align button fit-content p_y20"
      :class="styleBtn()"
      @click="weasel"
    >
      {{ $t("weasel.appraise") }}
      <span class="icon-arrow-right2"></span>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { useListsStore } from '@/stores/lists';
import { useCharacterStore } from '@/stores/character';
import { event } from 'vue-gtag';

const store = useCharacterStore();
const hero = useCharacterStore();
const list = useListsStore();

/**
 * Выбор sub_stat, при условии:
 *
 * 1. Выбран ли артефакт.
 * 2. Основная и побочная характеристика не повторяется
 * 3. Характеристика не существует в массиве
 * 4. Всего характеристик не более 4 в массиве
 *
 * @param {String} stat - Пример: "DEF_P"
 */

function selectedStat(stat: string) {
  if (store.chosen_art.main_stat.value)
    if (store.chosen_art.main_stat.value !== stat)
      if (!store.chosen_art.sub_stats.includes(stat)) {
        if (store.chosen_art.sub_stats.length < 4)
          store.chosen_art.sub_stats.push(stat);
      } else {
        store.chosen_art.sub_stats = store.chosen_art.sub_stats.filter((v) => {
          return v !== stat;
        });
      }
}

/**
 * Сброс всех sub_stats и выбор текущего, при условии:
 *
 * 1. Выбран ли артефакт.
 * 2. Основная и побочная характеристика не повторяется
 *
 * @param {String} stat - Пример: "DEF_P"
 */
function clearStats(stat: string) {
  if (store.chosen_art.main_stat.value) {
    if (store.chosen_art.main_stat.value !== stat)
      store.chosen_art.sub_stats = [stat];
  }
}

/**
 * Запускает оценку артефакта при условии:
 *
 * 1. Был выбрана основная характеристика
 * 2. Побочных характеристик не менее 1
 */
async function weasel() {
  if (store.chosen_art.main_stat.hasOwnProperty('name'))
    if (store.chosen_art.sub_stats.length >= 1) {
      /** Если список сортировки пуст, значит запуск происходит первый раз */
      if (!hero.sortedCharactersStats.length) {
        await hero.get_hero();
      }
      
      hero.weasel(store.chosen_art);

      // Analytic
      event("weasel_appraise", { event_category: "weasel", event_label: "Weasel Appraise Clicked", event_value: 1 });
      // scroll();
    }
}

/** Скролл к заголовку "Рузельтаты"*/
async function scroll() {
  let title = document.getElementById('titleResult');
  if (title) {
    title.scrollIntoView({ behavior: 'smooth' });
  }
}

function style(stat: string) {
  let check = store.chosen_art.sub_stats;

  return {
    active: check.includes(stat),
    disable_text: !store.chosen_art.main_stat.value || store.chosen_art.main_stat.value === stat || store.chosen_art.sub_stats.length >= 4,
  };
}

function styleBtn() {
  return {
    disable_bg_2: store.chosen_art.sub_stats.length < 1 || !store.chosen_art.main_stat.value,
  };
}

</script>

<style lang="scss" scoped>
.stats-item {
  flex: 1;
  min-width: 145px;
  min-height: 45px;
  word-break: break-word;
  padding: 8px 8px 8px 12px;
  border: 1px solid $gray_300;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: $gray_300;
  }

  @include min-desktop_576 {
    &.disable_text:hover {
      cursor: unset !important;
      background: transparent !important;
    }
  }

  &.active {
    background: $color_active;
    color: $gray_0;


    &:hover {
      cursor: pointer !important;
      background: $color_active !important;
      color: $gray_0 !important;
    }

    & *,
    & *:before,
    & *:after {
      color: $gray_0 !important;
    }

  }
}

.art-button {
  & .button {
    cursor: pointer;
  }

  & .button.disable_bg_2:hover {
    cursor: default !important;
    opacity: unset !important;
  }
}

@include max-desktop_992 {
  .stats-item {
    flex: unset;
    width: 48%;
  }
}

@include max-desktop_576 {
  .stats-item {
    flex: 1;
  }
}</style>