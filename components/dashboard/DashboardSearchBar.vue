<script setup lang="ts">
import { BlogPost } from '.prisma/client'

const router = useRouter()
const props = defineProps<{ layout: 'grid' | 'list' }>()

function isActiveLayout(type: 'list' | 'grid') {
  return type === props.layout
}

const { data: session } = useSession()

async function newBlogPost() {
  console.log('new post')
  const { data: newBlog } = await useFetch('/api/blog/create', {
    method: 'POST',
  })
  if (!newBlog.value) return

  const blogRoute = `${session.value?.user?.name?.replaceAll(
    ' ',
    '_'
  )}/${newBlog.value.title.replaceAll(' ', '-')}-${newBlog.value.id}`
  router.push({ path: `/` })
}
</script>

<template>
  <div class="relative flex flex w-full items-center py-3">
    <div class="input-container flex h-10 max-w-full basis-9/12 items-center">
      <input
        type="text"
        placeholder="Search.."
        class="peer/input order-1 h-full w-full rounded-r-md border-r border-t border-b border-gray-200 bg-white px-3 outline-none duration-150 ease-in-out placeholder:text-sm placeholder:font-light focus:border-gray-800 dark:border-neutral-700 dark:bg-black dark:text-white dark:focus:border-neutral-500"
      />
      <span
        class="rounder-l-md h-full rounded-l-md border-y border-l bg-white pl-3 text-gray-400 duration-150 ease-in-out peer-focus/input:border-gray-800 dark:border-neutral-700 dark:bg-black dark:peer-focus/input:border-neutral-500"
      >
        <Icon name="heroicons-solid:search" class="h-10 w-5 text-gray-400" />
      </span>
    </div>
    <div
      class="mx-2 flex h-10 basis-1/12 border-collapse justify-center rounded-md"
      title="Switch between grid and list view"
    >
      <button
        @click="$emit('changeLayout', 'grid')"
        class="rounded-l-md border border-l border-gray-200 px-2 duration-150 ease-in-out dark:border-neutral-700 dark:bg-black md:hover:border-gray-800 md:dark:hover:border-neutral-500"
        :class="{ 'bg-gray-100 dark:bg-neutral-800': isActiveLayout('grid') }"
      >
        <Icon
          name="heroicons:squares-2x2"
          class="h-10 w-5 text-gray-400"
          :class="{ 'text-gray-900 dark:text-white': isActiveLayout('grid') }"
        />
      </button>
      <button
        @click="$emit('changeLayout', 'list')"
        class="rounded-r-md border border-r border-gray-200 px-2 duration-150 ease-in-out dark:border-neutral-700 md:hover:border-gray-800 md:dark:hover:border-neutral-500"
        :class="{ 'bg-gray-100 dark:bg-neutral-800': isActiveLayout('list') }"
      >
        <Icon
          name="heroicons:list-bullet"
          class="h-10 w-5 text-gray-400"
          :class="{ 'text-gray-900 dark:text-white': isActiveLayout('list') }"
        />
      </button>
    </div>
    <button
      @click="newBlogPost"
      class="group/new-post flex h-10 basis-2/12 items-center justify-center rounded-md border bg-black px-4 text-start text-sm text-white duration-150 ease-in-out dark:bg-white dark:text-black md:justify-start md:hover:border-black md:hover:bg-white md:hover:text-black dark:md:hover:border-white dark:md:hover:bg-black dark:md:hover:text-white"
    >
      <span class="pr-1 text-center">
        <Icon
          name="heroicons:plus"
          class="h-12 w-4 text-white duration-150 ease-in-out dark:text-black md:group-hover/new-post:text-black dark:md:group-hover/new-post:text-white"
        />
      </span>
      <span class="hidden md:block"> New Post </span>
    </button>
  </div>
</template>

<style lang="scss"></style>
