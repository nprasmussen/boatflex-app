import firebase from 'firebase';
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Home,
    },
    {
      path: '/adgang',
      name: 'Adgang',
      component: () => import(/* webpackChunkName: "about" */ './views/Adgang.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/tjekliste',
      name: 'Tjekliste',
      component: () => import(/* webpackChunkName: "about" */ './views/Tjekliste.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue'),
    },
    {
      path: '/sails',
      name: 'sails',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Sails.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './components/Login.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next('login');
  } else {
    next();
  }
});

export default router;
