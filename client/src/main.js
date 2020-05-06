import Vue from 'vue'
import App from './App.vue'

// Import VueRouter library, and the apps route
import VueRouter from 'vue-router'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import PlanetAPIService from '@/services/planetService'

Vue.use(VueRouter) // Use VueRouter

//configure bootstrap
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Add API service to Vue prototype
Vue.prototype.$planetService = PlanetAPIService


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
