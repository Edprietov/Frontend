import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
import SuiVue from 'semantic-ui-vue'
import VueGoogleMap from 'vuejs-google-maps'
import dotenv from 'dotenv'

dotenv.config()

/* ... */

Vue.use(SuiVue);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(axios)
Vue.config.productionTip = false
Vue.use(VueGoogleMap, {
  load: {
    apiKey: process.env.VUE_APP_API_KEY,
    libraries: ['places']
  }
})


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')