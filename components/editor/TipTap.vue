<script setup lang="ts">
import LinkModal from './LinkModal.vue'
import { defineProps } from 'vue'
import { BlogPost } from '.prisma/client'
import { lowlight } from 'lowlight'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import 'highlight.js/styles/github-dark.css'
import { emit } from 'process'

const props = defineProps<{ blog: BlogPost }>()
const emit = defineEmits<{
  (e: 'updateBlog', html: string, published: boolean): void
}>()
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
        'dark:prose-invert prose prose-neutral  min-h-[40vh] lg:prose-lg  my-5 focus:outline-none',
    },
  },
})

onMounted(() => {
  editor.value?.chain().focus()
})

// TODO: figure out if this is the way to go

// onBeforeRouteLeave(() => {
//   if (!editor.value) return
//   emit('updateBlog', editor.value.getHTML())
// })

// toolbar
function toggleBold() {
  editor.value!.chain().focus().toggleBold().run()
}

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
      class="ds-border sticky top-0 z-30 flex items-center overflow-auto border-y bg-gray-50 px-10 text-gray-500 dark:bg-black"
    >
      <button
        v-tooltip="'Bold'"
        title="Hi! I'm tooltip"
        :class="[
          { 'is-active': editor.isActive('bold') },
          'menu-item group/btn',
        ]"
        @click="editor!.chain().focus().toggleBold().run()"
      >
        <Icon name="ic:outline-format-bold" class="menu-svg" />
      </button>
      <button
        v-tooltip="'Italic'"
        @click="editor!.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="[{ 'is-active': editor.isActive('italic') }, 'menu-item']"
      >
        <Icon name="ant-design:italic-outlined" class="menu-svg" />
      </button>
      <button
        v-tooltip="'Add link'"
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
      <button
        @click="editor!.chain().focus().toggleBulletList().run()"
        v-tooltip="'Bullet List'"
        :class="[{ 'is-active': editor.isActive('bulletList') }, 'menu-item']"
      >
        <Icon
          name="material-symbols:format-list-bulleted-rounded"
          class="menu-svg"
        />
      </button>
      <button
        @click="editor!.chain().focus().toggleOrderedList().run()"
        v-tooltip="'Ordered List'"
        :class="[{ 'is-active': editor.isActive('orderedList') }, 'menu-item']"
      >
        <Icon name="material-symbols:format-list-numbered" class="menu-svg" />
      </button>
      <button
        @click="editor!.chain().focus().toggleHeading({ level: 2 }).run()"
        v-tooltip="'Heading'"
        :class="[
          { 'is-active': editor.isActive('heading', { level: 2 }) },
          'menu-item',
        ]"
      >
        <Icon name="tabler:heading" class="menu-svg" />
      </button>
      <button
        v-tooltip="'code'"
        @click="editor!.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="[{ 'is-active': editor.isActive('code') }, 'menu-item']"
      >
        <Icon name="material-symbols:code" class="menu-svg" />
      </button>
      <button
        v-tooltip="'Code Block'"
        @click="editor!.chain().focus().toggleCodeBlock().run()"
        :class="[{ 'is-active': editor.isActive('codeBlock') }, 'menu-item']"
      >
        <Icon name="material-symbols:code-blocks" class="menu-svg" />
      </button>
    </div>
    <editor-content :editor="editor" class="w-full px-12" />
    <div
      class="ds-border m-auto mt-4 space-x-4 rounded-b-md border-t bg-gray-50 p-4 text-sm dark:bg-neutral-900"
    >
      <button
        @click="$emit('updateBlog', editor?.getHTML(), true)"
        class="rounded-md border border-fuchsia-500 bg-fuchsia-500 p-2 px-5 text-white duration-150 ease-in sm:hover:bg-fuchsia-500/0 sm:hover:text-fuchsia-500"
      >
        Publish
      </button>
      <button
        @click="$emit('updateBlog', editor?.getHTML())"
        class="ds-border rounded-md border bg-white p-2 px-5 dark:bg-black dark:text-white"
      >
        Save Draft
      </button>
    </div>
  </main>
</template>

<style scoped lang="scss">
.menu-svg {
  @apply h-8 w-8;
}
.menu-item {
  @apply m-1  rounded-md p-1 sm:hover:bg-pink-800/20  sm:hover:text-black sm:dark:hover:text-fuchsia-500;
}
.is-active {
  @apply text-black dark:text-fuchsia-500;
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
    @apply prose dark:prose-invert rounded-[4px]  bg-gray-100 px-2 py-1 dark:bg-neutral-800;
    @apply font-mono font-extralight;
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
}
</style>
