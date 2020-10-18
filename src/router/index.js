import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    // name: 'Layout',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/tv',
        name: 'TV',
        component: () => import('../views/TV.vue'),
      },
      {
        path: '/movie',
        name: 'Movie',
        component: () => import('../views/Movie.vue'),
      },
      {
        path: '/latest',
        name: 'Latest',
        component: () => import('../views/Latest.vue'),
      },
      {
        path: '/mylist',
        name: 'MyList',
        component: () => import('../views/MyList.vue'),
      },
      {
        path: '/kids',
        name: 'Kids',
        component: () => import('../views/Kids.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
