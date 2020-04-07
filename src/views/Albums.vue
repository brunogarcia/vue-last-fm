<template>
  <v-container>
    <AlbumsLoader v-if="loading" />
    <AlbumsComponent v-else>
      <template v-slot:tag-info>
        <TagInfo />
      </template>
    </AlbumsComponent>
  </v-container>
</template>

<script>
import isNil from 'lodash.isnil';
import { mapActions, mapGetters } from 'vuex';
import TagInfo from '@/views/TagInfo.vue';
import AlbumsComponent from '@/components/Albums.vue';
import AlbumsLoader from '@/components/AlbumsLoader.vue';

export default {
  name: 'AlbumsView',

  components: {
    TagInfo,
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
        // TODO: show snackbar
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
