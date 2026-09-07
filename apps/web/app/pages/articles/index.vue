<script setup lang="ts">
import ArticleList from '@/components/articles/list/Index.vue'

const { data: articles } = await useFetch('/api/articles', {
  query: {
    limit: 5,
    offset: 0
  }
})
</script>

<template>
  <NuxtLayout>
    <ArticleList v-if="articles?.contents" :items="articles.contents"></ArticleList>
  </NuxtLayout>
</template>
