<template>
  <div class="art-sub-stats">
    <p class="art-wrapper__title art-wrapper__title_white">Дополнительные <br> характеристики</p>
    <ul class="art-sub-stats__stats-list">
      <li
          v-for="stat in list.sub"
          :class="style(stat.value)"
          class="art-sub-stats__stats-item"
          @click="selectedStat(stat.value)">
        {{ stat.name }}
      </li>
    </ul>
    <p class="art-sub-stats__btn">Рассчитать</p>
  </div>
</template>

<script setup>
  import {useListsStore} from '@/stores/lists.js';
  import {useCharacterStore} from "@/stores/character.js";

  const art = useCharacterStore().user_art;
  const list = useListsStore();


  function selectedStat(stat) {
    if (!art.sub_stats.includes(stat)) {
      if (art.sub_stats.length < 4)
        art.sub_stats.push(stat)
    } else
      art.sub_stats = art.sub_stats.filter((v) => {
        return v !== stat
      });
  }

  function style(stat) {
    let check = art.sub_stats

    return {
      'active': check.includes(stat)
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
        background: linear-gradient(93.56deg, rgba(118, 194, 117, 0.71) -5.42%, rgba(118, 194, 117, 0.76) 52.93%);
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