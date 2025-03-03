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
import { useDrawerStore } from '../stores/drawer-store'

const { leftDrawerOpen } = useDrawerStore()

</script>
