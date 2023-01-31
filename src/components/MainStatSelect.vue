<template>
  <ul class="btn__wrapper" @click.self="hide" v-if="!isHide"></ul>
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
  import {onMounted, ref, watch} from 'vue'
  import {clearObj, getKey, getValue} from "@/handler.js";

  const store = useCharacterStore()
  const props = defineProps(['view'])

  const selected_stat = ref({def: 'Выберите характеристику...'})
  const isHide = ref(true)

  defineExpose({isHide})

  /** Если есть артефакт у пользователя, выбирает его, предварительно очистив поле */
  onMounted(() => {
    if (Object.keys(store.user_art.main).length !== 0) {
      setSelect(store.user_art.main.name, store.user_art.main.value)
    }
  })

  /** Возвращает стандартное значение, когда props изменяется */
  watch(props, () => {
    if (props.view.length === 1) {
      selectedStat(props.view[0])
    } else {
      selected_stat.value = {def: 'Выберите характеристику...'}
    }
  }, {deep: true})

  /**
   * Выбирает основную характеристику при условии:
   *
   * 1. Характеристика не была выбрана
   * 2. Характеристика не совпадает с побочной, иначе заменяет побочную на основную
   *
   * @param {Object} stat - Характеристики артефакта
   */
  function selectedStat(stat) {
    if (store.user_art.main.name !== stat.name) {
      if (store.user_art.sub_stats.includes(stat.value))
        store.user_art.sub_stats.splice(stat.value, 1)
      setSelect(stat.value, stat.name)
      store.user_art.main = stat
      isHide.value = true
    } else
      hide()
  }

  /**
   * Присваивает новый вывод характеристики, предварительно очистив старые значения
   * */
  function setSelect(stat, value) {
    selected_stat.value = clearObj(selected_stat.value)
    selected_stat.value[stat] = value
  }

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
      position: relative;
      z-index: 100;
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

  .btn__wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 5;
  }

  @include max-desktop_375 {
    .art-wrapper li {
      font-size: 14px;
    }
  }
</style>