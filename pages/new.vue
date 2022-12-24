<script setup lang="ts">
import TipTap from '~~/components/editor/TipTap.vue'
</script>

<template>
  <div id="editor" class="editor p-4 rounded-md">
    <TipTap />
  </div>
</template>

<style>
#editor h2 {
  @apply text-2xl;
}

#editor h1 {
  @apply text-3xl;
}
#editor h3 {
  @apply text-xl;
}

#editor h4 {
  @apply text-lg;
}

#editor ul {
  @apply list-disc;
}

#editor ol {
  @apply list-decimal;
}
</style>
