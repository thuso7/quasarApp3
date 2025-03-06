<template>
   <q-tabs
        v-model="tab"
        no-caps
        indicator-color="transparent"
      >
        <q-route-tab
         to="/"
         name="chats"
         :ripple="false"
         :icon="tab === 'chats' ? 'mdi-chat' : 'mdi-chat-outline'"
         >
          <!-- content -->
         </q-route-tab>

        <q-tab name="alarms" icon="eva-search" />
        <q-tab name="movies" icon="movie" />
        <q-tab name="movies" icon="movie" />

      </q-tabs>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('chats')
</script>
