<script setup lang="ts">
import type { Article } from '#shared/types/Article'
import ListItem from '@/components/articles/list/Item.vue'

type Props = {
  items: Article[]
}

const props = defineProps<Props>()   

</script>

<template>
  <section>
    <ul class="list-style-none">
      <ListItem v-for="item in props.items" :key="item.id" :title="item.title" :createdAt="item.createdAt"></ListItem>
    </ul>
  </section>
</template>
