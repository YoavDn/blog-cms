import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

export default function useHighlight() {
  onMounted(() => {
    highlight()
  })

  function highlight() {
    const blocks = document.querySelectorAll('code')
    blocks.forEach(block => {
      hljs.highlightElement(block)
    })
  }
}
