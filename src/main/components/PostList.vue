<template>
  <div class="container card card_outline mt_80 p50 block_column">
    <div class="block_row justify-between full-width">
      <p class="text_title image_align">
        Последние новости
        <img src="/img/list.png" alt="lists">
      </p>
      <a class="image_align">
        <p class="text_font-sub">Смотреть все</p>
        <span class="icon icon-arrow-right2 icon_gray_700"></span>
      </a>
    </div>
    <div class="post_list block_row relative overflow-x_scroll full-width pb_20 justify-start">
      
      <PostListItem :img="post.img" :title="post.title" :date="post.date" v-for="post in postList"/>
    
    </div>
  </div>
</template>

<script setup>
  import PostListItem from "@/main/components/PostListItem.vue";
  
  const postList = [
    {img: 'news.png', title: 'На нашем YouTube канале вышел большой гайд...', date: '2022.12.30'},
    {img: 'news.png', title: 'На нашем YouTube канале вышел большой гайд...', date: '2022.12.30'},
    {img: 'news.png', title: 'На нашем YouTube канале вышел большой гайд...', date: '2022.12.30'},
    {img: 'news.png', title: 'На нашем YouTube канале вышел большой гайд...', date: '2022.12.30'},
    {img: 'news.png', title: 'На нашем YouTube канале вышел большой гайд...', date: '2022.12.30'},
    {img: 'news.png', title: 'На нашем YouTube канале вышел большой гайд...', date: '2022.12.30'},
  ]
</script>