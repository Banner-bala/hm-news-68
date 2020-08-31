import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import User from '../views/User.vue'
import UserEdit from '../views/UserEdit.vue'

Vue.use(VueRouter)

// 全局处理原地起跳 login 页面 (login 跳 login)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  { path: '/login', component: Login, name: 'login' },
  { path: '/register', component: Register, name: 'register' },
  { path: '/user', component: User, name: 'user' },
  { path: '/user-edit', component: UserEdit, name: 'user-edit' }
]

const router = new VueRouter({
  routes
})

// 全局前置守卫： 对跳转个人中心进行判断: 是否为跳转 user +  是否有token
const token = localStorage.getItem('token')
router.beforeEach(function (to, from, next) {
  const obj = ['/user', '/user-edit']
  if (to.name !== obj || token) {
    next()
  } else {
  }
})

export default router
