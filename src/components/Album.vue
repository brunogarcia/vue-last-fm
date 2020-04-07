<template>
  <v-container fluid>
    {{ album }}
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

const SMALL = 'small';
const EXTRA_LARGE = 'extralarge';

export default {
  name: 'AlbumComponent',

  computed: {
    ...mapGetters({
      album: 'album/album',
    }),
  },

  methods: {
    /**
     * Get small image
     *
     * @param {Array<Object} images - The image list
     * @returns {String}
     */
    getSmallImage(images) {
      const data = images.find((image) => image.size === SMALL);
      return data['#text'];
    },

    /**
     * Get extra-large image
     *
     * @param {Array<Object} images - The image list
     * @returns {String}
     */
    getExtraLargeImage(images) {
      const data = images.find((image) => image.size === EXTRA_LARGE);
      return data['#text'];
    },
  },
};
</script>
