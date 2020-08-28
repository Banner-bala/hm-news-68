<template>
  <div>
    <hm-header>登录</hm-header>
    <hm-logo></hm-logo>
    <van-form @submit="login">
  <van-field
    v-model="username"
    name="账号"
    label="账号"
    placeholder="请输入账号"
    :rules= rules.username
  />
  <van-field
    v-model="password"
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
</van-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: '',
      rules: {
        username: [
          { required: true, message: '请填写账号', trigger: 'onChange' },
          { pattern: /^\d{5,15}$/, message: '账号必须为5-11数字', trigger: 'onChange' }
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
      const res = await axios.post('http://localhost:3000/login', {
        username: this.username,
        password: this.password
      })
      if (res.data.statusCode === 200) {
        this.$toast.success('提示文案')
        this.$router.push('/user')
      } else {
        this.$toast('提示文案')
      }
      console.log(res)
    }
  }
}
</script>

<style lang='less'>
</style>
