<script setup lang="ts">
import PopupIcon from '../ui/PopupIcon.vue'
import { dateAgo, editedAt } from '~~/utils/date'
import { BlogPost } from '.prisma/client'
const { data: session } = useSession()
const { blog } = defineProps<{
  blog: BlogPost
}>()
console.log(blog)
const isShowing = ref(false)
const blogRoute = computed(() => {
  return `${session.value!.user!.name!.replaceAll(
    ' ',
    '_'
  )}/${blog.title.replaceAll(' ', '-')}-${blog.id}`.toLowerCase()
})

const edited = (updateAt: Date) => {
  return dateAgo(updateAt)
}
</script>

<template>
  <NuxtLink :to="blogRoute">
    <article
      @mouseenter="() => (isShowing = true)"
      @mouseleave="() => (isShowing = false)"
      class="blog-card relative h-56 rounded-md border border-gray-200 bg-white shadow-sm duration-150 ease-in-out hover:shadow-md dark:border-neutral-700 dark:bg-black md:hover:cursor-pointer md:dark:hover:border-white"
    >
      <NuxtLink :to="`${blogRoute}/edit`">
        <PopupIcon
          v-tooltip="'Edit'"
          :isShowing="isShowing"
          icon="heroicons:pencil-square"
        />
      </NuxtLink>
      <img
        v-if="blog.image"
        :src="blog.image"
        alt=""
        class="absolute left-1/2 top-0 h-full w-1/2 overflow-hidden rounded-r object-cover object-center md:left-0 md:h-1/2 md:w-full md:rounded-t-md"
      />
      <div
        v-else
        class="absolute left-1/2 top-0 h-full w-1/2 rounded-r bg-gradient-to-tl from-cyan-500 to-blue-500 md:left-0 md:h-1/2 md:w-full md:rounded-t-md"
      ></div>
      <div
        class="content relative left-0 z-40 flex h-full w-1/2 flex-col justify-between p-5 md:absolute md:top-1/2 md:h-1/2 md:w-full md:px-4 md:py-2"
      >
        <h2 class="font-medium text-gray-800 dark:text-neutral-200">
          {{ blog.title }}
        </h2>
        <div
          v-if="blog.published"
          class="info flex flex-col text-sm font-light text-gray-500 dark:text-neutral-500 md:flex-row md:items-center md:gap-4"
        >
          <p>
            Published:
            {{ editedAt(blog.publishedAt as Date) }}
          </p>
          <p class="font-light">
            Edited: <span>{{ edited(blog.updatedAt) }}</span>
          </p>
        </div>
        <div v-else class="draft flex items-center text-sm font-light">
          <Icon
            name="heroicons:x-circle-20-solid"
            class="text-red-500 dark:text-red-400"
          />
          <p class="ml-1 rounded-md text-red-500 dark:text-red-400">Draft</p>
          <p class="ml-4 dark:text-neutral-500">
            Edited:{{ edited(blog.updatedAt) }}
          </p>
        </div>
      </div>
      <div></div>
    </article>
  </NuxtLink>
</template>

<style lang="scss"></style>
