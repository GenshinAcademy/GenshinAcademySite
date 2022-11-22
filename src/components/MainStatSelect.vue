<template>
  <ul class="art-stats__stats-list">
    <li class="art-stats__stats-item"
        v-for="stat in props.view"
        :class="style(stat.name)"
        @click="selectedStat(stat)">
      {{ stat.name }}
    </li>
    <li @click="hide" v-if="!isHide">Скрыть</li>
    <li @click="hide" v-if="isHide">Показать</li>
  </ul>
</template>

<script setup>
  import {useCharacterStore} from "@/stores/character.js";
  import {ref} from "vue";

  const props = defineProps(['view', 'selectArt'])
  const art = useCharacterStore().user_art

  const isHide = ref(false);

  defineExpose({isHide})

  function selectedStat(stat) {
    if (art.main.name !== stat.name) {
      art.main = stat
      art.main.art = props.selectArt
    }
  }


  function hide() {
    isHide.value = !isHide.value
  }


  function style(stat) {
    let check = art.main.name

    return {
      'active': stat === check,
      'hide': stat !== check && isHide.value,
      'piro': 'Бонус Пиро урона' === stat && stat === check,
      'gidro': 'Бонус Гидро урона' === stat && stat === check,
      'dendro': 'Бонус Дендро урона' === stat && stat === check,
      'electro': 'Бонус Электро урона' === stat && stat === check,
      'anemo': 'Бонус Анемо урона' === stat && stat === check,
      'crio': 'Бонус Крио урона' === stat && stat === check,
      'geo': 'Бонус Гео урона' === stat && stat === check,
    }
  }
</script>


<style lang="scss">
  .art-stats {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 120px;

    &__art-list {
      display: flex;
      background: $bg_base_dark;
      border-radius: $br_big;

    }

    &__art-item {
      border-width: 0px 5px;
      border-style: solid;
      border-color: #fdfce600;

      &.active {
        background: rgba(132, 128, 121, 0.18);
        border-color: #FDFCE6;
        border-radius: 20px 20px 19px 20px;

        &.Aleft {
          border-radius: 59px 20px 19px 59px;
        }

        &.Aright {
          border-radius: 19px 59px 59px 20px;
        }
      }
    }

    &__stats-list {
      padding: $pd_small;
      width: 370px;
      position: absolute;
      top: 240px;
      background: rgba(31, 34, 41, 0.82);
      box-shadow: 0px 0px 22px rgb(0 0 0 / 71%);
      border-radius: 0 0 38px 38px;
      z-index: 100;


      & li:last-child {
        font-size: $text_big;
        text-decoration: underline;
        text-align: center;
        color: #ffffffa6;
        cursor: pointer;
      }
    }

    &__stats-item {
      padding: $pd_vsmall;
      cursor: pointer;

      &.hide {
        display: none;
      }

      &.active {
        background: rgba(202, 207, 173, 0.57);
        border-width: 0px 3px;
        border-style: solid;
        border-color: #FDFCE6;
        border-radius: 12px;

        &.piro {
          background: #CF8372;
          border-color: #963D31;
        }

        &.gidro {
          background: #69A6BA;
          border-color: #186384;
        }

        &.dendro {
          background: #71C454;
          border-color: #176D2A;
        }

        &.electro {
          background: #AC7CCA;
          border-color: #7137BC;
        }

        &.anemo {
          background: #79DB8F;
          border-color: #419253;
        }

        &.crio {
          background: #7EEFDB;
          border-color: #5BA89A;
        }

        &.geo {
          background: #E3D09E;
          border-color: #A59771;
        }
      }
    }

  }
</style>