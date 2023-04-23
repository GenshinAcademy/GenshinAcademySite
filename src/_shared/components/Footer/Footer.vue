<template>
  <footer class="block_row container p_y40 justify-between mt_20">
    <p class="text_note lineh_125p text_gray_500">© {{ t('footer.right') }} COGNOSPHERE. <br> {{ t('footer.object') }}.
    </p>
    
    <p class="text_note lineh_125p text_gray_500">
      {{ t('footer.ads') }}. <br>
      <a href="mailto:genshin.academy@gmail.com" class="text_note lineh_125p text_gray_600 user-select_unset">genshin.academy@gmail.com</a>
    </p>
    
    <div class="block_row gap-15">
      <a href="https://vk.com/genshinacademy" class="icon icon-vk" target="_blank">
        <span class="icon-vk path1"></span>
        <span class="icon-vk path2"></span>
      
      </a>
      <a href="https://t.me/genshin_academy" class="icon icon-telegram" target="_blank">
        <span class="icon-telegram path1"></span>
        <span class="icon-telegram path2"></span>
      </a>
      
      <a href="https://www.youtube.com/c/genshinacademy" class="icon icon-youtube" target="_blank">
        <span class="icon-youtube path1"></span>
        <span class="icon-youtube path2"></span>
      </a>
      
      <a href="https://www.hoyolab.com/accountCenter/postList?id=37721496" class="icon icon-hoyolab" target="_blank">
        <span class="icon-hoyolab path1"></span>
        <span class="icon-hoyolab path2"></span>
        <span class="icon-hoyolab path3"></span>
        <span class="icon-hoyolab path4"></span>
      </a>
    </div>
  </footer>
</template>

<script lang="ts" setup>

import { useI18n } from "vue-i18n";

const { t } = useI18n()
</script>


<style lang="scss" scoped>

@include max-desktop_768 {
  footer {
    flex-wrap: wrap;
    row-gap: 15px !important;
  }
}

</style>