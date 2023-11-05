<template>
  <div class="post__block container card card_outline mt_80 p40 block_column">
    <div class="block_row justify-between full-width">
      <p id="news" class="text_title">
        {{ $t("news.lastNews") }}
        <span class="relative">
          <img class="absolute bottom-5" src="/img/optimized/list.webp" alt="lists">
        </span>
      </p>
      <a class="image_align max_576">
        <a href="/news" class="text_font-sub">{{ $t("news.seeAll") }}</a>
        <span class="icon icon-arrow-right2 icon_gray_700"></span>
      </a>
    </div>
    
    <div id="post-list-wrapper" class="post_list block_row relative overflow-x_auto full-width justify-start minh_400 p_x20" v-if="store.news.length">
      <PostListItem
          :img="post.Preview"
          :title="post.Title"
          :date="post.CreatedAt"
          :description="post.Description"
          :url="post.RedirectUrl"
          :key="post.Id"
          v-for="post in store.news.slice(0, limit)"
      />
    </div>
    
    <div id="post-list-wrapper" class="post_list block_row relative overflow-x_auto full-width justify-start minh_400 p_x20" v-if="!store.news.length">
      <PostListItemLoader />
    </div>
    
    <a href="/news" class="image_align min_576 full-width text_start">
      <a class="text_font-sub">{{ $t("news.seeAll") }}</a>
      <span class="icon icon-arrow-right2 icon_gray_700"></span>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { useNewsStore } from "@/stores/news";
import { onMounted } from "vue";
import PostListItem from "@/_shared/components/Post/PostListItem.vue";
import PostListItemLoader from "@/_shared/components/Post/PostListItemLoader.vue";

const limit = 5

const store = useNewsStore()

onMounted(() => {
  let postListWrapper = document.getElementById('post-list-wrapper')
  
  const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !store.news.length) store.useGetNews(limit)
      }
  )
  
  observer.observe(postListWrapper as HTMLElement)
})

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