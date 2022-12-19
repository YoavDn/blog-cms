<script setup lang="ts">
import AvatarMenu from '../ui/AvatarMenu.vue'
const { data: session } = useSession()
console.log(session.value?.user)
</script>

<template>
  <div class="p-4 sm:px-6 lg:px-8">
    <main class="flex justify-between">
      <section class="flex items-center gap-4">
        <NuxtLink to="/" class="font-extrabold">BLOGGER'S KIT</NuxtLink>
        <h1 class="text-2xl text-gray-500 font-extralight">/</h1>
        <img
          v-if="session?.user?.image"
          :src="session.user.image"
          alt="user image"
          class="aspect-video w-7 h-7 rounded-full border border-gray-400"
        />
        <h2 class="font-medium">{{ session?.user?.name }}</h2>
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
</template>

<style lang="scss"></style>
