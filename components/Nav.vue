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
    class="border-b border-gray-300 bg-white dark:bg-black dark:border-neutral-700"
  >
    <nav class="sm:px-6 lg:px-8 mx-auto max-w-6xl">
      <ul class="flex gap-5 dark:text-neutral-500 text-gray-500 text-sm">
        <li
          v-for="link in links"
          :key="link.route"
          class="link"
          :class="{ active: link.route === route.fullPath }"
        >
          <NuxtLink
            class="p-3 sm:hover:bg-gray-100 dark:sm:hover:text-black rounded-md sm:cursor-pointer"
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
  @apply border-b text-black dark:text-white border-black dark:border-white;
}
</style>
