<template>
  <v-row>
    <v-col
      cols="12"
      lg="6"
      offset-lg="3"
    >
      <v-autocomplete
        v-model="select"
        :items="items"
        :search-input.sync="search"
        :hint="items.length > 0 ? '' : 'Eg: post-rock, death metal, indie, electronic'"
        flat
        clearable
        cache-items
        class="mx-4"
        hide-no-data
        persistent-hint
        label="What music genre do you like more?"
      />
    </v-col>
  </v-row>
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
