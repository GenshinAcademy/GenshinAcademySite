<template>
  <div class="art-wrapper">
    <div class="art-stats">
      <p class="art-wrapper__title">Выбор Артефакта</p>
      <ul class="art-stats__art-list">
        <li class="art-stats__art-item"
            :class="style(art.name)"
            v-for="art in list"
            @click="selectedArt(art.name, art.stat)">
          <img :src="`/${art.name}.svg`" :alt="art.name">
        </li>
      </ul>
      <MainStatSelect :view="viewMain" :selectArt="selectArt" ref="hide"/>
    </div>
    <SubStatSelect/>
  </div>
</template>


<script setup>
  import MainStatSelect from "@/components/MainStatSelect.vue"
  import SubStatSelect from '@/components/SubStatSelect.vue'
  import {useListsStore} from "@/stores/lists.js";
  import {useCharacterStore} from "@/stores/character.js";
  import {ref} from "vue";

  const list = useListsStore().art;
  const hero = useCharacterStore();

  const viewMain = ref(list[0].stat)
  const selectArt = ref(list[0].name)
  const hide = ref(null)


  function selectedArt(name, stat) {
    if (selectArt !== stat.name) {
      selectArt.value = name
      viewMain.value = stat
      hide.value.isHide = false
      hero.artClear()
    }
  }


  function style(art) {
    let check = selectArt.value

    return {
      'active': art === check,
      'Aleft': 'flower' === art && art === check,
      'Aright': 'crown' === art && art === check
    }
  }
</script>


<style lang="scss">
  .art-wrapper {
    max-width: 550px;
    background: rgba(106, 106, 106, 0.22);
    border-radius: $br_base;
    padding: $pd_big;
    text-align: center;

    & li {
      font-size: 24px;
      line-height: 29px;
      user-select: none;
    }

    &__title {
      font-size: $header_2;
      line-height: 58px;
      color: $color_black;
      text-shadow: 0px -12px 23px rgb(0 0 0 / 44%);
      margin-bottom: $mg_big;
    }

    &__title_white {
      background: linear-gradient(180deg, #F2E6BB 0%, rgba(82, 81, 81, 0) 100%);
      border-radius: 38px 38px 0px 0px;
      color: $color_white;
      font-size: $header_3;
      line-height: 39px;
      margin: $mg_vbig 0;
    }
  }
</style>