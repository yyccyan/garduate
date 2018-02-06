// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/base.css' /*引入公共样式*/

/* Vuex状态管理 */
import store from './store'

import { format } from './format'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.filter('currency', format)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
