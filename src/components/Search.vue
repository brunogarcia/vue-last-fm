<template>
  <v-autocomplete
    v-model="select"
    :items="items"
    :search-input.sync="search"
    flat
    clearable
    cache-items
    class="mx-4"
    hide-no-data
    hide-details
    label="What music genre do you like more?"
  />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SearchComponent',

  data() {
    return {
      items: [],
      search: null,
    };
  },

  computed: {
    ...mapGetters({
      tag: 'tags/tag',
      tags: 'tags/tags',
    }),

    select: {
      get() {
        return this.tag;
      },
      set(value) {
        this.saveTagSelected(value);
      },
    },
  },

  watch: {
    search(value) {
      if (value && value !== this.select) {
        this.querySelections(value);
      }
    },
  },

  methods: {
    ...mapActions({
      saveTagSelected: 'tags/saveTagSelected',
    }),

    querySelections(v) {
      this.items = this.tags.filter((e) => (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1);
    },
  },
};
</script>
