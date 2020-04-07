<template>
  <v-card-text>
    <div>Genre</div>
    <p class="display-1 text--primary">
      {{ tag }}
    </p>
    <p
      class="text--primary"
      v-html="tagInfo"
    />
  </v-card-text>
</template>

<script>
import isNil from 'lodash.isnil';
import { mapGetters } from 'vuex';

export default {
  name: 'TagInfoComponent',

  computed: {
    ...mapGetters({
      tag: 'tags/tag',
      tagInfo: 'tags/tagInfo',
    }),
  },

  methods: {
    getSummary() {
      return isNil(this.tagInfo) ? '' : this.tagInfo;
    },
  },
};
</script>
