<template>
  <div class="post__block container card card_outline mt_80 p40 block_column" v-if="postList.length !== 0">
    <div class="block_row justify-between full-width">
      <p id="news" class="text_title">
        {{ $t("news.lastNews") }}
        <span class="relative">
          <img class="absolute bottom-5" src="/img/list.png" alt="lists">
        </span>
      </p>
      <a class="image_align max_576">
        <a href="/news" class="text_font-sub">{{ $t("news.seeAll") }}</a>
        <span class="icon icon-arrow-right2 icon_gray_700"></span>
      </a>
    </div>
    <div class="post_list block_row relative overflow-x_auto full-width justify-start minh_400 p_x20">
      
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
    
    <a class="image_align min_576 full-width text_start">
      <a href="/news" class="text_font-sub">{{ $t("news.seeAll") }}</a>
      <span class="icon icon-arrow-right2 icon_gray_700"></span>
    </a>
  </div>
</template>

<script lang="ts" setup>
import PostListItem from "@/_shared/components/Post/PostListItem.vue";
import { useNewsStore } from "@/stores/news";
import { ref, watchEffect } from "vue";
import { INewsResponse } from "@/scripts/models/News";

const limit = 5

const store = useNewsStore()

store.useGetNews(limit);

const postList = ref<INewsResponse[]>([]);

watchEffect(() => {
  postList.value = store.news
});
</script>


<style lang="scss" scoped>
.post__block {
  @include max-desktop_480 {
    margin: 0 !important;
    margin-top: 80px !important;
    padding: 40px 30px !important;
  }
}

.bottom-5 {
  bottom: -5px;
}
</style>