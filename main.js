// #ifndef VUE3
import Vue from 'vue'
import App from './App'

// 导入网络请求包
import {
  $http
} from '@escook/request-miniprogram'
//挂载到顶级对象  
uni.$http = $http
// 请求根路径
$http.baseUrl = 'http://www.uinav.com'
// $http.baseUrl = 'https://www.uinav.com'
// 请求拦截器
$http.beforeRequest = function(options) {
  uni.showLoading({
    title: '数据加载中...'
  })
}
// 响应拦截器
$http.afterRequest = function(options) {
  uni.hideLoading()
}
// 封装的展示消息提示的方法
uni.$showMsg = function(title = '数据加载失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none',
  })
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
  createSSRApp
} from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
