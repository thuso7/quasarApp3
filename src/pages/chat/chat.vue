<template>
  <page>
    <page-header>
      <template #left-button>
        <round-flat
         icon="menu"
        />
      </template>

      <template #title>
        <div class="text-center">
          OnChat
        </div>
      </template>

      <template #right-button>
        <round-flat
         icon="eva-search"
        />
      </template>
      <q-tabs
      dense
        indicator-color="primary"
        no-caps>

        <q-tab
         :ripple="false"
         name="mails"
         label="For you" />

        <q-tab
         :ripple="false"
         name="alarms"
         label="Groups" />
      </q-tabs>
    </page-header>

    <page-body>
      <p v-for="i in 50" :key="i">
        <div class="q-ma-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem magnam laboriosam dolorum natus totam cumque
          perspiciatis molestiae obcaecati? Natus quibusdam
           cumque quas laboriosam totam tempora eaque alias accusamus fugit dolores?
        </div>
       </p>
       <q-btn class="glossy" round color="secondary" icon="local_florist" />

    </page-body>

    <page-footer>
      <tabs />
    </page-footer>
  </page>
</template>

<script setup>
//
</script>
