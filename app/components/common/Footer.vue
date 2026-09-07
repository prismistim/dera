<script setup lang="ts">
import { format } from 'date-fns'
const currentYear = format(new Date(), 'y')
</script>

<template>
  <footer class="p-4">
    <span>©︎ {{ currentYear }} oriori</span>
  </footer>
</template>
