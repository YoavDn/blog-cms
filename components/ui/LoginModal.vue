<script setup lang="ts">
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from '@headlessui/vue'
const { data: session, signIn } = useSession()

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>

<template>
  <div class="">
    <button
      type="button"
      @click="openModal"
      class="rounded-md bg-blue-500 bg-opacity-20 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      Sign up
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              as="div"
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-xl text-center font-bold leading-6 text-gray-900"
              >
                BLOGGER'S KIT
              </DialogTitle>
              <div class="mt-2 w-full font-semibold">
                <button
                  type="button"
                  @click="signIn('google', { callbackUrl: '/dashboard' })"
                  class="w-full py-2 mt-2 rounded-md border-gray-500 border bg-white"
                >
                  <Icon name="logos:google-icon" class="w-3 y-3 mr-1" />
                  Login With Google
                </button>
                <button
                  type="button"
                  class="w-full mt-2 py-2 rounded-md text-white bg-twitter"
                >
                  <Icon name="mdi:twitter" class="fill-white w-4 h-4 mr-1" />
                  Login With Google
                </button>
                <button
                  type="button"
                  class="w-full mt-2 py-2 rounded-md text-white bg-github"
                >
                  <Icon name="mdi:github" class="fill-white w-4 h-4 mr-1" />
                  Login With Github
                </button>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Got it, thanks!
                </button>
              </div>
              <DialogDescription>
                <p class="text-center py-4 text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </DialogDescription>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style lang="scss"></style>
