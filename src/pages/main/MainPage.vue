<template>
  <Header divider="true"/>
  
  <div class="bg__image maxh_650">
    <img class="img_object-unset full-height" src="/img/main_bg.png" alt="bg">
  </div>
  
  <LizaBlock/>
  <ToolBlock/>
  <PostList/>
  <BoostyBlock/>
  
  <ScrollBtn :line="'tools'" :to="'header'"/>
  
  <Footer/>
</template>

<script lang="ts" setup>
import Header from "@/_shared/components/Header/Header.vue";
import Footer from "@/_shared/components/Footer/Footer.vue";
import LizaBlock from "@/pages/main/components/LizaBlock.vue";
import ToolBlock from "@/pages/main/components/ToolBlock.vue";
import PostList from "@/pages/main/components/PostList.vue";
import BoostyBlock from "@/pages/main/components/BoostyBlock.vue";
import ScrollBtn from "@/pages/weasel/components/ScrollBtn.vue";
import { usePageTitle } from "@/use/usePageTitle";

usePageTitle('main')
</script>

