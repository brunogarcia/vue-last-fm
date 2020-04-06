<template>
  <v-container>
    <AlbumsComponent v-if="!loading" />
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import AlbumsComponent from '@/components/Albums.vue';

export default {
  name: 'AlbumsView',

  components: {
    AlbumsComponent,
  },

  data: () => ({
    loading: true,
  }),

  created() {
    this.loadData();
  },
  methods: {
    ...mapActions({
      getAlbums: 'albums/getAlbums',
    }),

    async loadData() {
      try {
        await this.getAlbums();
      } catch (error) {
        // show snackbar
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
