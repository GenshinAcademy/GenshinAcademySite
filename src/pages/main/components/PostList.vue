<template>
  <div class="container card card_outline mt_80 p50 block_column">
    <div class="block_row justify-between full-width">
      <p id="news" class="text_title image_align">
        {{ $t("news.lastNews") }}
        <img src="/img/list.png" alt="lists">
      </p>
      <a class="image_align">
        <p class="text_font-sub">{{ $t("news.seeAll") }}</p>
        <span class="icon icon-arrow-right2 icon_gray_700"></span>
      </a>
    </div>
    <div class="post_list block_row relative overflow-x_scroll full-width pb_20 justify-start">
      
      <PostListItem
          :img="post.Preview"
          :title="post.Title"
          :date="post.CreatedAt"
          :description="post.Description"
          :url="post.RedirectUrl"
          :key="post.Id"
          v-for="post in postList.slice(0, limit)"
      />
    
    </div>
  </div>
</template>

<script lang="ts" setup>
import PostListItem from "@/pages/main/components/PostListItem.vue";
import { useNewsStore } from "@/stores/news";

const limit = 5

const store = useNewsStore()

store.useGetNews()

const postList = store.news;


</script>