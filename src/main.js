import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VuexStore from './store/store'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.config.performance = true

Vue.use(Vuex)

const store = new Vuex.Store(VuexStore)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
