<script setup lang="ts">
const props = defineProps<{ layout: 'grid' | 'list' }>()

function isActiveLayout(type: 'list' | 'grid') {
  return type === props.layout
}
</script>

<template>
  <div class="relative py-3 flex w-full flex items-center">
    <div class="input-container basis-9/12 max-w-full h-10 flex items-center">
      <input
        type="text"
        placeholder="Search.."
        class="order-1 peer/input h-full dark:text-white bg-white dark:bg-black ease-in-out duration-150 focus:border-gray-800 dark:focus:border-neutral-500 px-3 border-r border-t w-full rounded-r-md border-gray-200 dark:border-neutral-700 border-b placeholder:font-light outline-none placeholder:text-sm"
      />
      <span
        class="h-full pl-3 text-gray-400 bg-white dark:bg-black rounder-l-md border-l border-y rounded-l-md peer-focus/input:border-gray-800 dark:peer-focus/input:border-neutral-500 ease-in-out duration-150 dark:border-neutral-700"
        ><Icon name="heroicons-solid:search" class="h-10 w-5 text-gray-400"
      /></span>
    </div>
    <div
      class="flex h-10 mx-2 border-collapse basis-1/12 rounded-md justify-center"
      title="Switch between grid and list view"
    >
      <button
        @click="$emit('changeLayout', 'grid')"
        class="border-l border border-gray-200 dark:border-neutral-700 md:dark:hover:border-neutral-500 dark:bg-black rounded-l-md px-2 md:hover:border-gray-800 ease-in-out duration-150"
        :class="{ 'bg-gray-100 dark:bg-neutral-800': isActiveLayout('grid') }"
      >
        <Icon
          name="heroicons:squares-2x2"
          class="h-10 w-5 text-gray-400"
          :class="{ 'text-gray-900 dark:text-white': isActiveLayout('grid') }"
        />
      </button>
      <button
        @click="$emit('changeLayout', 'list')"
        class="border-r border border-gray-200 rounded-r-md px-2 dark:border-neutral-700 md:dark:hover:border-neutral-500 md:hover:border-gray-800 ease-in-out duration-150"
        :class="{ 'bg-gray-100 dark:bg-neutral-800': isActiveLayout('list') }"
      >
        <Icon
          name="heroicons:list-bullet"
          class="h-10 w-5 text-gray-400"
          :class="{ 'text-gray-900 dark:text-white': isActiveLayout('list') }"
        />
      </button>
    </div>
    <button
      class="group/new-post basis-2/12 h-10 dark:text-black dark:bg-white text-white dark:md:hover:text-white dark:md:hover:border-white dark:md:hover:bg-black md:hover:text-black md:hover:bg-white ease-in-out duration-150 md:hover:border-black border bg-black rounded-md text-start px-4 text-sm flex items-center justify-center md:justify-start"
    >
      <span class="pr-1 text-center"
        ><Icon
          name="heroicons:plus"
          class="h-12 w-4 text-white dark:text-black md:group-hover/new-post:text-black dark:md:group-hover/new-post:text-white ease-in-out duration-150"
      /></span>
      <span class="hidden md:block"> New Post </span>
    </button>
  </div>
</template>

<style lang="scss"></style>
