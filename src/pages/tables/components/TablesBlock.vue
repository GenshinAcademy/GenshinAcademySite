<template>
  <div id="tableHeader" class="card container align-stretch p50">
    <div class="block_column full-width gap-20">
      <div class="block_column full-width gap-20" v-for="(conf, index ) in config">
        <p class="divider" v-if="index !== 0"></p>
        
        <div class="block_row justify-between table__title gap-30 align-center full-width">
          <div class="block_row table__title">
            <img class="table__image" :src="conf.icon_url" v-if="conf.icon_url" alt="icon"/>
            
            <div class="block_column gap-10">
              <p v-if="conf.title">{{ conf.title }}</p>
              <p class="text_gray_500 text_font-sub" v-if="conf.description">{{ conf.description }}</p>
            </div>
          </div>
          
          <a class="image_align text_vBold text_font-sub p5" :href="conf.redirect_url">
            <img src="/img/icon/other/document.svg" alt="document">
            Перейти
          </a>
        </div>
      </div>
    
    </div>
  </div>
</template>


<script setup lang='ts'>

import { useGetTables } from "@/use/useGetTables";

const config = useGetTables();

</script>


<style lang='scss' scoped>
@media (max-width: 576px) {
  .table__title {
    flex-direction: column;
    align-items: flex-start !important;
  }
  img.table__image {
    max-width: 50px;
    width: 100%;
  }
}
</style>