<template>
  <div class="post_item block_column card bg_100 minw_300 p0 gap-0 flex_1 overflow" @click="open">
    <img class="maxh_200 img_object-cover obj_top" :src="img" alt="news">
    
    <div class="block_column gap-10 p20">
      <p class="lineh_125p">{{ title }}</p>
      
      <div class="image_align mt_20">
        <span class="icon icon-clock"></span>
        <p class="text_body2 text_font-sub">{{ date_ }}</p>
      </div>
    </div>
  </div>
  
  
  <!-- Todo: Вынести в отдельный компонент -->
  <Modal :isOpen="isOpen" :close="close">
    <div class="post_item block_column card bg_100 maxw_500 p0 gap-0 p_x30">
      <img class="maxh_200 img_object-cover obj_top br-top_30 relative bottom_40" :src="img" alt="news">
      
      <div class="block_column gap-20 pb_20">
        <div class="image_align">
          <span class="icon icon-clock"></span>
          <p class="text_body2 text_font-sub">{{ date_ }}</p>
        </div>
        
        <p class="lineh_125p">{{ title }}</p>
        <p class="text_body2 text_font-sub text_gray_500">{{ description }}</p>
        
        <a :href="url" target="_blank">
          <button class="button button_svg button_outline-white fit-content mt_10">
            {{ $t('news.see') }}
            <span class="icon-arrow-right2 icon_gray_700"></span>
          </button>
        </a>
      </div>
    </div>
  </Modal>


</template>

<script lang="ts" setup>
import { useDateFormatter } from "@/use/useDateFormatter";
import { ref } from "vue";
import Modal from "@/_shared/components/Modal/Modal.vue";
import { useOpen } from "@/use";

const { img, id, title, date, description, url } = defineProps(['img', 'id', 'title', 'date', 'description', 'url'])
const date_ = ref(useDateFormatter(date))

const { isOpen, open, close } = useOpen()
</script>

<style lang="scss" scoped>
.post_item {
  
  @include min-desktop_1024 {
    max-width: 450px;
  }
  
  @include max-desktop_576 {
    max-width: unset;
  }
}
</style>