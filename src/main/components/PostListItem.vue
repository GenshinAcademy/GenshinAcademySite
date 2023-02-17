<template>
  <div class="post_item block_column card bg_200 maxw_300 p0 gap-0">
    <img class="maxh_200" :src="'/img/'+ img" alt="news">
    
    <div class="block_column gap-30 p20">
      <p class="lineh_125p">{{ title}}</p>
      <div class="image_align">
        <span class="icon icon-clock"></span>
        <p class="text_body2 text_font-sub">{{ date}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  
  const {img, title, date} = defineProps(['img', 'title', 'date'])

  

</script>