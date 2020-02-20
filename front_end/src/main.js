import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'

import LightBootstrap from './light-bootstrap'

Vue.use(BootstrapVue)
Vue.use(LightBootstrap)

Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  linkActiveClass: 'nav-item active',
  render: h => h(App),
}).$mount('#app')
