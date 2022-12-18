<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const { status } = useSession()
</script>

<template>
  <h2>this is the dashboard {{ status }}</h2>
</template>

<style lang="scss"></style>
