import Vue from 'vue'
import components from '@/unit/component/Component'
Object.keys(components).forEach((key) => {
  var name = key.replace(/(\w)/, (v) => v.toUpperCase())
  Vue.component('v' + name, components[key])
})