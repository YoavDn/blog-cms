<script setup lang="ts">
import { defineProps } from 'vue'
import { BlogPost } from '.prisma/client'
import { lowlight } from 'lowlight'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import Image from '@tiptap/extension-image'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import 'highlight.js/styles/github-dark.css'

const props = defineProps<{ blog: BlogPost }>()

const editor = useEditor({
  content: props.blog.content,
  extensions: [
    StarterKit,
    CodeBlockLowlight.configure({
      lowlight,
    }),
    Image,
  ],
  editorProps: {
    attributes: {
      class:
        'prose dark:prose-invert prose-sm sm:prose  lg:prose-lg xl:prose-2xl my-5 focus:outline-none',
    },
  },
})
</script>

<template>
  <main class="relative p-2">
    <!-- <div class="flex sticky top-5 m-5 z-30 p-3 rounded-md bg-white shadow-md">
      <button
        :class="{ 'font-bold underline': editor.isActive('bold') }"
        @click="editor.chain().focus().toggleBold().run()"
      >
        Bold
      </button>
    </div> -->
    <editor-content :editor="editor" />
  </main>
</template>

<style lang="scss">
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  pre {
    background: #0d0d0d;

    // color: #fff;
    // font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      //   background: none;
      font-size: 0.8rem;
    }

    //     .hljs-comment,
    //     .hljs-quote {
    //       color: #616161;
    //     }

    //     .hljs-variable,
    //     .hljs-template-variable,
    //     .hljs-attribute,
    //     .hljs-tag,
    //     .hljs-name,
    //     .hljs-regexp,
    //     .hljs-link,
    //     .hljs-name,
    //     .hljs-selector-id,
    //     .hljs-selector-class {
    //       color: #f98181;
    //     }

    //     .hljs-number,
    //     .hljs-meta,
    //     .hljs-built_in,
    //     .hljs-builtin-name,
    //     .hljs-literal,
    //     .hljs-type,
    //     .hljs-params {
    //       color: #fbbc88;
    //     }

    //     .hljs-string,
    //     .hljs-symbol,
    //     .hljs-bullet {
    //       color: #b9f18d;
    //     }

    //     .hljs-title,
    //     .hljs-section {
    //       color: #faf594;
    //     }

    //     .hljs-keyword,
    //     .hljs-selector-tag {
    //       color: #70cff8;
    //     }

    //     .hljs-emphasis {
    //       font-style: italic;
    //     }

    //     .hljs-strong {
    //       font-weight: 700;
    //     }
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  h1 {
    @apply text-4xl;
  }
  h2 {
    @apply text-3xl;
  }
  h3 {
    @apply text-2xl;
  }
  h4 {
    @apply text-xl;
  }
}
</style>
