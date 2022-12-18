<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  layout: 'default',
})

const { status } = useSession()
</script>

<template>
  <div>hello</div>
  <h2>this is the dashboard {{ status }}</h2>
</template>

<style lang="scss"></style>
