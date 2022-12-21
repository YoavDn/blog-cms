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
    class="rounded-md sm:cursor-pointer overflow-hidden relative h-20 bg-white sm:dark:hover:border-white dark:bg-black dark:border-neutral-700 p-6 border broder-gray-200 shadow-sm md:hover:shadow-md ease-in-out duration-200 flex items-center"
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

    <h2 class="sm:basis-5/12 basis-8/12 pr-6 truncate dark:text-neutral-200">
      {{ blog.title }}
    </h2>
    <div
      v-if="blog.published"
      class="info md:flex flex-col basis-5/12 hidden xxsm:block font-light text-sm text-gray-500"
    >
      <p>Published: {{ blog.publishedAt }}</p>
      <p>Edited: {{ blog.lastUpdate }}</p>
    </div>
    <p
      v-else
      class="text-red-600 text-xs bg-red-200 px-2 py-1 rounded-md hidden xxsm:block"
    >
      DRAFT
    </p>
  </article>
</template>

<style lang="scss"></style>
