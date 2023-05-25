<template>
  <Header/>
  
  <div class="block_column align-center justify-start full-width full-height">
    
    <div class="container block_column align-center gap-0 full-width mt_80 p_x30">
      <div class="relative block_column align-center justify-center">
        <img src="/img/optimized/404.webp" class="maxw_700 minh_200 maxh_200 br_30" alt="tao">
        <h1 class="absolute text_primary_0 text_notFound">404</h1>
      </div>
      
      <p class="text_gray_400 mt_40 full-width text_center">{{ $t('notFound.jokeStart') }}</p>
      <h3 class="mt_10 full-width text_center">{{ $t('notFound.jokeEnd') }}</h3>
      
      <a href="/">
        <button class="button button_outline-white button_svg mt_30">
          {{ $t('notFound.button') }}
          <span class="icon-arrow-right2 icon_gray_700"></span>
        </button>
      </a>
    </div>
  
  </div>
  
  <ScrollBtn :line="'tableHeader'" :to="'header'"/>
</template>


<script setup lang='ts'>
import Header from '@/_shared/components/Header/Header.vue';
import ScrollBtn from "@/pages/weasel/components/ScrollBtn.vue";</script>
