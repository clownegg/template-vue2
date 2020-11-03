import Vue from 'vue';
import { App } from '@/app';
import router from './router';
import store from './store';
import '@/plugins';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // eslint-disable-next-line
  render: h => h(App),
}).$mount('#app');
