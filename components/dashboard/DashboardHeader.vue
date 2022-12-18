<script setup lang="ts">
const { data: session } = useSession()
console.log(session.value?.user)
</script>

<template>
  <div class="p-4 sm:px-6 lg:px-8">
    <main class="flex items-center">
      <img
        :src="session?.user?.image"
        alt="user image"
        class="aspect-video w-10 h-10 rounded-full"
      />
      <h2>{{ session?.user?.name }}</h2>
    </main>
  </div>
</template>

<style lang="scss"></style>
