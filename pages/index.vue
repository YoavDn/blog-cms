<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'
const enabled = ref(false)

const isOpen = ref(true)

function closeModal() {
  console.log('hello')
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>

<template>
  <h2>hello world</h2>
</template>

<style lang="scss"></style>
