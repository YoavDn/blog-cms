<script setup lang="ts">
import AvatarMenu from '~~/components/ui/AvatarMenu.vue'
import LoginModal from '~~/components/ui/LoginModal.vue'
const { data: session, signIn } = useSession()
</script>

<template>
  <div>
    <header class="flex py-6 justify-between">
      <h1 class="font-extrabold">BLOGGER'S KIT</h1>
      <ul class="flex items-center gap-3">
        <h1>link</h1>
        <AvatarMenu v-if="session?.user" />
        <LoginModal v-else />
      </ul>
    </header>
  </div>
</template>

<style lang="scss"></style>
