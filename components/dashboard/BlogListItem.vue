<script setup lang="ts">
const { blog } = defineProps<{
  blog: {
    title: string
    createdAt: string
    content: string | null
    published: boolean
    publishedAt?: string
    image?: string
    authorId: number
    lastUpdate: string
    id: number
  }
}>()
</script>

<template>
  <h2>{{ blog.title }}</h2>
</template>

<style lang="scss"></style>
