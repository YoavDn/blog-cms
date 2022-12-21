<script setup lang="ts">
import BlogsContainer from '~~/components/dashboard/BlogsContainer.vue'
definePageMeta({
  layout: 'default',
})
const layout = ref<'list' | 'grid'>('grid')
const { data: blogs, pending, error, refresh } = await useFetch('/api/blog')

onMounted(() => refresh())
</script>

<template>
  <div>
    <DashboardSearchBar
      @changeLayout="type => (layout = type)"
      :layout="layout"
    />
    <div class="" v-if="pending && !error">stuff</div>
    <BlogsContainer v-else :layout="layout" :blogs="blogs" />
  </div>
  <div class="" v-if="error"></div>
</template>

<style lang="scss"></style>
