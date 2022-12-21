<script setup lang="ts">
import BlogsContainer from '~~/components/dashboard/BlogsContainer.vue'
definePageMeta({
  //   layout: 'default',
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
    <div
      v-if="pending && !error"
      class="text-center p-4 text-black dark:text-white"
    >
      <h2>loading..</h2>
    </div>
    <BlogsContainer v-else :layout="layout" :blogs="blogs" />
  </div>
  <div class="text-center" v-if="error"></div>
</template>

<style lang="scss"></style>
