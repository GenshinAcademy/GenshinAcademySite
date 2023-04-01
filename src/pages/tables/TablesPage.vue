<template>
  <Header/>
  
  <SubHeader/>
  
  <div class="block_column align-center justify-start full-width full-height">
  
    <div class="bg__image top_95 maxh_400">
      <img class="full-height" src="/img/bg_art.png" alt="bg">
    </div>
  
    <div class="block_column align-center gap-20 full-width">
      <TablesBlock/>
      <TablesDevBlock/>
    </div>

  </div>
  
  <ScrollBtn :line="'tableHeader'" :to="'header'"/>
  
  <Footer/>
</template>


<script setup lang='ts'>
import Header from '@/_shared/components/Header/Header.vue';
import ScrollBtn from "@/pages/weasel/components/ScrollBtn.vue";
import Footer from "@/_shared/components/Footer/Footer.vue";
import SubHeader from "@/pages/tables/components/SubHeader.vue";
import TablesBlock from "@/pages/tables/components/TablesBlock.vue";
import TablesDevBlock from "@/pages/tables/components/TablesDevBlock.vue";</script>


<style>
@media (max-width: 576px) {
  .table__title {
    flex-direction: column;
    align-items: flex-start !important;
  }
}
</style>