<script setup lang="ts">
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import { emit } from 'process'
defineProps<{ isOpen: boolean }>()
defineEmits<{ (e: 'updateBlog'): void }>()
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="$emit('closeLinkModal')" class="relative z-40">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="ds-border flex transform items-center gap-4 overflow-hidden rounded-md border bg-white p-2 px-3 transition-all dark:bg-black"
            >
              <input
                type="text"
                placeholder="Enter link url.."
                class="text-xl focus:outline-none dark:bg-black dark:text-white"
                :value="linkUrl"
                @input="$emit('update:linkUrl', $event.target.value)"
              />

              <div>
                <button
                  type="button"
                  class="ds-border rounded-md border bg-black p-2 text-white dark:bg-white dark:text-black"
                  @click="$emit('setLink')"
                >
                  Set Link
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style lang="scss"></style>
