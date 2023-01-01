<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useStorage } from '@vueuse/core'
import TipTap from '~~/components/editor/TipTap.vue'
import { BlogPost } from '.prisma/client'
import { useDebounceFn } from '@vueuse/core'
const isWarningModalOpen = ref(false)

definePageMeta({
  middleware: 'authentication',
})

const route = useRoute()
const id = route.fullPath.split('/')[2].split('-')[
  route.fullPath.split('/')[2].split('-').length - 1
]
const { data: blog, refresh } = await useFetch(`/api/blog/${id}`)

function updateBlog(html: string) {
  if (!blog.value) return
  useFetch(`/api/blog/${id}/update`, {
    method: 'put',
    body: { content: html, title: blog.value.title },
  })
}

const searchTags = useDebounceFn((e: any) => {
  console.log(e.target.value)
}, 400)
</script>

<template>
  <div
    v-if="blog"
    class="prose md:prose-md lg:prose-lg xl:prose-xl ds-border m-auto max-h-[85vh] overflow-auto rounded-md border bg-white dark:bg-neutral-900"
  >
    <div class="cover-image">
      <input type="file" id="img-file" name="img-file" class="hidden" />
      <label
        for="img-file"
        class="flex items-center justify-center gap-2 rounded-t-md p-2 px-12 text-center text-sm text-neutral-500 dark:bg-neutral-900 sm:cursor-pointer sm:hover:text-black dark:sm:hover:text-white"
      >
        <span> <Icon name="ion:image-outline" class="h-5 w-5" /></span> Add a
        cover image</label
      >
    </div>
    <div class="blog-title flex flex-col gap-5 px-12 pt-2">
      <textarea
        class="w-full text-3xl font-bold text-black placeholder:font-bold placeholder:text-neutral-500 focus:outline-none dark:bg-neutral-900 dark:text-white lg:text-5xl"
        placeholder="Post title here..."
        v-model="blog.title"
      />

      <input
        @input="searchTags"
        type="text"
        class="ds-border my-3 rounded-md border bg-gray-50 p-1 px-4 outline-none duration-150 ease-in placeholder:text-sm placeholder:italic focus:border-gray-800 dark:bg-black dark:focus:border-neutral-500"
        placeholder="Add tags.."
      />
    </div>
    <TipTap v-if="blog" :blog="blog" @update-blog="updateBlog" />
  </div>
  <div class="prose m-auto mt-4 space-x-4"></div>
</template>

<style lang="scss"></style>
