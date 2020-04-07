<template>
  <v-container>
    <Search />
    <Albums v-if="displayAlbums" />
  </v-container>
</template>

<script>
import isNil from 'lodash.isnil';
import { mapGetters } from 'vuex';
import Search from '@/views/Search.vue';
import Albums from '@/views/Albums.vue';

export default {
  name: 'HomeView',

  components: {
    Search,
    Albums,
  },

  computed: {
    ...mapGetters({
      tag: 'tags/tag',
    }),

    displayAlbums() {
      return !isNil(this.tag);
    },
  },
};
</script>
