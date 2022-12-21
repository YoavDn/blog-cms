<script setup lang="ts">
import BlogsContainer from '~~/components/dashboard/BlogsContainer.vue'
definePageMeta({
  layout: 'default',
})
const { status } = useSession()
const layout = ref<'list' | 'grid'>('grid')

const { data, pending, error, refresh } = await useFetch('/api/blog')

console.log(data.value)
</script>

<template>
  <div>
    <DashboardSearchBar
      @changeLayout="type => (layout = type)"
      :layout="layout"
    />
    <BlogsContainer :layout="layout" />
  </div>
</template>

<style lang="scss"></style>
