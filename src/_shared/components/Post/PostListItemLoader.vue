<template>
  
  <PostListItem
      :img="post.Preview"
      :title="post.Title"
      :date="post.CreatedAt"
      :description="post.Description"
      :url="post.RedirectUrl"
      :key="post.Id"
      v-for="a in post"
  />
</template>

<script lang="ts" setup>

import { INewsResponse } from "@/scripts/models/News";
import PostListItem from "@/_shared/components/Post/PostListItem.vue";

const post: INewsResponse = {
  Title: 'Loading...',
  Preview: '/img/orig/liza.png',
  Description: 'Loading...',
  CreatedAt: 'Loading...'
}

</script>