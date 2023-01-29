<template>
  <ul :class="style(getValue(selected_stat))" class="art-stats__stats-list">
    <!-- Выбранная характеристика -->
    <li class="art-stats__selected-stat" @click="hide">
      <p class="image_align">
        <span :class='`icon-${getKey(selected_stat)}`'></span>
        {{ getValue(selected_stat) }}
      </p>
      <span class="icon-arrow-down2 arrow"></span>
    </li>
    <!-- Divider -->
    <li :class="style('')" class="divider p0 mg_15"></li>
    <!-- Список характеристик -->
    <li
        class="art-stats__stats-item image_align"
        v-for="stat in props.view"
        :class="style(stat.name)"
        @click="selectedStat(stat)"
    >
      <span :class='`icon-${stat.value}`'></span>
      {{ stat.name }}
    </li>
  </ul>
</template>

<script setup>
  import {useCharacterStore} from '@/stores/character.js'
  import {onMounted, ref, watch, watchEffect} from 'vue'
  import {clearObj, getKey, getValue} from "@/handler.js";

  const store = useCharacterStore()
  const props = defineProps(['view'])

  const isHide = ref(true)

  defineExpose({isHide})

  let selected_stat = ref({def: 'Выберите характеристику...'})

  watchEffect(() => {
    if (props.view.length === 1) {
      selectedStat(props.view[0])
    }
  })

  /**
   * Выбирает основную характеристику при условии:
   *
   * 1. Характеристика не была выбрана
   * 2. Характеристика не совпадает с побочной
   *
   * @param {Object} stat - Характеристики артефакта
   */
  function selectedStat(stat) {
    if (store.user_art.main.name !== stat.name) {
      if (!store.user_art.sub_stats.includes(stat.value)) {
        setSelect(stat.value, stat.name)
        store.user_art.main = stat
        isHide.value = true
      }
    }
  }

  /**
   * Присваивает новый вывод характеристики, предварительно очистив старые значения
   * */
  function setSelect(stat, value) {
    selected_stat.value = clearObj(selected_stat.value)
    selected_stat.value[stat] = value
  }

  /** Если есть артефакт у пользователя, выбирает его, предварительно очистив поле */
  onMounted(() => {
    if (Object.keys(store.user_art.main).length !== 0) {
      setSelect(store.user_art.main.name, store.user_art.main.value)
    }
  })

  /** Возвращает стандартное значение, когда props изменяется */
  watch(props, () => {
    selected_stat.value = {def: 'Выберите характеристику...'}
  }, {deep: true})

  /** Скрывает/открывает окно выбора характеристик */
  function hide() {
    isHide.value = !isHide.value
  }

  function style(stat) {
    let check = store.user_art.main.name
    let def = 'Выберите характеристику...'

    return {
      active: stat === check,
      hide: isHide.value,
      divider_hide: isHide.value,
      open: !isHide.value,
      def: def === stat,
      piro: 'Бонус Пиро урона' === stat && stat === check,
      gidro: 'Бонус Гидро урона' === stat && stat === check,
      dendro: 'Бонус Дендро урона' === stat && stat === check,
      electro: 'Бонус Электро урона' === stat && stat === check,
      anemo: 'Бонус Анемо урона' === stat && stat === check,
      crio: 'Бонус Крио урона' === stat && stat === check,
      geo: 'Бонус Гео урона' === stat && stat === check,
    }
  }
</script>

<style lang="scss">
  .art-stats {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-bottom: 90px !important;

    &__art-list {
      width: 100%;
      display: flex;
      padding: 0 10px;
      background: $bg_base_dark;
      border-radius: $br_base;
    }

    &__art-item {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 4px;

      width: 55px;
      height: 65px;

      border-width: 0 0 5px 0;
      border-style: solid;
      border-color: #fdfce600;

      & img {
        width: 45px;
        height: 45px;
        object-fit: contain;
      }

      &.active {
        background: $bg_light_1;
        border-color: $color_active;
        border-radius: 5px;
      }
    }

    &__stats-list {
      //padding: 0 15px;
      width: calc(100% - 60px);
      position: absolute;
      top: 140px;
      background: $bg_base_dark;
      border-radius: $br_base;
      z-index: 100;
      text-align: start;
      border: 1px solid #fff0;

      &.def > li p {
        color: rgba(255, 255, 255, 0.3);;
      }

      &.open {
        border: 1px solid #F6D79D;

        & > li {
          padding: 10px;
          margin: 0 8px 4px 8px;
          color: $color_white;
        }

        & .arrow {
          transform: rotate(-180deg);
        }
      }

      &.active li:first-child * {
        &, &:after, {
          color: $color_active !important;
        }
      }
    }

    &__selected-stat {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 18px !important;
      margin: 0 !important;
    }


    &__stats-item {
      padding: 10px;
      cursor: pointer;


      &.hide {
        display: none;
      }

      &.active {
        background: $bg_light_1;
        border-radius: 6px;


        &.piro {
          background: #cf8372;
          border-color: #963d31;
        }

        &.gidro {
          background: #69a6ba;
          border-color: #186384;
        }

        &.dendro {
          background: #71c454;
          border-color: #176d2a;
        }

        &.electro {
          background: #ac7cca;
          border-color: #7137bc;
        }

        &.anemo {
          background: #79db8f;
          border-color: #419253;
        }

        &.crio {
          background: #7eefdb;
          border-color: #5ba89a;
        }

        &.geo {
          background: #e3d09e;
          border-color: #a59771;
        }
      }
    }

    @include max-desktop_992 {
      .art-stats__art-list {
        justify-content: space-around;
      }
    }

    @include max-desktop_480 {
      .art-stats__stats-list {
        width: calc(100% - 30px);
      }
      .art-stats__art-item img {
        width: 39px;
        height: 39px;
      }
    }
  }
</style>
