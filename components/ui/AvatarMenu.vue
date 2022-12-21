<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
const { data: session, signOut } = useSession()
const colorMode = useColorMode()
</script>

<template>
  <Menu as="div" class="relative z-50 inline-block text-left">
    <MenuButton class="text-black">
      <img
        v-if="session?.user?.image"
        :src="session.user?.image"
        alt=""
        class="w-7 h-7 rounded-full border border-gray-300 dark:border-neutral-700"
      />
      <div
        v-else
        class="w-7 h-7 rounded-full border border-gray-300 dark:border-neutral-700 bg-gradient-to-tl from-cyan-500 to-blue-500"
      ></div>
    </MenuButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute z-30 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-black shadow-lg ring-1 dark:ring-neutral-700 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <NuxtLink
              to="/dashboard"
              :class="[
                active
                  ? 'bg-gray-100 dark:bg-neutral-900 text-gray-900  dark:text-white'
                  : 'text-gray-700 dark:text-neutral-500',
                'group flex w-full border-b dark:border-neutral-700 items-center  px-4 py-4 text-sm',
              ]"
            >
              Dashboard
            </NuxtLink>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <NuxtLink
              to="/user"
              :class="[
                active
                  ? 'bg-gray-100 dark:bg-neutral-900 text-gray-900  dark:text-white'
                  : 'text-gray-700 dark:text-neutral-500',
                'group flex w-full  items-center  px-4 py-4 text-sm',
              ]"
            >
              Profile Info
            </NuxtLink>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active
                  ? 'bg-gray-100 dark:bg-neutral-900 text-gray-900  dark:text-white'
                  : 'text-gray-700 dark:text-neutral-500',
                'group flex w-full  items-center  px-4 py-4 text-sm',
              ]"
            >
              Feedback
            </button>
          </MenuItem>
          <div
            class="group flex w-full items-center px-4 py-4 text-sm dark:text-neutral-500 dark:hover:bg-neutral-900 dark:hover:text-white hover:bg-gray-100 hover:text-gray-900 text-gray-700 border-y dark:border-neutral-700 border-gray-200"
          >
            <div class="flex items-center gap-4">
              <label for="theme-select">Theme:</label>
              <select
                name=""
                id="theme-select"
                v-model="colorMode.preference"
                class="border border-gray-200 px-2 py-1 rounded-md dark:border-neutral-700 dark:bg-black dark:text-white"
              >
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
          </div>
          <MenuItem v-slot="{ active }">
            <button
              @click="signOut({ redirect: true, callbackUrl: '/' })"
              :class="[
                active
                  ? 'bg-gray-100 dark:bg-neutral-900 text-gray-900  dark:text-white'
                  : 'text-gray-700 dark:text-neutral-500',
                'group flex w-full  items-center  px-4 py-4 text-sm',
              ]"
            >
              Logout
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<style lang="scss"></style>
