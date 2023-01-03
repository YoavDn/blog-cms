<script setup lang="ts">
import type { Tag } from '.prisma/client'

import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from '@headlessui/vue'

type addTagType = {
  isNew: boolean
  toRemove?: boolean
  tag?: Tag
  name?: string
}

const emit = defineEmits<{
  (e: 'updateTags', query: string): void
  (e: 'addTag', options: addTagType): void
}>()
const props = defineProps<{
  tags: Tag[]
}>()
const selected = ref(props.tags)
const query = ref('')
// console.log(props)
function updateTags(event: any) {
  query.value = event.target.value
  emit('updateTags', query.value)
}
</script>

<template>
  <div class="relative my-2">
    <Combobox v-model="selected" multiple>
      <div class="relative">
        <ComboboxInput
          as="input"
          v-model="query"
          class="w-full py-2 text-sm outline-none placeholder:italic dark:bg-neutral-900 dark:text-white"
          placeholder="Add tags.."
          @change="updateTags"
        />
      </div>
      <ComboboxOptions
        class="ds-border absolute top-4 z-40 w-full rounded-md border bg-white p-2 shadow-sm dark:bg-black"
      >
        <div
          @click="$emit('addTag', { isNew: true, name: query })"
          v-if="tags.length === 0 && query !== ''"
          class="cursor-default select-none py-2 px-4 text-gray-700 dark:text-neutral-500"
        >
          #{{ query }}
        </div>

        <ComboboxOption
          class="ds-border flex flex-col py-2 px-4 font-light text-gray-700 dark:text-neutral-500"
          v-for="tag in tags"
          :key="tag.id"
          :value="tag.name"
          as="prop"
          v-slot="{ selected, active }"
          @click="$emit('addTag', { isNew: false, tag })"
        >
          {{ tag.name }}
        </ComboboxOption>
      </ComboboxOptions>
    </Combobox>
  </div>
</template>
