<script setup lang="ts">
import BlogsContainer from '~~/components/dashboard/BlogsContainer.vue'
definePageMeta({
  //   middleware: 'auth',
  layout: 'default',
})
const { status } = useSession()
const layout = ref<'list' | 'grid'>('grid')
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
