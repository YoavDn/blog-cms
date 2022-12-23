<script setup lang="ts">
import { useRoute } from 'vue-router'
definePageMeta({
  middleware: 'authentication',
})
const route = useRoute()
const blog = await useFetch(`/api/blog/:${route.params.id}`)
</script>

<template></template>

<style lang="scss"></style>
