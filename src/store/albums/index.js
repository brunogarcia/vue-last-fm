import api from '@/api';
import types from './types';

const { SAVE_ALBUMS } = types;

export default {
  namespaced: true,
  state: {
    albums: [],
  },
  actions: {
    /**
     * Get albums
     *
     * @param {Object} context - Vuex context
     * @param {Function} context.commit - Vuex commit
     */
    async getAlbums({ commit }) {
      try {
        const { album } = await api.fetchAlbums();
        commit(SAVE_ALBUMS, album);
        return true;
      } catch (error) {
        return error;
      }
    },
  },
  mutations: {
    /**
     * Save albums
     *
     * @param {Object} state - Vuex state
     * @param {Object} payload - The albums to store
     */
    [SAVE_ALBUMS](state, payload) {
      state.albums = payload;
    },
  },
  getters: {
    /**
     * Albums
     *
     * @returns {Array<Object>} - The albums stored
     */
    albums: (state) => state.albums,
  },
};
