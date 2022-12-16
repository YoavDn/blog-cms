<script setup lang="ts">
definePageMeta({ auth: false })

const { status, signIn } = useSession()
console.log(status.value)
</script>

<template>
  <button class="bg-black p-4 m-auto text-white" @click="signIn('google')">
    Sign in with Google
  </button>
</template>

<style lang="scss"></style>
