<script setup lang="ts">
const { data: session } = useSession()
console.log(session.value?.user?.email)
</script>

<template>
  <div>
    <h2>header header</h2>
  </div>
</template>

<style lang="scss"></style>
