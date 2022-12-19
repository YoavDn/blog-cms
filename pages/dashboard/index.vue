<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  layout: 'default',
})

const { status } = useSession()
</script>

<template>
  <div>
    <DashboardSearchBar />
  </div>
</template>

<style lang="scss"></style>
