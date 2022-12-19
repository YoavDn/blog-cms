<script setup lang="ts"></script>

<template>
  <div class="relative py-3 flex w-full">
    <div class="input-container basis-3/4 max-w-full h-10 flex items-center">
      <input
        type="text"
        placeholder="Search.."
        class="order-1 peer/input h-full bg-white ease-in-out duration-150 focus:border-gray-800 px-3 border-r border-t w-full rounded-r-md border-gray-200 border-b placeholder:font-light outline-none placeholder:text-sm"
      />
      <span
        class="h-full pl-3 text-gray-400 bg-white rounder-l-md border-l border-y ml-4 rounded-l-md peer-focus/input:border-gray-800 ease-in-out duration-150"
        ><Icon name="heroicons-solid:search" class="h-10 w-5 text-gray-400"
      /></span>
    </div>
    <div class="bg-white flex h-10 mx-2 border-collapse">
      <button
        class="border-l border border-gray-200 rounded-l-md px-2 hover:border-gray-800 ease-in-out duration-150"
      >
        <Icon name="heroicons:squares-2x2" class="h-10 w-5 text-gray-400" />
      </button>
      <button
        class="border-r border border-gray-200 rounded-r-md px-2 hover:border-gray-800 ease-in-out duration-150"
      >
        <Icon name="heroicons:list-bullet" class="h-10 w-5 text-gray-400" />
      </button>
    </div>
  </div>
</template>

<style lang="scss"></style>
