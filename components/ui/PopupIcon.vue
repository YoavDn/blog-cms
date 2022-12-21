<script setup lang="ts">
import { ref } from 'vue'
import { TransitionRoot } from '@headlessui/vue'

const { isShowing, icon } = defineProps<{ isShowing: boolean; icon: string }>()
</script>

<template>
  <div
    class="h-9 w-9 z-10 rounded-full absolute right-0 translate-x-3 -translate-y-3"
  >
    <TransitionRoot
      appear
      :show="isShowing"
      as="template"
      enter="transform transition duration-200"
      enter-from="opacity-0 translate-y-2"
      enter-to="opacity-100  translate-y-0 "
      leave="transform duration-200 transition ease-in-out"
      leave-from="opacity-100  scale-100 "
      leave-to="opacity-0 scale-95 "
    >
      <div
        class="h-full w-full group/edit rounded-full border dark:bg-white border-black dark:border-neutral-700 bg-black shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-black"
      >
        <Icon
          :name="icon"
          class="text-gray-200 dark:text-black w-5 h-5 group-hover/edit:text-gray-800 dark:group-hover/edit:text-white"
        />
      </div>
    </TransitionRoot>
  </div>
</template>

<style lang="scss"></style>
