// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store/'


Vue.use(MintUI);


FastClick.attach(document.body);
router.beforeEach(function(to, from, next) {
    store.dispatch('updateLoadingStatus', { isLoading: true })
    console.log("==========")
    next()
})
Vue.config.productionTip = false
router.afterEach(function(to) {
    store.dispatch('updateLoadingStatus', { isLoading: false })
})



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})