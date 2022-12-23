<script setup lang="ts">
import { useRoute } from 'vue-router'

definePageMeta({
  middleware: 'authentication',
})

const route = useRoute()
// const { data: blog, refresh } = await useFetch(`/api/blog/${route.params.title}`)
// onMounted(() => refresh())
</script>

<template>
  <div class="pt-12 relative">
    <h2 contenteditable="true">Edited</h2>
  </div>
</template>

<style lang="scss"></style>
