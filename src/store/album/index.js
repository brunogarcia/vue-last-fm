import api from '@/api';
import types from './types';

const { SAVE_ALBUM } = types;

export default {
  namespaced: true,
  state: {
    album: {},
  },
  actions: {
    /**
     * Get album
     *
     * @param {Object} context - Vuex context
     * @param {Function} context.commit - Vuex commit
     * @param {Object} payload - The payload request
     * @param {String} payload.artist - The artist name
     * @param {String} payload.album - The album name
     */
    async getAlbum({ commit }, payload) {
      try {
        const data = await api.fetchAlbumInfo(payload);
        commit(SAVE_ALBUM, data);
        return true;
      } catch (error) {
        return error;
      }
    },
  },
  mutations: {
    /**
     * Save album
     *
     * @param {Object} state - Vuex state
     * @param {Object} payload - The album to store
     */
    [SAVE_ALBUM](state, payload) {
      state.album = payload;
    },
  },
  getters: {
    /**
     * Album
     *
     * @returns {Array<Object>} - The album stored
     */
    album: (state) => state.album,
  },
};
