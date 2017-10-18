import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/Index';
import Resume from '../components/Resume';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/mitchel-severe-resume',
      name: 'Resume',
      component: Resume,
    },
  ],
});
