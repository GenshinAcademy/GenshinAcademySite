<template>
  <Header/>
  
  <div class="block_column align-center justify-start full-width full-height">
    
    <div class="bg__image top_95 maxh_400">
      <img class="full-height" src="/img/optimized/bg_art.webp" alt="bg">
    </div>
    
    <div class="full-width block_column align-center gap-20 full-width mt_80 p_x30">
      <h1 class="maxw_container">{{ $t('news.allNews') }}</h1>
      <div class="maxw_container block_wrap full-width justify-start gap-30">
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
  
  </div>
  
  <ScrollBtn :line="'tableHeader'" :to="'header'"/>
  
  <Footer/>
</template>

<script setup lang='ts'>
import PostListItem from "@/_shared/components/Post/PostListItem.vue";
import Header from "@/_shared/components/Header/Header.vue";
import Footer from "@/_shared/components/Footer/Footer.vue";
import ScrollBtn from "@/pages/weasel/components/ScrollBtn.vue";
import { useNewsStore } from "@/stores/news";
import { ref, watchEffect } from "vue";
import { INewsResponse } from "@/scripts/models/News";

const limit = 5

const store = useNewsStore()

store.useGetNews();

const postList = ref<INewsResponse[]>([]);

watchEffect(() => {
  postList.value = store.news
});

</script>