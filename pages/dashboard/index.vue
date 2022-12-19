<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  layout: 'default',
})

const { status } = useSession()
</script>

<template>
  <div class="">
    <DashboardSearchBar />
  </div>
</template>

<style lang="scss"></style>
