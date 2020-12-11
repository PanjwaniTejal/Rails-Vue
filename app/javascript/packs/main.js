
// import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue'
import App from '../app.vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueRouter)

document.addEventListener('DOMContentLoaded', () => {
  var element = document.getElementById('hello')

  const app = new Vue({
    router,
    render: h => h(App)
  }).$mount()

  element.appendChild(app.$el)
})
