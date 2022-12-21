<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <p class="dark:text-white">
    {{ $route.params.users }} - {{ $route.params.id }}
  </p>
</template>

<style lang="scss"></style>
