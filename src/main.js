import Vue from 'vue'
import App from './App.vue'
import router from './router'
import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo.vue'
import HmNavitem from './components/HmNavitem.vue'

// 导入通用样式
import './style/base.less'
import './style/iconfont.css'
// 全局导入 vant插件
import Vant from 'vant'
import 'vant/lib/index.css'
// 引入rem适配插件 —— amfe-flexible
import 'amfe-flexible'

// 将axios 引入 + 挂载 到vue原型上
import axios from 'axios'
Vue.prototype.$axios = axios
// 给axios配置默认 baseURL (基准地址)
axios.defaults.baseURL = 'http://localhost:3000'

// 全局注册组件
Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', HmLogo)
Vue.component('hm-navitem', HmNavitem)

// 注册vant插件
Vue.use(Vant)

// 阻止启动 生产消息
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
