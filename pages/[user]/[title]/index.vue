<script setup lang="ts">
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

definePageMeta({
  middleware: 'authentication',
})
const route = useRoute()
const blogId = (route.params.title as string).split('-').pop()

const { data: blog, refresh } = await useFetch(`/api/blog/${blogId}`)

// TODO: making code hightlight

//date
const editedAt = computed<string>(() => {
  if (blog.value) {
    const date = dayjs(blog.value.updatedAt)
      .toString()
      .split(' ')
      .slice(1, 3)
      .join(' ')
    const dateAgo = dayjs(blog.value.updatedAt).fromNow()
    return `${date} (${dateAgo}) `
  } else {
    return '---'
  }
})
</script>

<template>
  <div
    v-if="blog"
    class="prose prose-neutral ds-border dark:prose-invert lg:prose-xl m-auto flex flex-col rounded-md border bg-white p-12 py-4 shadow-sm dark:bg-neutral-900 dark:text-neutral-200"
  >
    <header>
      <h1>{{ blog.title }}</h1>
      <div class="flex">
        <p class="text-sm">Edited: {{ editedAt }}</p>
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
