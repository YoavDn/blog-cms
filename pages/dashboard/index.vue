<script setup lang="ts">
import BlogsContainer from '~~/components/dashboard/BlogsContainer.vue'
definePageMeta({
  middleware: 'auth',
  layout: 'default',
})

const { status } = useSession()
</script>

<template>
  <div>
    <DashboardSearchBar />
    <BlogsContainer />
  </div>
</template>

<style lang="scss"></style>
