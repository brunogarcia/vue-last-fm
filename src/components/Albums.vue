<template>
  <v-row>
    <v-col
      cols="12"
      lg="8"
      offset-lg="2"
    >
      <!--Album List-->
      <v-card>
        <v-container fluid>
          <v-card-text>
            <div>Genre</div>
            <p class="display-1 text--primary">
              {{ tag }}
            </p>
          </v-card-text>
          <v-row>
            <v-col
              v-for="(album, index) in albums"
              :key="index"
              class="d-flex child-flex"
              cols="12"
              sm="6"
              lg="4"
            >
              <!--Album Image-->
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card
                    flat
                    tile
                    class="d-flex"
                  >
                    <!--Image-->
                    <v-img
                      :src="getExtraLargeImage(album.image)"
                      :lazy-src="getSmallImage(album.image)"
                      aspect-ratio="1"
                      class="grey lighten-2"
                    >
                      <!--Overlay-->
                      <v-fade-transition>
                        <v-overlay
                          v-if="hover"
                          absolute
                          color="#036358"
                        >
                          <v-btn :to="getAlbumLink(album)">
                            See more info
                          </v-btn>
                        </v-overlay>
                      </v-fade-transition>

                      <!--Image placeholder-->
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          />
                        </v-row>
                      </template>
                    </v-img>
                  </v-card>
                </template>
              </v-hover>
              <!--end Album Image-->
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <!--end Album List-->
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import getImage from '@/utils/getImage';
import constants from '@/utils/constants';

const { SMALL, EXTRA_LARGE } = constants.IMAGES;

export default {
  name: 'AlbumsComponent',

  computed: {
    ...mapGetters({
      tag: 'tags/tag',
      albums: 'albums/albums',
    }),
  },

  methods: {
    /**
     * Get album link
     *
     * @param {Object} album - The album data
     * @returns {String} - The album link
     */
    getAlbumLink(album) {
      const { name: albumName, artist } = album;
      const { name: artistName } = artist;

      return `/album/${artistName}/${albumName}`;
    },

    /**
     * Get small image
     *
     * @param {Array<Object} images - The image list
     * @returns {String} - The album small image
     */
    getSmallImage(images) {
      return getImage(images, SMALL);
    },

    /**
     * Get extra-large image
     *
     * @param {Array<Object} images - The image list
     * @returns {String}- The album extra-large image
     */
    getExtraLargeImage(images) {
      return getImage(images, EXTRA_LARGE);
    },
  },
};
</script>
