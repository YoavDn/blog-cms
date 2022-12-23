<script setup lang="ts">
definePageMeta({
  middleware: 'authentication',
})
const route = useRoute()
const blogId = (route.params.title as string).split('-').pop()
console.log(blogId)
const { data: blog, refresh } = await useFetch(`/api/blog/${blogId}`)
onMounted(() => refresh())
</script>

<template>
  <div class="py-4">
    <main
      v-if="blog"
      class="blog-container bg-white rounded-md p-4 shadow-sm border border-gray-300 dark:border-neutral-700 dark:bg-black dark:text-neutral-200"
    >
      <img v-if="blog.image" :src="blog.image" alt="" />
      <h2 class="font-bold text-3xl">{{ blog.title }}</h2>
      <pre><code>
        hello 
        hello
      </code></pre>
    </main>
  </div>
</template>

<style lang="scss"></style>
