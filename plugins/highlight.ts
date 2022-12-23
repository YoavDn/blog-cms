import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('highlight', {
    deep: true,
    updated: highlight,
    mounted: highlight,
  })

  function highlight(el: HTMLElement, binding: any) {
    if (el.tagName !== 'CODE') {
      let blocks = el.querySelectorAll('code')

      blocks.forEach(block => {
        highlight(block, binding)
      })
    } else {
      if (typeof binding.value === 'string') {
        el.textContent = binding.value
      }

      hljs.highlightElement(el)
    }
  }
  return {}
})
