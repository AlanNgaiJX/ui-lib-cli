import Vue from 'vue'
import App from './App.vue'

import DVU3 from 'xx-ui'
Vue.use(DVU3)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
