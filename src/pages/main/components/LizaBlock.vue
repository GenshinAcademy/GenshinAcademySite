<template>
  <div class="container block_column">
    <div class="block_row">
      <div class="block_column gap-30">
        <p class="text_bold text_big">Genshin Impact</p>
        
        <h1>{{ $t("main.mainTitle") }}</h1>
        
        <div class="block_row justify-start">
          <button class="button button_svg" @click="useScroll('tools')">
            {{ $t("main.mainTitle") }}
            <span class="icon-arrow-right2"></span>
          </button>
          
          <button class="button button_outline-white" @click="useScroll('news')">{{ $t("main.news") }}</button>
        </div>
      </div>
      
      <div class="block_column liza__image">
        <img src="/img//liza.png" alt="liza">
      </div>
    </div>
    <div class="card block_row p_x50 p_y40">
      <img src="/img/paimon.png" alt="paimon">
      
      <div class="paimon_chat card bg_200 p_x60">
        <p class="text_active">Genshin Academy</p>
        <p class="text_bold mt_10 lineh_140p">{{ $t("main.mainPaimonText") }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useScroll } from "@/use/useScroll";
</script>

<style scoped>
.paimon_chat {
  position: relative;
  border-radius: 30px 30px 30px 30px;
}
</style>