<script setup lang="ts">
const { blog } = defineProps<{
  blog: {
    title: string
    createdAt: string
    content: string | null
    published: boolean
    image?: string
    authorId: number
    lastUpdate: string
    id: number
  }
}>()
</script>

<template>
  <article
    class="blog-card relative h-60 border rounded-md border-gray-200 bg-white shadow-sm hover:shadow-md ease-in-out duration-150"
  >
    <img
      v-if="blog.image"
      :src="blog.image"
      alt=""
      class="absolute overflow-hidden object-cover object-center left-1/2 w-1/2 h-full rounded-r top-0 md:left-0 md:h-1/2 md:w-full md:rounded-t-md"
    />
    <div
      v-else
      class="absolute left-1/2 w-1/2 h-full rounded-r top-0 md:left-0 md:h-1/2 md:w-full md:rounded-t-md bg-gradient-to-r from-cyan-500 to-blue-500"
    ></div>
    <div
      class="content md:absolute top-1/2 md:px-4 md:py-2 p-5 w-1/2 md:w-full left-0"
    >
      <h2 class="relative z-40 font-medium text-gray-800">
        {{ blog.title }}
      </h2>
    </div>
  </article>
</template>

<style lang="scss"></style>
