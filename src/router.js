import Vue from 'vue';
import Router from 'vue-router';
import Layout from './views/Layout.vue'

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/dashboard'
  },
  {
    name: 'login',
    component: () => import('./views/Login.vue'),
    meta: {
      title: 'Log in'
    }
  },
  {
    name: 'register',
    component: () => import('./views/Register.vue'),
    meta: {
      title: 'Registration Page'
    }
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/dashboard', component: () => import('./views/Dashboard.vue'),
        meta: {
          title: 'Dashboard'
        }
      },
      {
        path: '/tables', component: () => import('./views/Tables.vue'),
        meta: {
          title: 'Tables'
        }
      },
    ]
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
