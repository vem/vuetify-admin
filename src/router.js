import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    name: 'login',
    component: () => import('./pages/Login.vue'),
    meta: {
      title: 'Log in'
    }
  },
  {
    name: 'register',
    component: () => import('./pages/Register.vue'),
    meta: {
      title: 'Registration Page'
    }
  },
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
