<template>
  <v-container>
    <AlbumsLoader v-if="loading" />
    <AlbumsComponent v-else />
  </v-container>
</template>

<script>
import isNil from 'lodash.isnil';
import { mapActions, mapGetters } from 'vuex';
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

  computed: {
    ...mapGetters({
      tag: 'tags/tag',
    }),
  },

  watch: {
    tag(value) {
      if (!isNil(value)) {
        this.loadData(value);
      }
    },
  },

  created() {
    this.loadData();
  },

  methods: {
    ...mapActions({
      getAlbums: 'albums/getAlbums',
    }),

    async loadData() {
      try {
        await this.getAlbums(this.tag);
      } catch (error) {
        // show snackbar
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
