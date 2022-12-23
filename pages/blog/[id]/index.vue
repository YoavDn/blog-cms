<script setup lang="ts">
import { useRoute } from 'vue-router'
definePageMeta({
  middleware: 'authentication',
})
const route = useRoute()
console.log(route.params.id)
const { data: blog, refresh } = await useFetch(`/api/blog/${route.params.id}`)
onMounted(() => refresh())
</script>

<template>
  <pre>
        {{ blog }}
    </pre
  >
</template>

<style lang="scss"></style>
