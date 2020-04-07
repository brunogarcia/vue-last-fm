<template>
  <TagInfoComponent />
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TagInfoComponent from '@/components/TagInfo.vue';

export default {
  name: 'TagInfoView',

  components: {
    TagInfoComponent,
  },

  data: () => ({
    loading: true,
  }),

  computed: {
    ...mapGetters({
      tag: 'tags/tag',
    }),
  },

  created() {
    this.loadData();
  },

  methods: {
    ...mapActions({
      getTagInfo: 'tags/getTagInfo',
    }),

    async loadData() {
      try {
        await this.getTagInfo(this.tag);
      } catch (error) {
        // TODO: show snackbar
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
