<script setup lang="ts">
import AvatarMenu from '../ui/AvatarMenu.vue'
const { data: session } = useSession()
const route = useRoute()

const blogTitle = computed(() => {
  const routeWithoutId = route.path
    .split('-')
    .slice(0, route.path.split('-').length - 1)
    .join()
  return routeWithoutId.split('/')[route.path.split('/').length - 1]
})
</script>

<template>
  <!-- <header class="border-b border-gray-300 dark:border-neutral-700"> -->
  <div class="px-4 pt-4 pb-2 sm:px-6 lg:px-8 relative mx-auto max-w-6xl">
    <main class="flex justify-between">
      <section class="flex items-center gap-4">
        <NuxtLink to="/" class="font-extrabold dark:text-white"
          >BLOGIFFY</NuxtLink
        >
        <h1
          class="text-2xl text-gray-500 dark:text-neutral-700 font-extralight"
        >
          /
        </h1>

        <NuxtLink to="/dashboard" class="font-medium dark:text-neutral-200">
          {{ session?.user?.name }}
        </NuxtLink>

        <h1
          v-if="route.name === 'user-title'"
          class="text-2xl text-gray-500 dark:text-neutral-700 font-extralight"
        >
          /
        </h1>
        <NuxtLink v-if="route.name === 'user-title'">{{ blogTitle }}</NuxtLink>
      </section>
      <section>
        <!-- <img
          v-if="session?.user?.image"
          :src="session.user.image"
          alt="user image"
          class="aspect-video w-8 h-8 rounded-full"
        /> -->
        <AvatarMenu />
      </section>
    </main>
  </div>
  <!-- </header> -->
</template>

<style lang="scss"></style>
