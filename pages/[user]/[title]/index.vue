<script setup lang="ts">
import { dateAgo, editedAt } from '~~/utils/date'
import hljs from 'highlight.js'
import 'highlight.js/styles/nord.css'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

definePageMeta({
  middleware: ['auth'],
})
dayjs.extend(relativeTime)

const blogTitle = useBlogTitle()
const route = useRoute()
const blogId = (route.params.title as string).split('-').pop()

const { data: blog } = await useFetch(`/api/blog/${blogId}`)
blogTitle.value = blog.value!.title

const edited = computed(() => dateAgo(blog.value!.updatedAt))

onMounted(() => {
  hljs.highlightAll()
})
</script>

<template>
  <div
    v-if="blog"
    class="prose prose-neutral ds-border dark:prose-invert lg:prose-xl m-auto flex flex-col rounded-md border bg-white p-12 py-4 shadow-sm dark:bg-neutral-900 dark:text-neutral-200"
  >
    <header>
      <h1 class="pt-10">{{ blog.title }}</h1>
      <div class="flex">
        <p class="text-sm">Edited: {{ edited }}</p>
      </div>
      <div
        class="flex list-none space-x-3 text-sm underline decoration-rose-200"
      >
        <p v-for="tag in blog.tags" :key="tag.id">#{{ tag.name }}</p>
      </div>
    </header>
    <main v-html="blog.content"></main>
  </div>
</template>

<style lang="scss"></style>
