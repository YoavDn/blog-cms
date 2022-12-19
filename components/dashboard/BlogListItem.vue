<script setup lang="ts">
const { blog } = defineProps<{
  blog: {
    title: string
    createdAt: string
    content: string | null
    published: boolean
    publishedAt?: string
    image?: string
    authorId: number
    lastUpdate: string
    id: number
  }
}>()
</script>

<template>
  <article
    class="rounded-md overflow-hidden relative min-h-14 bg-white px-5 py-4 border broder-gray-200 shadow-sm md:hover:shadow-md ease-in-out duration-200 flex items-center"
  >
    <div class="sm:basis-1/12 hidden sm:block">
      <img
        v-if="blog.image"
        :src="blog.image"
        alt="Blog thumbnail"
        class="w-1/12 h-full absolute object-cover top-0 left-0"
      />
      <div
        v-else
        class="h-full w-1/12 absolute object-cover top-0 left-0 bg-gradient-to-tl from-cyan-500 to-blue-500"
      />
    </div>

    <h2 class="sm:basis-5/12 basis-6/12 truncate">{{ blog.title }}</h2>
  </article>
</template>

<style lang="scss"></style>
