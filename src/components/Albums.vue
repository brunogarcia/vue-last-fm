<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      md="8"
      offset-sm="3"
      offset-md="2"
    >
      <v-card>
        <v-container fluid>
          <v-row>
            <v-col
              v-for="(album, index) in albums"
              :key="index"
              class="d-flex child-flex"
              cols="4"
            >
              <v-card
                flat
                tile
                class="d-flex"
              >
                <v-img
                  :src="getExtraLargeImage(album.image)"
                  :lazy-src="getSmallImage(album.image)"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
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
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AlbumsComponent',

  computed: {
    ...mapGetters({
      albums: 'albums/albums',
    }),
  },

  methods: {
    getSmallImage(image) {
      const [small] = image;
      return small['#text'];
    },

    getExtraLargeImage(image) {
      const [, , , extralarge] = image;
      return extralarge['#text'];
    },
  },

  /**
    {
      "name": "The Perfect Red Velvet - The 2nd Album Repackage",
      "mbid": "",
      "url": "https://www.last.fm/music/Red+Velvet",
      "artist": {
        "name": "Red Velvet",
        "mbid": "4f0cb3b7-6c06-4317-ae35-ddf3106a17ee",
        "url": "https://www.last.fm/music/Red+Velvet"
      },
      "image": [
        {
          "#text": "https://lastfm.freetls.fastly.net/i/u/34s/d31c361f1d65a46ed1d6aeaa99a23b9a.png",
          "size": "small"
        },
        {
          "#text": "https://lastfm.freetls.fastly.net/i/u/64s/d31c361f1d65a46ed1d6aeaa99a23b9a.png",
          "size": "medium"
        },
        {
          "#text": "https://lastfm.freetls.fastly.net/i/u/174s/d31c361f1d65a46ed1d6aeaa99a23b9a.png",
          "size": "large"
        },
        {
          "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/d31c361f1d65a46ed1d6aeaa99a23b9a.png",
          "size": "extralarge"
        }
      ],
      "@attr": {
        "rank": "1"
      }
    }
   */
};
</script>
