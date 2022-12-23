<script setup lang="ts">
definePageMeta({
  middleware: 'authentication',
})
const route = useRoute()
const blogId = (route.params.title as string).split('-').pop()

const { data: blog, refresh } = await useFetch(`/api/blog/${blogId}`)
onMounted(() => refresh())

//highlight js logic
</script>

<template>
  <div class="py-4">
    <main
      v-if="blog"
      class="blog-container p-4 shadow-sm dark:text-neutral-200"
    >
      <img v-if="blog.image" :src="blog.image" alt="" />
      <h2 class="font-bold text-3xl">{{ blog.title }}</h2>
      <pre
        class="p-0"
      ><code  v-highlight class="javascript rounded-md m-0 p-0" >const yoav = 'yoav'

function foo() {
  return 'hello world'
}
</code></pre>
    </main>
  </div>
</template>

<style lang="scss"></style>
