<template>
  <div class="post_item block_column card bg_200 maxw_300 p0 gap-0">
    <img class="maxh_200" :src="img" alt="news">
    
    <div class="block_column gap-10 p20">
      <p class="lineh_125p">{{ title }}</p>
      <p class="text_body2 text_font-sub text_gray_500">{{ description }}</p>
      
      <div class="image_align mt_20">
        <span class="icon icon-clock"></span>
        <p class="text_body2 text_font-sub">{{ date_ }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDateFormatter } from "@/use/useDateFormatter";
import { ref } from "vue";

const { img, id, title, date, description, url } = defineProps(['img', 'id', 'title', 'date', 'description', 'url'])
const date_ = ref(useDateFormatter(date))

</script>