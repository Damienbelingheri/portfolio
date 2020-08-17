import Vue from 'vue'
import App from './App.vue'
import VueCardCarousel from "vue-card-carousel";

import router from './router'

Vue.use(VueCardCarousel)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')