<template>
  <v-card
    class="mx-auto mt-4"
    max-width="500"
    outlined
  >
    <v-list-item>
      <v-list-item-content>
        <div class="overline mb-4">
          About
        </div>
        <v-list-item-title class="headline mb-4">
          Bruno Garcia
        </v-list-item-title>

        <v-list-item-subtitle>
          <p>A small project made with Vue and the API of Last.fm</p>
          <p>Created with Vue ecosystem: Vuex, Vue Router and Vuetify</p>
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      >
        <v-img src="/avatar.jpg" />
      </v-list-item-avatar>
    </v-list-item>

    <v-list-item>
      Last.fm resources
    </v-list-item>

    <v-list-item class="mb-4">
      <ul>
        <li>
          <v-btn
            small
            text
            target="_blank"
            href="https://www.last.fm/api/show/album.getInfo"
          >
            Album: get info
          </v-btn>
        </li>
        <li>
          <v-btn
            small
            text
            target="_blank"
            href="https://www.last.fm/api/show/tag.getInfo"
          >
            Tag: get info
          </v-btn>
        </li>
        <li>
          <v-btn
            small
            text
            target="_blank"
            href="https://www.last.fm/api/show/tag.getTopTags"
          >
            Tag: get top tags
          </v-btn>
        </li>
        <li>
          <v-btn
            small
            text
            target="_blank"
            href="https://www.last.fm/api/show/artist.getTopAlbums"
          >
            Artist: get top albums
          </v-btn>
        </li>
      </ul>
    </v-list-item>

    <v-card-actions>
      <v-btn
        small
        color="primary"
        target="_blank"
        href="https://github.com/brunogarcia/vue-last-fm"
      >
        <v-icon
          small
          left
        >
          mdi-github
        </v-icon>
        Github
      </v-btn>

      <v-btn
        small
        color="primary"
        target="_blank"
        href="https://www.linkedin.com/in/bruno-garcia-echegaray/"
      >
        <v-icon
          small
          left
        >
          mdi-linkedin
        </v-icon>
        Linkedin
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
