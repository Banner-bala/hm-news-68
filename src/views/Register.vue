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
      <p class="tip">已有账号？ <router-link to="/login"><span>登录账号</span></router-link></p>
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
        this.$router.push('/login')
      } else {
        this.$toast(message)
      }
    }
  }
}
</script>

<style lang='less'>
  .tip{
    text-align: right;
    font-size: 16px;
    margin-right: 18px;

      span{
        color: orange;
      }
  }
</style>
