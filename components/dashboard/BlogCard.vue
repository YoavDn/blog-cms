<script setup lang="ts">
import PopupIcon from '../ui/PopupIcon.vue'
const { data: session } = useSession()
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

const isShowing = ref(false)
const blogRoute = computed(() => {
  return `${session.value?.user?.name?.replaceAll(
    ' ',
    '_'
  )}/${blog.title.replaceAll(' ', '-')}-${blog.id}`
})
</script>

<template>
  <NuxtLink :to="blogRoute">
    <article
      @mouseenter="() => (isShowing = true)"
      @mouseleave="() => (isShowing = false)"
      class="md:hover:cursor-pointer blog-card relative h-56 border md:dark:hover:border-white rounded-md dark:border-neutral-700 dark:bg-black border-gray-200 bg-white shadow-sm hover:shadow-md ease-in-out duration-150"
    >
      <PopupIcon :isShowing="isShowing" icon="heroicons:pencil-square" />
      <img
        v-if="blog.image"
        :src="blog.image"
        alt=""
        class="absolute overflow-hidden object-cover object-center left-1/2 w-1/2 h-full rounded-r top-0 md:left-0 md:h-1/2 md:w-full md:rounded-t-md"
      />
      <div
        v-else
        class="absolute left-1/2 w-1/2 h-full rounded-r top-0 md:left-0 md:h-1/2 md:w-full md:rounded-t-md bg-gradient-to-tl from-cyan-500 to-blue-500"
      ></div>
      <div
        class="content relative z-40 md:absolute md:top-1/2 md:px-4 md:py-2 p-5 w-1/2 h-full md:h-1/2 md:w-full left-0 flex flex-col justify-between"
      >
        <h2 class="font-medium text-gray-800 dark:text-neutral-200">
          {{ blog.title }}
        </h2>
        <div
          v-if="blog.published"
          class="info flex md:items-center md:flex-row flex-col md:gap-4 text-sm text-gray-500 font-light"
        >
          <p>
            Published:
            {{ blog.publishedAt }}
          </p>
          <p class="text-gray-500 font-light">
            Edited: <span>{{ blog.lastUpdate }}</span>
          </p>
        </div>
        <div v-else class="draft flex items-center">
          <Icon
            name="heroicons:x-circle-20-solid"
            class="text-red-500 dark:text-red-400"
          />
          <p class="text-red-500 dark:text-red-400 rounded-md text-sm p-1">
            Draft
          </p>
        </div>
      </div>
      <div class="Actions"></div>
    </article>
  </NuxtLink>
</template>

<style lang="scss"></style>
