<template>
  <v-container>
    <SearchComponent v-if="!loading" />
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import SearchComponent from '@/components/Search.vue';

export default {
  name: 'SearchView',

  components: {
    SearchComponent,
  },

  data: () => ({
    loading: true,
  }),

  created() {
    this.loadData();
  },
  methods: {
    ...mapActions({
      getTopTags: 'tags/getTopTags',
    }),

    async loadData() {
      try {
        await this.getTopTags();
      } catch (error) {
        // show snackbar
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
