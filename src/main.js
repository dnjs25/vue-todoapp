import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'

new Vue({
  el: '#app',
  // 축약 가능
  store,
  render: h => h(App)
})
