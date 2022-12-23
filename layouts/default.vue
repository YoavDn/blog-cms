<template>
  <div>
    <DashboardHeader />
    <Nav />
    <main class="bg-gray-50 dark:bg-neutral-900 min-h-screen">
      <div class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>
  </div>
</template>
