import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import router from './router/index'

import './element/index'
// import 'element-ui/lib/theme-chalk/index.css'
// import { Message, Dialog, MessageBox } from 'element-ui'
Vue.config.productionTip = false
// Vue.use(Dialog)
// Vue.prototype.$message = Message
// Vue.prototype.$confirm = MessageBox.confirm

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
