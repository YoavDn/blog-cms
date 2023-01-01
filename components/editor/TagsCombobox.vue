<script setup lang="ts">
import type { Tag } from '.prisma/client'
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from '@headlessui/vue'
const emit = defineEmits<{ (e: 'updateTags', query: string): void }>()
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
          :displayValue="tag => tag.name"
          class="w-full py-2 px-4 text-sm outline-none placeholder:italic"
          placeholder="Add tags.."
          @change="updateTags"
        />
      </div>
      <ComboboxOptions
        class="ds-border absolute top-4 z-40 w-full rounded-md border bg-white p-2 shadow-sm"
      >
        <div
          v-if="tags.length === 0 && query !== ''"
          class="cursor-default select-none py-2 px-4 text-gray-700"
        >
          #{{ query }}
        </div>

        <ComboboxOption
          class="ds-border flex flex-col py-2 px-4 text-gray-700"
          v-for="tag in tags"
          :key="tag.id"
          :value="tag.name"
          as="prop"
          v-slot="{ selected, active }"
        >
          {{ tag.name }}
        </ComboboxOption>
      </ComboboxOptions>
    </Combobox>
  </div>
</template>
