<script setup lang="ts">
import type { Article } from '#shared/types/Article'

type Props = {
  title: Article['title']
  createdAt: Article['createdAt']
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  createdAt: ''
})
</script>


<template>
  <li>
    <article>
      <header>
        <span>{{ props.createdAt }}</span>
        <h3>
          <a>{{ props.title }}</a>
        </h3>
      </header>
    </article>
  </li>
</template>