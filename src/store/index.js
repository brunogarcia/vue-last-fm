import Vue from 'vue';
import Vuex from 'vuex';
import album from './album';
import albums from './albums';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    album,
    albums,
  },
});
