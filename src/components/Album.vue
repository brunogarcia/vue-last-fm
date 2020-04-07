<template>
  <v-card class="mx-auto">
    <v-img
      class="white--text align-end"
      height="400px"
      :src="getExtraLargeImage()"
    >
      <v-card-title>{{ album.name }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      {{ album.artist }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div class="text-left mt-4 mb-4">
        <v-chip
          v-for="(tag, index) in album.tags.tag"
          :key="index"
          small
          class="mr-2"
          color="primary"
          text-color="white"
        >
          <v-avatar left>
            <v-icon>mdi-label</v-icon>
          </v-avatar>
          {{ tag.name }}
        </v-chip>
      </div>

      <p v-html="getSummary(album.wiki)" />

      <v-list two-line>
        <v-list-item
          v-for="(track, index) in album.tracks.track"
          :key="index"
        >
          <v-list-item-icon>
            <v-icon color="primary">
              mdi-music
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ track.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ getDuration(track.duration) }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import getImage from '@/utils/getImage';
import constants from '@/utils/constants';

const { EXTRA_LARGE } = constants.IMAGES;

export default {
  name: 'AlbumComponent',

  computed: {
    ...mapGetters({
      album: 'album/album',
    }),
  },

  methods: {
    /**
     * Get extra-large image
     *
     * @returns {String}- The album extra-large image
     */
    getExtraLargeImage() {
      return getImage(this.album.image, EXTRA_LARGE);
    },

    /**
     * Get album summary
     *
     * @param {Object} wiki - The wiki data
     * @returns {String} - The album summary
     */
    getSummary(wiki) {
      if (!wiki) {
        return '';
      }

      const { summary } = wiki;
      return summary;
    },

    /**
     * Get duration of a track on minutes and seconds. Example: 03:55
     *
     * @param {String} duration - The track duration on seconds
     * @returns {String} - The track duration on minutes and seconds
     */
    getDuration(duration) {
      const minutes = Math.floor(duration / 60);
      const seconds = duration - minutes * 60;

      if (seconds < 10) {
        return `${minutes}:0${seconds}`;
      }

      return `${minutes}:${seconds}`;
    },
  },
};
</script>
