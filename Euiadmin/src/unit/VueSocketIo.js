import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
Vue.use(new VueSocketIO({
  debug: false,
  // socket服务器端地址  
  connection: 'http://euiadmin.com:2120',
}))