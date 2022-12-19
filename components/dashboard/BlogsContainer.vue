<script setup lang="ts">
import BlogCard from './BlogCard.vue'
import BlogListItem from './BlogListItem.vue'
const props = defineProps<{
  layout: 'list' | 'grid'
}>()

const dummyBlogs = [
  {
    title: 'My first blog',
    createdAt: 'sunday',
    content: null,
    lastUpdate: '2h ago..',
    published: true,
    publishedAt: 'Dec 14',
    authorId: 1,
    image:
      'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1778&q=80',
    id: 1,
  },
  {
    title: "Why we will won't be able to center a div in 2030",
    createdAt: 'sunday',
    content: null,
    lastUpdate: '2h ago..',
    authorId: 1,
    image:
      'https://images.unsplash.com/photo-1506564461966-4107c88f6d29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1429&q=80',
    published: false,
    id: 2,
  },
  {
    title: 'My third blog',
    createdAt: 'sunday',
    lastUpdate: '2h ago..',
    content: null,
    authorId: 1,
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    published: false,
    id: 3,
  },
  {
    title: 'My third blog',
    createdAt: 'sunday',
    lastUpdate: '2h ago..',
    content: null,
    authorId: 1,
    published: false,
    id: 3,
  },
]
</script>

<template>
  <div
    v-if="layout === 'grid'"
    class="blogs-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4"
  >
    <BlogCard v-for="blog in dummyBlogs" :key="blog.id" :blog="blog" />
  </div>
  <div v-else class="flex flex-col gap-6 py-4">
    <BlogListItem v-for="blog in dummyBlogs" :key="blog.id" :blog="blog" />
  </div>
</template>

<style></style>
