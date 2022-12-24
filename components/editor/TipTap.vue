<script setup>
import { lowlight } from 'lowlight'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import 'highlight.js/styles/github-dark.css'

// lowlight.registerLanguage('html', html)
// lowlight.registerLanguage('css', css)
// lowlight.registerLanguage('js', js)
// lowlight.registerLanguage('ts', ts)

const editor = useEditor({
  content: `<pre><code class="language-javascript">for (var i=1; i <= 20; i++)
{
  if (i % 15 == 0)
    console.log("FizzBuzz");
  else if (i % 3 == 0)
    console.log("Fizz");
  else if (i % 5 == 0)
    console.log("Buzz");
  else
    console.log(i);
}</code></pre>`,
  extensions: [
    StarterKit,
    CodeBlockLowlight.configure({
      lowlight,
    }),
  ],
  editorProps: {
    attributes: {
      class:
        'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
    },
  },
})
</script>

<template>
  <editor-content class="p-2" :editor="editor" />
</template>

<style lang="scss">
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }

    .hljs-comment,
    .hljs-quote {
      color: #616161;
    }

    .hljs-variable,
    .hljs-template-variable,
    .hljs-attribute,
    .hljs-tag,
    .hljs-name,
    .hljs-regexp,
    .hljs-link,
    .hljs-name,
    .hljs-selector-id,
    .hljs-selector-class {
      color: #f98181;
    }

    .hljs-number,
    .hljs-meta,
    .hljs-built_in,
    .hljs-builtin-name,
    .hljs-literal,
    .hljs-type,
    .hljs-params {
      color: #fbbc88;
    }

    .hljs-string,
    .hljs-symbol,
    .hljs-bullet {
      color: #b9f18d;
    }

    .hljs-title,
    .hljs-section {
      color: #faf594;
    }

    .hljs-keyword,
    .hljs-selector-tag {
      color: #70cff8;
    }

    .hljs-emphasis {
      font-style: italic;
    }

    .hljs-strong {
      font-weight: 700;
    }
  }
}
</style>
