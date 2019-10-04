import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/layout/Home.vue';
import Starships from './components/layout/Starships.vue';
import Characters from './components/layout/Characters.vue';
import Planets from './components/layout/Planets.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/starships',
      name: 'starships',
      component: Starships
    },
    {
      path: '/planets',
      name: 'planets',
      component: Planets
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters
    },
    {
      path: '/starship/:id',
      name: 'starship',
      component: () =>
        import(/* webpackChunkName: "starships" */ './components/views/Starship.vue')
    },
    {
      path: '/planet/:id',
      name: 'planet',
      component: () =>
        import(/* webpackChunkName: "starships" */ './components/views/Planet.vue')
    },
    {
      path: '/character/:id',
      name: 'character',
      component: () =>
        import(/* webpackChunkName: "character" */ './components/views/Character.vue')
    }
  ]
});
