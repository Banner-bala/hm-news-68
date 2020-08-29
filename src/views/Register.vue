<template>
  <div>
    <hm-header>注册</hm-header>
    <hm-logo></hm-logo>
    <van-form @submit="register">
      <van-field
        v-model="user.username"
        label="账号"
        placeholder="请输入账号"
        :rules="rules.username"
      />
      <van-field
        v-model="user.nickname"
        type="昵称"
        label="昵称"
        placeholder="请输入昵称"
        :rules="rules.nickname"
      />
      <van-field
        v-model="user.password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        :rules="rules.passsword"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          注册
        </van-button>
      </div>
      <p class="tips">已有账号？<router-link to="/login"><span> 登录账号</span></router-link></p>
    </van-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        nickname: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请填写账号', trigger: 'onChange' },
          { pattern: /^\d{5,11}$/, message: '账号必须为5-11位数字', trigger: 'onChange' }
        ],
        nickname: [
          { required: true, message: '请填写昵称', trigger: 'onChange' },
          { pattern: /^[\u4e00-\u9fa5]{2,6}$/, message: '用户名必须为2-6位为汉字', trigger: 'onChange' }
        ],
        passsword: [
          { required: true, message: '请填写密码', trigger: 'onChange' },
          { pattern: /^\d{3,9}$/, message: '密码必须为3-9位数字', trigger: 'onChange' }
        ]
      }
    }
  },

  methods: {
    async register () {
      const res = await this.$axios.post('/register', this.user)
      const { statusCode, message } = res.data
      if (statusCode === 200) {
        this.$toast(message)
        // 1. query 进行传参
        // this.$router.push(`/login?username=${this.user.username}&password=${this.user.password}`)

        // this.$router.push({
        //   path: '/login',
        //   query: this.user
        //   // query: {
        //   //   username: this.user.username,
        //   //   password: this.user.password
        //   // }
        // })

        // 2. params 进行传参
        this.$router.push({
          name: 'login',
          params: this.user
        })
      } else {
        this.$toast(message)
      }
    }
  }
}
</script>

<style lang='less' scoped>
  // scoped 属性： 提供给选择器加一个属性选择器，给不同组件 设置样式
  //                原因：（因为没有网页跳转，仍在同一页面，样式共用）
  // 实现步骤： 1. 给当前模板元素 添加一个特殊属性 [data-v-xxxx]
  //           2. 再给当前组件中 选择器上添加一个 属性选择器 tips[data-v-xxxx]
  .tips{
    font-size: 16px;
    text-align: right;
    margin: 18px;

      span{
        color:orange
      }
  }
</style>
