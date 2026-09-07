<script setup lang="ts">
import NavBar from '@/components/common/NavBar.vue'
import Footer from '~/components/common/Footer.vue'
</script>

<template>
  <NavBar />
  <main class="container mx-auto max-w-[894px]">
    <slot />
  </main>
  <Footer />
</template>
