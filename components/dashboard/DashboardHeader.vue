<script setup lang="ts">
import AvatarMenu from '../ui/AvatarMenu.vue'
const { data: session } = useSession()
console.log(session.value?.user)
</script>

<template>
  <div class="p-4 sm:px-6 lg:px-8">
    <main class="flex justify-between">
      <section class="flex items-center gap-4">
        <h1 class="font-extrabold text">BloggersKit</h1>
        <Icon name="heroicons:pencil-solid" />
        <img
          v-if="session?.user?.image"
          :src="session.user.image"
          alt="user image"
          class="aspect-video w-10 h-10 rounded-full"
        />
        <h2>{{ session?.user?.name }}</h2>
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
