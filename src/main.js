import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from "vant"
import Meta from "vue-meta"
import "vant/lib/index.css"

Vue.config.productionTip = false
Vue.use(Meta)
Vue.use(Vant)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')