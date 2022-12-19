<script setup lang="ts"></script>

<template>
  <div class="relative my-4 flex w-full">
    <div class="input-container basis-3/4 max-w-full h-10 flex items-center">
      <input
        type="text"
        placeholder="Search.."
        class="order-1 peer/input h-full ease-in-out duration-150 focus:border-gray-800 px-3 border-r border-t w-full rounded-r-md border-gray-200 border-b placeholder:font-light outline-none placeholder:text-sm"
      />
      <span
        class="h-full pl-3 text-gray-400 rounder-l-md border-l border-y ml-4 rounded-l-md peer-focus/input:border-gray-800 ease-in-out duration-150"
        ><Icon name="heroicons-solid:search" class="h-10 w-5 text-gray-400"
      /></span>
    </div>
    <button>hello</button>
  </div>
</template>

<style lang="scss"></style>
