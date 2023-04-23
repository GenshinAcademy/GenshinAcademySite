<template>
  <div class="relative container block_column">
    <div class="block_row gap-20">
      <div class="main__header relative block_column gap-30 z_2">
        <p class="text_bold text_big">Genshin Impact</p>
        
        <h1>{{ $t("main.mainTitle") }}</h1>
        
        <div class="main__button block_row justify-start">
          <button class="button button_svg" @click="useScroll('tools')">
            {{ $t("main.mainTool") }}
            <span class="icon-arrow-right2"></span>
          </button>
          
          <button class="button button_outline-white" @click="useScroll('news')">{{ $t("main.news") }}</button>
        </div>
      </div>
      
      <div class="relative block_column liza__image maxw_500">
        <img src="/img/liza.png" alt="liza">
      </div>
    </div>
    
    <div class="relative paimon__chat card block_row p_x50 p_y40">
      <img src="/img/paimon.png" alt="paimon">
      
      <div class="paimon__text relative br_30 card bg_200 p_x60">
        <p class="text_active">Genshin Academy</p>
        <p class="text_bold mt_10 lineh_140p">{{ $t("main.mainPaimonText") }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useScroll } from "@/use/useScroll";</script>

<style lang="scss" scoped>

.paimon__chat {
  @include max-desktop_1024 {
    flex-direction: column;
    padding: 50px 40px !important;
    
    & img {
      position: absolute;
      top: -30px;
      left: 30px;
      scale: 0.5;
    }
    
    & .paimon__text {
      padding: 30px !important;
      padding-top: 60px !important;
      border-radius: 0 30px 30px 30px !important;
    }
  }
}


.liza__image {
  @include max-desktop_1024 {
    min-height: 500px;
    
    & img {
      bottom: 0;
      right: 0;
      position: absolute;
      opacity: 0.85;
      scale: 0.9;
      //transform: ;
      transform: translate(0, 28px);
    }
  }
  
  @include max-desktop_768 {
    & img {
      left: -350px;
      right: unset;
      scale: 1;
      transform: translate(0, 0);
      filter: blur(2px);
    }
  }
  
  @include max-desktop_480 {
    & img {
      display: none;
    }
  }
}

@include max-desktop_480 {
  .container {
    margin: 0 !important;
  }
  h1 {
    font-size: 35px !important;
  }
  .main__header {
    padding: 0 30px;
  }
  
  .main__button {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px !important;
  }
  
  .liza__image {
    min-height: 400px;
  }
}

</style>