<template>
  <div class="art-sub-stats">
    <p class="art-wrapper__title art-wrapper__title_white">
      Дополнительные <br/>
      характеристики
    </p>
    <ul class="art-sub-stats__stats-list">
      <li
          v-for="stat in list.sub"
          :class="style(stat.value)"
          class="art-sub-stats__stats-item"
          @click="selectedStat(stat.value)"
      >
        {{ stat.name }}
      </li>
    </ul>
    <p class="art-sub-stats__btn" @click="ferret">Рассчитать</p>
  </div>
</template>

<script setup>
  import { useListsStore } from '@/stores/lists.js'
  import { useCharacterStore } from '@/stores/character.js'

  const store = useCharacterStore()
  const hero = useCharacterStore()
  const list = useListsStore()

  /**
   * Выбор sub_stat, при условии:
   *
   * 1. Характеристика основного и побочного не повторяется
   * 2. Характеристика не существует в массиве
   * 3. Характеристик не более 4 в массиве
   *
   * @param {String} stat - Пример: "DEF_P"
   */

  function selectedStat (stat) {
    if (!store.user_art.main.value.includes(stat)) {
      if (!store.user_art.sub_stats.includes(stat)) {
        if (store.user_art.sub_stats.length < 4)
          store.user_art.sub_stats.push(stat)
      } else {
        store.user_art.sub_stats = store.user_art.sub_stats.filter((v) => {
          return v !== stat
        })
      }
    }
  }

  /**
   * Запускает оценку артефакта при условии:
   *
   * 1. Был выбрана основная характеристика
   * 2. Побочных характеристик не менее 1
   */
  function ferret () {
    if (store.user_art.main.hasOwnProperty('name'))
      if (store.user_art.sub_stats.length >= 1)
        hero.ferret(store.user_art)
  }

  function style (stat) {
    let check = store.user_art.sub_stats

    return {
      active: check.includes(stat),
    }
  }
</script>

<style lang="scss">
  .art-sub-stats {
    background: $bg_base;
    box-shadow: 0px 0px 22px rgb(0 0 0 / 71%);
    border-radius: $br_base;
    padding-bottom: $pd_base;

    &__stats-list {
      display: flex;
      flex-wrap: wrap;
      gap: $gp_vsmall;
      align-items: center;
      justify-content: space-around;
      padding: $pd_base;
    }

    &__stats-item {
      width: 190px;
      padding: $pd_vsmall;

      &.active {
        background: linear-gradient(
                93.56deg,
                rgba(118, 194, 117, 0.71) -5.42%,
                rgba(118, 194, 117, 0.76) 52.93%
        );
        border-width: 0 0 0 3px;
        border-style: solid;
        border-color: $bc_active_green;
        border-radius: 12px;
      }
    }

    &__btn {
      margin: $mg_big 10%;
      padding: $pd_base;
      font-weight: $fw_strong;
      font-size: $header_3;
      line-height: 29px;
      user-select: none;
      background: $bg_base_dark;
      border-radius: $br_base;
    }

    &__btn:hover {
      opacity: 0.8;
    }
  }
</style>
