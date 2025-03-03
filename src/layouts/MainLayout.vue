<template>
  <q-layout view="lHh Lpr lFf">

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      show-if-above
      bordered>

      <!-- content -->
    </q-drawer>

    <q-drawer show-if-above side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
//
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>
