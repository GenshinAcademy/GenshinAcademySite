<template>
  <Header divider="true"/>
  
  <div class="bg__image maxh_650">
    <img class="img_object-unset full-height" src="/img/main_bg.png" alt="bg">
  </div>
  <LizaBlock/>
  <ToolBlock/>
  <PostList/>
  <BoostyBlock/>
  
  <Footer/>
</template>

<script lang="ts" setup>
  import Header from "@/ferret/components/Header.vue";
  import Footer from "@/ferret/components/Footer.vue";
  import LizaBlock from "@/main/components/LizaBlock.vue";
  import ToolBlock from "@/main/components/ToolBlock.vue";
  import PostList from "@/main/components/PostList.vue";
  import BoostyBlock from "@/main/components/BoostyBlock.vue";
</script>

