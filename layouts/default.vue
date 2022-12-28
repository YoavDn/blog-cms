<script setup lang="ts">
const route = useRoute()

console.log(route.name)
const bgStyle = computed(() => {
  if (route.name === 'user-title' || route.name === 'user-title-edit') {
    return 'bg-gray-50 dark:bg-black min-h-screen'
  } else {
    return 'bg-gray-50 dark:bg-neutral-900 min-h-screen'
  }
})
</script>

<template>
  <div>
    <DashboardHeader />
    <Nav />
    <main :class="bgStyle">
      <div class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>
  </div>
</template>
