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
         label="Chats">
          <!-- content -->
         </q-route-tab>

        <q-tab name="alarms" icon="alarm" label="Alarms" />
        <q-tab name="movies" icon="movie" label="Movies" />
        <q-tab name="movies" icon="movie" label="Movies" />

      </q-tabs>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('chats')
</script>
