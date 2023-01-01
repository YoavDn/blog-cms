<script setup lang="ts">
const route = useRoute()
const links = ref<{ name: string; route: string }[]>()
const { data: session } = useSession()

function updateLinks() {
  if (
    route.fullPath.split('/')[1] ===
    session.value?.user?.name?.replaceAll(' ', '_')
  ) {
    links.value = [
      {
        name: 'Overview',
        route: `/${session.value.user.name.replaceAll(' ', '_')}/${
          route.fullPath.split('/')[2]
        }`,
      },
      {
        name: 'Edit',
        route: `/${session.value.user.name.replaceAll(' ', '_')}/${
          route.fullPath.split('/')[2]
        }/edit`,
      },
      {
        name: 'Settings',
        route: `/${session.value.user.name.replaceAll(' ', '_')}/${
          route.fullPath.split('/')[2]
        }/settings`,
      },
    ]
  } else {
    links.value = [
      { name: 'Overview', route: '/dashboard' },
      { name: 'Settings', route: '/settings/' },
    ]
  }
}
updateLinks()

watch(
  () => route.fullPath,
  () => {
    updateLinks()
  }
)
</script>

<template>
  <div
    class="border-b border-gray-300 bg-white dark:border-neutral-700 dark:bg-black"
  >
    <nav class="mx-auto max-w-6xl sm:px-6 lg:px-8">
      <ul class="flex gap-5 text-sm text-gray-500 dark:text-neutral-500">
        <li
          v-for="link in links"
          :key="link.route"
          class="link"
          :class="{ active: link.route === route.fullPath }"
        >
          <NuxtLink
            class="rounded-md p-3 sm:cursor-pointer sm:hover:bg-gray-100/25 dark:sm:hover:text-white"
            :to="link.route"
            >{{ link.name }}</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.link {
  @apply py-3 sm:hover:text-black;
}
.active {
  @apply border-b border-black text-black dark:border-white dark:text-white;
}
</style>
