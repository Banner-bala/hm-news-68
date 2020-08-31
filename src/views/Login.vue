<template>
  <div>
    <hm-header>登录</hm-header>
    <hm-logo></hm-logo>
    <van-form @submit="login">
      <van-field
        v-model="user.username"
        name="账号"
        label="账号"
        placeholder="请输入账号"
        :rules= rules.username
      />
      <van-field
        v-model="user.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请输入密码"
        :rules= rules.password
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    <p class="tips">没有账号？<router-link to="/register"><span> 注册账号</span></router-link></p>
    </van-form>
  </div>
</template>

<script>
export default {
  created () {
    const { username, password } = this.$route.params
    this.user.username = username
    this.user.password = password
  },
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请填写账号', trigger: 'onChange' },
          { pattern: /^\d{5,15}$/, message: '账号必须为5-11位数字', trigger: 'onChange' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'onChange' },
          { pattern: /^\d{3,9}$/, message: '密码为3-9位数字', trigger: 'onChange' }
        ]
      }
    }
  },
  methods: {
    async login () {
      const res = await this.$axios.post('/login', this.user)
      const { statusCode, message, data } = res.data
      if (statusCode === 200) {
        // console.log(res)
        localStorage.setItem('token', data.token)
        localStorage.setItem('id', data.user.id)
        this.$toast.success(message)
        this.$router.push('/user')
      } else {
        this.$toast(message)
      }
    }
  }
}
</script>

<style lang='less' scoped>
  .tips{
    font-size: 16px;
    text-align: right;
    margin: 18px;

      span{
        color:orange
      }
  }
</style>
