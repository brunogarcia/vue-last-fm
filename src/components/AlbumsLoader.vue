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
              v-for="item in 12"
              :key="item"
              class="d-flex child-flex"
              cols="4"
            >
              <v-card
                flat
                tile
              >
                <v-skeleton-loader
                  class="mx-auto"
                  type="image"
                />
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>
