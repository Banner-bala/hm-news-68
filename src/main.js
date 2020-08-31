import Vue from 'vue'
import App from './App.vue'
import router from './router'
import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo.vue'
import HmNavitem from './components/HmNavitem.vue'
import moment from 'moment'

// 导入通用样式
import './style/base.less'
import './style/iconfont.css'
// 全局导入 vant插件
import Vant, { Toast } from 'vant'
import 'vant/lib/index.css'
// 引入rem适配插件 —— amfe-flexible
import 'amfe-flexible'
// 将axios 引入 + 挂载 到vue原型上
import axios from 'axios'
Vue.prototype.$axios = axios
// 给axios配置默认 baseURL (基准地址)
axios.defaults.baseURL = 'http://localhost:3000'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  // console.log('相应拦截器', config)
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
  return config
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  // console.log('相应拦截器', response)
  const { statusCode, message } = response.data
  if (statusCode === 401 && message === '用户信息验证失败') {
    // 1. 跳转至login页面
    // 2. 错误信息提示
    // 3. 删除无效的 token + id
    router.push('/login')
    Toast(message) // 按需引入vant时， 需额外引入Toast
    localStorage.removeItem('token')
    localStorage.removeItem('id')
  }
  return response
})

Vue.component('hm-logo', HmLogo)
Vue.component('hm-header', HmHeader)
Vue.component('hm-navitem', HmNavitem)
// 注册vant插件
Vue.use(Vant)
// 定义全局过滤器
Vue.filter('time', input => {
  return moment(input).format('YYYY-MM-DD')
})

// 全局前置守卫： 对跳转个人中心进行判断: 是否为跳转 user +  是否有token
const token = localStorage.getItem('token')
router.beforeEach(function (to, from, next) {
  if (to.name !== 'user' || token) {
    next()
  } else {
    router.push('/login')
  }
})

// 阻止启动 生产消息
Vue.config.productionTip = false

window.vm = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
