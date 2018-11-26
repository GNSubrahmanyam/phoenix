import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from '@router'
import store from '@stores'
import * as filters from '@filters' // global filters
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
