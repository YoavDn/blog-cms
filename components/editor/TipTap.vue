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
        'prose dark:prose-invert prose-sm sm:prose  w-full  lg:prose-lg xl:prose-2xl xxl-prose-4xl my-5 focus:outline-none',
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
    <editor-content :editor="editor" class="w-full" />
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
  }
  blockquote {
    @apply dark:border-neutral-700;
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0d0d0d, 0.1);
    margin: 2rem 0;
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
