<script setup lang="ts">
definePageMeta({
  middleware: 'authentication',
})
const route = useRoute()
const router = useRouter()
const blogId = (route.params.title as string).split('-').pop()

const { data: blog, refresh } = await useFetch(`/api/blog/${blogId}`)

function deleteBlog() {
  useFetch(`/api/blog/${blogId}/delete`, { method: 'delete' }).then(() => {
    router.push({ path: '/dashboard' })
  })
}
</script>

<template>
  <h2>settings</h2>
  <button @click="deleteBlog" class="text-red-400">Delete blog</button>
  <pre>{{ blog }}</pre>
</template>

<style lang="scss"></style>
