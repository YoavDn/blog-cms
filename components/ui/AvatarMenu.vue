<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
const { data: session, signOut } = useSession()
</script>

<template>
  <Menu as="div" class="relative z-40 inline-block text-left">
    <MenuButton class="text-black">
      <img
        v-if="session?.user?.image"
        :src="session.user?.image"
        alt=""
        class="w-7 h-7 rounded-full border border-gray-300"
      />
      <div
        v-else
        class="w-7 h-7 rounded-full border border-gray-300 bg-gradient-to-tl from-cyan-500 to-blue-500"
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
        class="absolute z-30 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <NuxtLink
              to="/dashboard"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'group flex w-full border-b items-center  px-4 py-4 text-sm',
              ]"
            >
              Dashboard
            </NuxtLink>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <NuxtLink
              to="/user"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'group flex w-full  items-center  px-4 py-4 text-sm',
              ]"
            >
              Profile Info
            </NuxtLink>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'group flex w-full  items-center  px-4 py-4 text-sm',
              ]"
            >
              Feedback
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              @click="signOut()"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
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
