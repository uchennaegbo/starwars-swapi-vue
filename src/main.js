import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import './assets/css/cosmo.bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App)
}).$mount('#app');
