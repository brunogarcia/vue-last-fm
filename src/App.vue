<template>
  <v-app>
    <v-app-bar
      app
      color="red"
      dark
    >
      <div class="d-flex align-center">
        Last.fm
      </div>
    </v-app-bar>

    <v-content>
      <Albums />
    </v-content>
  </v-app>
</template>

<script>
import Albums from './views/Albums.vue';

export default {
  name: 'App',

  components: {
    Albums,
  },

  data: () => ({
    //
  }),
};
</script>
