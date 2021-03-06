import Vue from 'vue';
import VueRouter from 'vue-router';
//import { TimelineMax } from 'gsap';

import App from './App.vue';
import Home from './Home.vue';
import Users from './About.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home},
  {path: '/about', component: Users}
]

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
