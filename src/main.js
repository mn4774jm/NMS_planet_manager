import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'

import PlanetAPIService from '@/services/planetService'

//configure bootstrap
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Add API service to Vue prototype
Vue.prototype.$planetService = PlanetAPIService


new Vue({
  render: h => h(App),
}).$mount('#app')
