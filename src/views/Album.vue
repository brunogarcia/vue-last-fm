<template>
  <v-container>
    <AlbumLoader v-if="loading" />
    <AlbumComponent v-else />
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import AlbumComponent from '@/components/Album.vue';
import AlbumLoader from '@/components/AlbumLoader.vue';

export default {
  name: 'AlbumView',

  components: {
    AlbumLoader,
    AlbumComponent,
  },

  data: () => ({
    loading: true,
  }),

  created() {
    this.loadData();
  },
  methods: {
    ...mapActions({
      getAlbum: 'album/getAlbum',
    }),

    async loadData() {
      const { artist, album } = this.$route.params;

      console.log('artist', artist);
      console.log('album', album);

      try {
        await this.getAlbum({ artist, album });
      } catch (error) {
        // show snackbar
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
