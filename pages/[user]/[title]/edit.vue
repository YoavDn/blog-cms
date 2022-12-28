<script setup lang="ts">
import { useRoute } from 'vue-router'
import TipTap from '~~/components/editor/TipTap.vue'

definePageMeta({
  middleware: 'authentication',
})

const route = useRoute()
const id = route.fullPath.split('/')[2].split('-')[1]
const { data: blog, refresh } = await useFetch(`/api/blog/${id}`)
onMounted(() => refresh())
console.log(blog.value)
</script>

<template>
  <div
    v-if="blog"
    class="bg-white prose m-auto md:prose-md lg:prose-lg xl:prose-xl dark:bg-neutral-900 rounded-md border ds-border"
  >
    <div class="cover-image">
      <input type="file" id="img-file" name="img-file" class="hidden" />
      <label
        for="img-file"
        class="sm:cursor-pointer text-sm justify-center px-12 flex items-center gap-2 p-2 bg-gray-50 dark:bg-neutral-900 text-center rounded-t-md text-neutral-500 sm:hover:text-black dark:sm:hover:text-white"
      >
        <span> <Icon name="ion:image-outline" class="h-5 w-5" /></span> Add a
        cover image</label
      >
    </div>
    <div class="px-12 pt-2 blog-title flex flex-col gap-5">
      <textarea
        class="text-3xl lg:text-5xl w-full focus:outline-none dark:bg-neutral-900 dark:text-white text-black placeholder:font-bold placeholder:text-neutral-500 font-bold"
        placeholder="Post title here..."
        rows="3"
        v-model="blog.title"
      />
    </div>
    <TipTap v-if="blog" :blog="blog" />
  </div>
</template>

<style lang="scss"></style>
