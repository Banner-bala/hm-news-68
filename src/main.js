import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入通用样式
import './style/base.less'
import './style/iconfont.css'

// 全局导入 vant插件
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
