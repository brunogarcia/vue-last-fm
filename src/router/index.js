import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Albums',
    component: () => import(/* webpackChunkName: "album-list" */ '../views/Albums.vue'),
  },
  {
    path: '/album/:artist/:album',
    name: 'Album',
    component: () => import(/* webpackChunkName: "album-info" */ '../views/Album.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
