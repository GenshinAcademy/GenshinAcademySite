<template>
  <div class="art-sub-stats">
    <p class="art-wrapper__title art-wrapper__title_white">Доп. характеристики</p>
    <ul class="art-sub-stats__stats-list">
      <li
          v-for="stat in list.sub"
          :class="style(stat.value)"
          class="art-sub-stats__stats-item image_align"
          @click="selectedStat(stat.value)"
      >
        <span :class='`icon-${stat.value}`'></span>
        {{ stat.name }}
      </li>
    </ul>
  </div>
  <div class="art-button">
    <p class="art-sub-stats__btn image_align" @click="ferret">
      Оценить
      <span class="icon-arrow-right2"></span>
    </p>
  </div>
</template>

<script setup>
  import {useListsStore} from '@/stores/lists.js'
  import {useCharacterStore} from '@/stores/character.js'
  import {useHintStore} from "@/stores/hint.js";

  const store = useCharacterStore()
  const hero = useCharacterStore()
  const list = useListsStore()
  const hintStore = useHintStore()

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

  function selectedStat(stat) {
    if (store.user_art.main.value) {
      if (store.user_art.main.value !== stat) {
        if (!store.user_art.sub_stats.includes(stat)) {
          if (store.user_art.sub_stats.length < 4)
            store.user_art.sub_stats.push(stat)
          else
            hintStore.setHint('Всего характеристик не более 4')
        } else {
          store.user_art.sub_stats = store.user_art.sub_stats.filter((v) => {
            return v !== stat
          })
        }
      } else {
        hintStore.setHint('Основная и побочная характеристика повторяется')
      }
    } else {
      hintStore.setHint('Выберите артефакт и его основную характеристику')
    }
  }

  /**
   * Запускает оценку артефакта при условии:
   *
   * 1. Был выбрана основная характеристика
   * 2. Побочных характеристик не менее 1
   */
  function ferret() {
    if (store.user_art.main.hasOwnProperty('name'))
      if (store.user_art.sub_stats.length >= 1) {
        hero.ferret(store.user_art)
        scroll()
      } else hintStore.setHint('Доп. характеристик не менее 1')
    else hintStore.setHint('Выберите артефакт и его основную характеристику')
  }

  function style(stat) {
    let check = store.user_art.sub_stats

    return {
      active: check.includes(stat),
    }
  }

  /** Скролл к заголовку "Рузельтаты"*/
  async function scroll() {
    let title = document.getElementById('titleResult')
    title.scrollIntoView({behavior: 'smooth'})
  }

</script>

<style lang="scss">
  .art-sub-stats {

    &__stats-list {
      display: flex;
      flex-wrap: wrap;
      gap: $gp_vsmall;
      align-items: center;
      justify-content: space-around;
    }

    &__stats-item {
      min-width: 145px;
      min-height: 45px;
      word-break: break-word;
      flex: 1;
      padding: 8px 8px 8px 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: $br_base;

      &.active {
        background: $color_active;
        color: $color_black;

        & *, & *:before, & *:after {
          color: $color_black !important;
        }

      }
    }

    &__btn {
      max-width: fit-content;
      padding: $pd_base 30px;
      font-weight: $fw_strong;
      line-height: 18px;
      user-select: none;
      color: $color_black;
      background: $bg_white;
      border-radius: 30px;
    }

    &__btn:hover {
      opacity: 0.8;
    }
  }

  @include max-desktop_992 {
    .art-sub-stats__stats-item {
      flex: unset;
      width: 48%;
    }
  }

  @include max-desktop_576 {
    .art-sub-stats__stats-item {
      flex: 1;
    }
  }
</style>
