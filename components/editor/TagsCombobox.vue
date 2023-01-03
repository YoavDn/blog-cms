<script setup lang="ts">
import type { Tag } from '.prisma/client'

import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from '@headlessui/vue'

const emit = defineEmits<{
  (e: 'updateTags', query: string): void
  (e: 'update:modelValue', tag: Tag): void
}>()
const props = defineProps<{
  modelValue: Tag[]
  tags: Tag[]
}>()
const selected = ref(props.modelValue)
const query = ref('')
// console.log(props)
function updateTags(event: any) {
  query.value = event.target.value
  emit('updateTags', query.value)
}

function compareTags(a: Tag, b: Tag) {
  return a.name.toLowerCase() === b.name.toLowerCase()
}
</script>

<template>
  <div class="relative my-2">
    <Combobox
      :modelValue="modelValue"
      @update:modelValue="(value : Tag) => emit('update:modelValue', value )
      "
      multiple
    >
      <div class="relative">
        <ComboboxInput
          as="input"
          :displayValue="(tag : any) => tag.name"
          v-model="query"
          class="w-full py-2 text-sm outline-none placeholder:italic dark:bg-neutral-900 dark:text-white"
          placeholder="Add tags.."
          @change="updateTags"
        />
      </div>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <ComboboxOptions
          class="ds-border absolute top-4 z-40 max-h-60 w-full overflow-auto rounded-md border bg-white p-2 shadow-sm dark:bg-black"
        >
          <div
            @click="$emit('addTag', { isNew: true, name: query })"
            v-if="tags.length === 0 && query !== ''"
            class="cursor-default select-none py-2 px-4 text-gray-700 dark:text-neutral-500"
          >
            #{{ query }}
          </div>

          <ComboboxOption
            class="ds-border flex cursor-pointer flex-col px-4 font-light text-gray-700 dark:text-neutral-500"
            v-for="tag in tags"
            :key="tag.id"
            :value="tag"
            as="prop"
            v-slot="{ selected, active }"
            :class="{ 'font-medium': selected, 'font-normal': !selected }"
          >
            <li
              class="relative cursor-default select-none list-none py-2 pl-10 pr-4 hover:bg-gray-50"
              :class="{
                'bg-gray-50': active,
                'text-gray-900': !active,
              }"
            >
              <span
                class="block truncate"
                :class="{ 'font-medium': selected, 'font-normal': !selected }"
              >
                {{ tag.name }}
              </span>
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </transition>
    </Combobox>
  </div>
</template>
