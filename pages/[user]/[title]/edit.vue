<script setup lang="ts">
import { Tag } from '@prisma/client'
import TagsCombobox from '~~/components/editor/TagsCombobox.vue'
import { useRoute } from 'vue-router'
import TipTap from '~~/components/editor/TipTap.vue'
import { useDebounceFn } from '@vueuse/core'

type addTagType = {
  isNew: boolean
  toRemove?: boolean
  tag?: Tag
  name?: string
}

definePageMeta({
  middleware: 'authentication',
})

const tagInput = ref('')
const blogTitle = useBlogTitle()
const { data: tags } = await useFetch(`/api/tag`)

const route = useRoute()
const id = route.fullPath.split('/')[2].split('-')[
  route.fullPath.split('/')[2].split('-').length - 1
]
const { data: blog, refresh } = await useFetch(`/api/blog/${id}`)
blogTitle.value = blog.value!.title

async function updateBlog(html: string, published = false) {
  if (!blog.value) return
  blog.value = await useFetch(`/api/blog/${id}/update`, {
    method: 'put',
    body: { content: html, title: blog.value.title, published },
  }).data.value
}
//tags related functions
async function updateTag(options: addTagType) {
  console.log('theId is', id)
  blog.value = await useFetch(`/api/tag/${id}/update`, {
    method: 'put',
    body: { options },
  }).data.value
}

const searchTags = useDebounceFn(async (query: string) => {
  const { data: searchedTags } = await useFetch(`/api/tag`, {
    query: { name: query },
  })
  tags.value = searchedTags.value
}, 300)
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
      <div class="items-center">
        <div v-if="blog.tags.length > 0" class="flex list-none gap-4">
          <li
            class="group/tag flex items-center rounded-md bg-fuchsia-400/20 px-2 font-bold duration-150 ease-in hover:text-black dark:text-neutral-300 dark:hover:text-white"
            v-for="tag in blog.tags"
            :key="tag.id"
          >
            #{{ tag.name }}
            <span
              class="cursor-pointer pl-2"
              @click="updateTag({ isNew: false, tag, toRemove: true })"
            >
              <Icon
                name="heroicons:x-mark"
                class="h-8 w-5 duration-150 ease-in group-hover/tag:text-red-400"
              />
            </span>
          </li>
        </div>

        <TagsCombobox
          v-if="tags"
          :tags="tags"
          :query="tagInput"
          @updateTags="searchTags"
          @addTag="updateTag"
        />
      </div>
    </div>
    <TipTap v-if="blog" :blog="blog" @update-blog="updateBlog" />
  </div>
  <div class="prose m-auto mt-4 space-x-4"></div>
</template>

<style lang="scss"></style>
