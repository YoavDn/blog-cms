<script setup lang="ts">
import LinkModal from './LinkModal.vue'
import { defineProps } from 'vue'
import { BlogPost } from '.prisma/client'
import { lowlight } from 'lowlight'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import 'highlight.js/styles/github-dark.css'

const props = defineProps<{ blog: BlogPost }>()

const isLinkModalOpen = ref<boolean>(false)
const linkUrl = ref('')

const editor = useEditor({
  content: props.blog.content,
  extensions: [
    StarterKit,
    CodeBlockLowlight.configure({
      lowlight,
    }),
    Image,
    Link.configure({
      openOnClick: true,
    }),
  ],
  editorProps: {
    attributes: {
      class:
        'prose dark:prose-invert md:prose-md sm:prose   lg:prose-lg xl:prose-2xl xxl-prose-4xl my-5 focus:outline-none',
    },
  },
})

function UpdatePreviousUrl() {
  isLinkModalOpen.value = true
  const previousUrl = editor.value!.getAttributes('link').href
  linkUrl.value = previousUrl
}

function setLink() {
  const url = linkUrl.value

  // cancelled
  if (url === null) {
    return
  }

  // empty
  if (url === '') {
    editor.value!.chain().focus().extendMarkRange('link').unsetLink().run()
    return
  }

  // update link
  editor
    .value!.chain()
    .focus()
    .extendMarkRange('link')
    .setLink({ href: url })
    .run()

  isLinkModalOpen.value = false
}
</script>

<template>
  <main class="relative">
    <div
      v-if="editor"
      class="flex sticky top-5 items-center z-30 px-12 dark:bg-black bg-gray-50 border-y ds-border text-gray-500"
    >
      <button
        :class="[{ 'is-active': editor.isActive('bold') }, 'menu-item']"
        @click="editor!.chain().focus().toggleBold().run()"
      >
        <Icon name="material-symbols:format-bold" class="menu-svg" />
      </button>
      <button
        @click="editor!.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="[{ 'is-active': editor.isActive('italic') }, 'menu-item']"
      >
        <Icon name="ant-design:italic-outlined" class="menu-svg" />
      </button>
      <button
        @click="UpdatePreviousUrl"
        :class="[{ 'is-active': editor.isActive('link') }, 'menu-item']"
      >
        <Icon name="ph:link" class="menu-svg" />
      </button>
      <LinkModal
        :isOpen="isLinkModalOpen"
        v-model:linkUrl="linkUrl"
        @closeLinkModal="() => (isLinkModalOpen = false)"
        @openLinkModal="() => (isLinkModalOpen = true)"
        @setLink="setLink"
      />
    </div>
    <editor-content :editor="editor" class="w-full px-12" />
  </main>
</template>

<style scoped lang="scss">
.menu-svg {
  @apply h-8 w-8;
}
.menu-item {
  @apply p-2 sm:hover:text-black sm:dark:hover:text-white;
}
.is-active {
  @apply dark:text-white text-black bg-gray-200 dark:bg-neutral-800;
}

a {
  @apply text-blue-400;
}

.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  pre {
    background: #0d0d0d;
    overflow-x: scroll;
    // color: #fff;
    // font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      background-color: none;
      color: inherit;
      padding: 1em;

      font-size: 0.8rem;
    }
  }

  code:not(pre *) {
    @apply px-2 py-1 rounded-[4px]  prose dark:prose-invert bg-gray-100 dark:bg-neutral-800;
    @apply font-extralight font-mono;
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
