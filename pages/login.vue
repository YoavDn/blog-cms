<script setup lang="ts">
definePageMeta({ auth: false })

const { status, signIn, signOut } = useSession()
console.log(status.value)
</script>

<template>
  <div class="flex items-center justify-center">
    <button class="bg-black p-4 text-white w-1/2 m-3" @click="signIn('google')">
      Sign in with Google
    </button>
    <button class="bg-black p-4 text-white w-1/2 m-3" @click="signOut()">
      signOut
    </button>
  </div>
</template>

<style lang="scss"></style>
