<template>
      <q-header class="bg-white text-black" bordered>
        <q-toolbar>
          <slot name="left-button" />

          <q-toolbar-title>
            <slot name="title" />
          </q-toolbar-title>

          <slot name="right-button" />
        </q-toolbar>
        <slot />
      </q-header>
</template>
