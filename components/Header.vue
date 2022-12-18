<script setup lang="ts">
import AvatarMenu from './ui/AvatarMenu.vue'
const { data: session } = useSession()
</script>

<template>
  <header class="flex py-6 justify-between">
    <h1 class="font-extrabold">Blogger's Kit</h1>
    <ul class="flex items-center gap-3">
      <h1>link</h1>
      <AvatarMenu v-if="session?.user" />
      <button
        v-else
        class="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
      >
        Sign In
      </button>
    </ul>
  </header>
</template>

<style lang="scss"></style>
