<template>
  <div class="art-wrapper maxw_400 br_10 block_column gap-10 justify-start">
    <p class="text_title text_start mb_20" id="titleInput">{{$t("weasel.request")}}</p>
    
    <div class="art-stats block_column relative card full-width br_20 bg_200 gap-0">
      <p class="text_body text_start mb_20">{{$t("weasel.selectArt")}}</p>
      
      <ul class="art-list card block_row full-width relative p0 p_x10 br_10 gap-10 z_5">
        <li
            class="art-item block_row text_body"
            :class="style(art.name)"
            v-for="art in list"
            @click="selectedArt(art)"
        >
          <img :src="`/img/${art.name}.svg`" :alt="art.name"/>
        </li>
      </ul>
      <MainStatSelect :view="viewMain" ref="hide"/>
    </div>
    <SubStatSelect/>
  </div>
</template>

<script lang="ts" setup>
  import MainStatSelect, { IMainStatSelect } from '@/pages/weasel/components/MainStatSelect.vue';
  import SubStatSelect from '@/pages/weasel/components/SubStatSelect.vue';
  import { useListsStore } from '@/stores/lists';
  import { useCharacterStore } from '@/stores/character';
  import { ref } from 'vue';
  import { Artifact, Stat } from '@/scripts/models/weaselAppraiser';
  
  const list: Artifact[] = useListsStore().artifacts;
  const store = useCharacterStore();
  
  const viewMain = ref<Stat[]>([store.chosen_art.main_stat]);
  const hide = ref<IMainStatSelect | null>(null);


  
  
  /**
   * Выбирает артефакт при условии и очищает ранее выбранный:
   *
   * 1. Артефакт не был выбран
   *
   * @param { name: string, stats: Stat[] } artifact
   */
  function selectedArt(artifact: Artifact) {
    if (store.chosen_art.slot !== artifact.name && hide.value) {
      store.art_clear();
      
      store.chosen_art.slot = artifact.name;
      viewMain.value = artifact.stats;
      
      hide.value.isHide = false;
    } else {
      if (hide.value) {
        hide.value.isHide = !hide.value.isHide;
      }
    }
  }
  
  /** Возвращение поля основного стата, к начальному виду */
  function style(artifactName: string) {
    return { active: artifactName === store.chosen_art.slot };
  }
</script>

<style lang="scss" scoped>
  .art-stats {
    padding-bottom: 90px !important;
  }
  
  .art-item {
    width: 55px;
    height: 65px;
    
    border-width: 0 0 5px 0;
    border-style: solid;
    border-color: transparent;
    
    cursor: pointer;
    
    &:hover {
      background: $gray_300;
      border-radius: 5px;
    }
    
    & img {
      width: 45px;
      height: 45px;
      object-fit: contain;
    }
    
    &.active {
      background: $gray_300;
      border-color: $color_active;
      border-radius: 5px;
    }
  }
  
  @include max-desktop_992 {
    .art-wrapper {
      max-width: 100% !important;
    }
  }
  
  @include max-desktop_992 {
    .art-list {
      justify-content: space-around;
    }
  }
  
  @include max-desktop_480 {
    .art-wrapper > div {
      padding: 30px 15px;
    }
  }
  
  @include max-desktop_375 {
    .art-wrapper li {
      font-size: 14px;
    }
  }
</style>
