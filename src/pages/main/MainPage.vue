<template>
  <Header divider="true"/>
  
  <div class="bg__image maxh_650">
        <img class="img_object-unset full-height max_480" src="/img/main_bg.png" alt="bg">
    <img class="img_object-unset minh_550 min_480" src="/img/main_bg_375.png" alt="bg">
  </div>
  
  <LizaBlock/>
  <ToolBlock/>
  <PostList/>
  <BoostyBlock/>
  
  <Footer/>
</template>

<script lang="ts" setup>
import Header from "@/_shared/components/Header/Header.vue";
import Footer from "@/_shared/components/Footer/Footer.vue";
import LizaBlock from "@/pages/main/components/LizaBlock.vue";
import ToolBlock from "@/pages/main/components/ToolBlock.vue";
import PostList from "@/pages/main/components/PostList.vue";
import BoostyBlock from "@/pages/main/components/BoostyBlock.vue";</script>

