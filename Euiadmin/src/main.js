import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import '@/assets/EuiAdmin.css'
import '@/unit/VueSocketIo'
import './unit/component/Index'
Vue.prototype.$echarts = echarts
Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')