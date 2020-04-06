<template>
  <v-row class="text-center">
    <v-col cols="12">
      {{ albums }}
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AlbumsComponent',

  computed: {
    ...mapGetters({
      albums: 'albums/albums',
    }),
  },
};
</script>
