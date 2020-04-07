import api from '@/api';
import types from './types';
import mapTags from './mapTags';

const {
  SAVE_TAG,
  SAVE_TAGS,
  SAVE_TAG_INFO,
} = types;

export default {
  namespaced: true,

  state: {
    tag: null,
    tags: [],
    tagInfo: {},
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
     * Get tag info
     *
     * @param {Object} context - Vuex context
     * @param {Function} context.commit - Vuex commit
     * @param {String} payload - The tag for search
     */
    async getTagInfo({ commit }, payload) {
      try {
        const data = await api.fetchTagInfo(payload);
        commit(SAVE_TAG_INFO, data);
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
     * Save tag info
     *
     * @param {Object} state - Vuex state
     * @param {Object} payload - The data to store
     */
    [SAVE_TAG_INFO](state, payload) {
      state.tagInfo = payload;
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
     * Tag info
     *
     * @returns {Object} - The tag info stored
     */
    tagInfo: (state) => state.tagInfo.summary,

    /**
     * Tags
     *
     * @returns {Array<Object>} - The tags stored
     */
    tags: (state) => state.tags,
  },
};
