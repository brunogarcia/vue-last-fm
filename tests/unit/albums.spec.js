import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import Albums from '@/components/Albums.vue';

const localVue = createLocalVue();

Vue.use(Vuetify);

localVue.use(Vuex);

describe('Albums.vue', () => {
  let getters;
  let store;
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
    getters = {
      albums: () => ({
        name: 'The Perfect Red Velvet - The 2nd Album Repackage',
        mbid: '',
        url: 'https://www.last.fm/music/Red+Velvet',
        artist: {
          name: 'Red Velvet',
          mbid: '4f0cb3b7-6c06-4317-ae35-ddf3106a17ee',
          url: 'https://www.last.fm/music/Red+Velvet',
        },
        image: [
          {
            '#text': 'https://lastfm.freetls.fastly.net/i/u/34s/d31c361f1d65a46ed1d6aeaa99a23b9a.png',
            size: 'small',
          },
          {
            '#text': 'https://lastfm.freetls.fastly.net/i/u/64s/d31c361f1d65a46ed1d6aeaa99a23b9a.png',
            size: 'medium',
          },
          {
            '#text': 'https://lastfm.freetls.fastly.net/i/u/174s/d31c361f1d65a46ed1d6aeaa99a23b9a.png',
            size: 'large',
          },
          {
            '#text': 'https://lastfm.freetls.fastly.net/i/u/300x300/d31c361f1d65a46ed1d6aeaa99a23b9a.png',
            size: 'extralarge',
          },
        ],
        '@attr': {
          rank: '1',
        },
      }),
    };

    store = new Vuex.Store({
      modules: {
        albums: {
          namespaced: true,
          getters,
        },
      },
    });
  });

  it('Renders correctly', () => {
    const wrapper = shallowMount(Albums, {
      store,
      localVue,
      vuetify,
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
