<template>
  <ul class="btn__wrapper" @click.self="hide" v-if="!isHide"></ul>
  
  <ul :class="style(getKey(selected_stat))" class="stats-list br_10 z_4">
    
    <!-- Выбранная характеристика -->
    <li class="selected-stat m0 pointer" @click="hide">
      <p class="image_align">
        <span :class='`icon-${getKey(selected_stat)} icon_16`'></span>
        {{ $t(getValue(selected_stat)) }}
      </p>
      
      <ArrowDown :class="isHide ? '' : 'arrow_top'"/>
    </li>
    
    <!-- Divider -->
    <li :class="style('')" class="divider w_auto m10 mt_0"></li>
    
    <!-- Список характеристик -->
    <li
        class="stats-item image_align pointer mb_5"
        v-for="stat in props.view"
        :class="style(stat.name)"
        @click="selectedStat(stat)"
        v-if="!isHide"
    >
      <span :class='`icon-${stat.value} icon_16`'></span>
      {{ $t(stat.value) }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import ArrowDown from '/public/img/icon/arrow/chevron-down.svg?component'
import { useCharacterStore } from '@/stores/character';
import { onMounted, ref, watch } from 'vue';
import { clearObj, getKey, getValue } from "@/handler";
import { Stat } from '@/scripts/models/weaselAppraiser';

export interface IMainStatSelect {
  isHide: boolean;
}

interface ISelectedStat {
  [key: string]: string
}

const store = useCharacterStore();
const props = defineProps(['view']);


const def = ref<string>('defaultValue');

const selected_stat = ref<ISelectedStat>({ def: def.value });
const isHide = ref(true);

defineExpose({ isHide });

/** Если есть артефакт у пользователя, выбирает его, предварительно очистив поле */
onMounted(() => {
  if (Object.keys(store.chosen_art.main_stat).length !== 0) {
    setSelect(store.chosen_art.main_stat);
  }
});

/** Возвращает стандартное значение, когда props изменяется */
watch(props, () => {
  if (props.view.length === 1) {
    selectedStat(props.view[0]);
  } else {
    selected_stat.value = { def: def.value };
  }
}, { deep: true });

/**
 * Выбирает основную характеристику при условии:
 *
 * 1. Характеристика не была выбрана
 * 2. Характеристика не совпадает с побочной, иначе заменяет побочную на основную
 *
 * @param {Object} stat - Характеристики артефакта
 */
function selectedStat(stat: Stat) {
  if (store.chosen_art.main_stat.name !== stat.name) {
    if (store.chosen_art.sub_stats.includes(stat.value))
      store.chosen_art.sub_stats = store.chosen_art.sub_stats.filter((i) => i !== stat.value) as []
    
    setSelect(stat);
    store.chosen_art.main_stat = stat;
    isHide.value = true;
  } else {
    hide()
  }
}

/**
 * Присваивает новый вывод характеристики, предварительно очистив старые значения
 * */
function setSelect(stat: Stat) {
  selected_stat.value = clearObj(selected_stat.value);
  selected_stat.value[stat.value] = stat.value;
}

/** Скрывает/открывает окно выбора характеристик */
function hide() {
  isHide.value = !isHide.value;
}

function style(stat: string) {
  let checkValue = store.chosen_art.main_stat.value;
  let checkName = store.chosen_art.main_stat.name;
  
  return {
    active: stat === checkValue || stat === checkName,
    divider_hide: isHide.value,
    open: !isHide.value,
    def: def.value === stat,
  };
}
</script>


<style lang="scss" scoped>
.art-stats {
  padding-bottom: 90px !important;
}

.selected-stat {
  @extend .block_row;
  justify-content: space-between;
  
  padding: 15px 18px !important;
  border-radius: 10px;
  
  &:hover {
    background: $gray_300;
  }
}

.stats-item {
  padding: 10px;
  border-radius: 4px;
  
  &.hide {
    display: none;
  }
  
  &:hover {
    background: $gray_300;
  }
  
  //&.active {
  //  background: $gray_300;
  //  border-bottom: 2px solid $color_active;
  //  border-radius: 6px;
  //}
  
  &.active {
    &, & * {
      color: $color_active !important;
    }
  }
}

.stats-list {
  width: calc(100% - 60px);
  position: absolute;
  top: 140px;
  background: $gray_100;
  
  &.open {
    border: 1px solid #F6D79D;
    
    & > li {
      padding: 10px;
      margin: 0 8px 4px 8px;
      color: $gray_700;
    }
    
    & .arrow {
      transform: rotate(-180deg);
    }
  }
  
  &.active > li:first-child * {
    &, &:after, {
      color: $color_active !important;
    }
  }
}

.btn__wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 4;
}

@include max-desktop_480 {
  .stats-list {
    width: calc(100% - 30px);
  }
  .art-item img {
    width: 39px;
    height: 39px;
  }
}
</style>