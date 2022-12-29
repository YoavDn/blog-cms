<script setup lang="ts">
import 'highlight.js/styles/github-dark.css'
definePageMeta({
  middleware: 'authentication',
})
const route = useRoute()
const blogId = (route.params.title as string).split('-').pop()

const { data: blog, refresh } = await useFetch(`/api/blog/${blogId}`)
onMounted(() => refresh())

//highlight js logic
</script>

<template>
  <div class="py-4">
    <main
      v-if="blog"
      v-html="blog.content"
      class="blog-container prose prose-neutral dark:prose-invert p-4 shadow-sm dark:text-neutral-200"
    ></main>
  </div>
</template>

<style lang="scss"></style>
