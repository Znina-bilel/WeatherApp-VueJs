// src/main.js
import Vue from 'vue';  // Importation de Vue 2.x
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
