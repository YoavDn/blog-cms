<script setup lang="ts">
import { BlogPost } from '.prisma/client'
import AvatarMenu from '../ui/AvatarMenu.vue'
const { data: session } = useSession()
const route = useRoute()

const onBlogPage = computed(() => {
  return (route.name as string).includes('user-title') ? true : false
})
</script>

<template>
  <header :class="{ 'ds-border border-b': route.name === 'new' }">
    <div class="relative mx-auto max-w-6xl px-4 pt-4 pb-2 sm:px-6 lg:px-8">
      <main class="flex justify-between">
        <section class="flex items-center gap-4 text-black dark:text-white">
          <NuxtLink to="/" class="font-extrabold dark:text-white"
            >BLOGIFFY</NuxtLink
          >
          <h1
            class="text-2xl font-extralight text-gray-500 dark:text-neutral-700"
          >
            /
          </h1>

          <NuxtLink to="/dashboard" class="font-medium dark:text-neutral-200">
            {{ session?.user?.name }}
          </NuxtLink>

          <h1
            v-if="onBlogPage"
            class="text-2xl font-extralight text-gray-500 dark:text-neutral-700"
          >
            /
          </h1>
          <NuxtLink v-if="onBlogPage">TODO</NuxtLink>
        </section>
        <section>
          <AvatarMenu />
        </section>
      </main>
    </div>
  </header>
</template>

<style scoped></style>
