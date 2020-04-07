import api from '@/api';
import types from './types';
import mapTags from './mapTags';

const { SAVE_TAG, SAVE_TAGS } = types;

export default {
  namespaced: true,

  state: {
    tag: null,
    tags: [],
  },

  actions: {
    /**
     * Save the tag selected
     *
     * @param {Object} context - Vuex context
     * @param {Function} context.commit - Vuex commit
     * @param {String} payload - The tag to store
     */
    async saveTagSelected({ commit }, payload) {
      try {
        commit(SAVE_TAG, payload);
        return true;
      } catch (error) {
        return error;
      }
    },

    /**
     * Get top tags
     *
     * @param {Object} context - Vuex context
     * @param {Function} context.commit - Vuex commit
     */
    async getTopTags({ commit }) {
      try {
        const data = await api.fetchTopTags();
        commit(SAVE_TAGS, mapTags(data));
        return true;
      } catch (error) {
        return error;
      }
    },
  },

  mutations: {
    /**
     * Save the tag selected
     *
     * @param {Object} state - Vuex state
     * @param {Object} payload - The tag to store
     */
    [SAVE_TAG](state, payload) {
      state.tag = payload;
    },

    /**
     * Save tags
     *
     * @param {Object} state - Vuex state
     * @param {Object} payload - The tags to store
     */
    [SAVE_TAGS](state, payload) {
      state.tags = payload;
    },
  },

  getters: {
    /**
     * Tag
     *
     * @returns {String} - The tag stored
     */
    tag: (state) => state.tag,

    /**
     * Tags
     *
     * @returns {Array<Object>} - The tags stored
     */
    tags: (state) => state.tags,
  },
};
