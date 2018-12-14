// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

const {
  Mock
} = require('mockjs')
/*
const {
  data
} = require('../test/mock/oredr-detail') */
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

Mock.mock(/\.json/, {
  'list|1-10': [{
    'id|+1': 1,
    'email': '@EMAIL'
  }]
})
console.log(process.cwd())

// test
/*
for (let key in data) {
  Mock.mock(RegExp('.*?' + key + '.*?'), data[key])
}
*/
