import firebase from 'firebase';
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Adgang',
      component: () => import(/* webpackChunkName: "about" */ './views/Adgang.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/intro',
      name: 'Klar til afgang',
      component: Home,
    },
    {
      path: '/tjekliste',
      name: 'Tak for tur',
      component: () => import(/* webpackChunkName: "about" */ './views/Tjekliste.vue'),
    },
    {
      path: '/login',
      name: 'Log ind',
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
