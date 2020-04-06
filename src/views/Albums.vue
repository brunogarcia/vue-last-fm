<template>
  <v-container>
    <AlbumsLoader v-if="loading" />
    <AlbumsComponent v-else />
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import AlbumsComponent from '@/components/Albums.vue';
import AlbumsLoader from '@/components/AlbumsLoader.vue';

export default {
  name: 'AlbumsView',

  components: {
    AlbumsLoader,
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
