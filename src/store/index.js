import Vue from 'vue';
import Vuex from 'vuex';
import tags from './tags';
import album from './album';
import albums from './albums';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tags,
    album,
    albums,
  },
});
