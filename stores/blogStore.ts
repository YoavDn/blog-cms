import { BlogPost } from '@prisma/client'
import { defineStore } from 'pinia'

export const useBlogStore = defineStore('useBlogStore', () => {
  const blog = ref<BlogPost | null>(null)

  async function setCurrBlog(blogId: number) {
    blog.value = await useFetch(`/api/blog/${blogId}`).data.value
  }
  const currBlog = computed(() => blog.value)

  return { blog, setCurrBlog, currBlog }
})
