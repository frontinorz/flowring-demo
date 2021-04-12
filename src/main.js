import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
import VueLogger from 'vuejs-logger'
import './quasar'

import '@/api/interceptors' //* axios攔截器

const isProduction = process.env.NODE_ENV === 'production'
const options = {
  isEnabled: true,
  logLevel: isProduction ? 'error' : 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true
}

Vue.config.productionTip = false

Vue.use(VueLogger, options)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
