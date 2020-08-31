<template>
  <div class="User">
    <div class='message' @click='userEdit'>
      <div class="avatar"><img :src="base + user.head_img" alt=""></div>
      <div class="info">
        <div>
          <!-- <span v-if='user.gender === 0' class="iconfont iconxingbienan"></span>
          <span v-else class="iconfont iconxingbienv"></span> -->
          <span class="iconfont" :class="user.gender===1 ? 'iconxingbienan' : 'iconxingbienv'"></span>
          <span> {{user.nickname}}</span>
        </div>
        <p class="time">{{user.create_date | time}}</p>
      </div>
      <div class="arrow"><span class="iconfont iconjiantou1"></span></div>
    </div>

    <hr>
    <hm-navitem to="/follow">
      <template>我的关注</template>
      <template #content>关注的用户</template>
    </hm-navitem>
    <hm-navitem>
      <template>我的跟帖</template>
      <template #content>跟帖/回复</template>
    </hm-navitem>
    <hm-navitem>
      <template>我的收藏</template>
      <template #content>文章/视频</template>
    </hm-navitem>
    <hm-navitem to="/edit">
      <template>设置</template>
    </hm-navitem>
    <div style="padding:15px">
      <van-button  block type="primary" @click='logout'>账号退出</van-button>
    </div>
  </div>
</template>

<script>
// import { Dialog } from 'vant'
export default {
  data () {
    return {
      user: ''
    }
  },
  computed: {
    base () {
      return this.$axios.defaults.baseURL
    }
  },

  async created () {
    const id = localStorage.getItem('id')

    // 1. 单独配置token
    // const token = localStorage.getItem('token')
    // const res = await this.$axios.get(`/user/${id}`, {
    //   headers: {
    //     Authorization: token
    //   }
    // })

    // 2. 全局配置token  ===> 见 main.js
    const res = await this.$axios.get(`/user/${id}`)

    const { statusCode, data } = res.data
    if (statusCode === 200) {
      this.user = data
    }
  },
  methods: {
    // 处理弹框 —— 退出功能
    // logout () {
    //   this.$dialog.confirm({
    //     title: '温馨提示',
    //     message: '确定退出账号吗？'
    //   })
    //     .then(() => {
    //       // 点击确认： 跳回 login +  删除token、id
    //       this.$router.push('/login')
    //       this.$toast('退出成功')
    //       localStorage.removeItem('token')
    //       localStorage.removeItem('id')
    //     })
    //     .catch(() => {
    //       // 点击取消： 不做处理 或 给个弹框提示
    //     })
    // }

    // try - catch 改写
    async logout () {
      try {
        await this.$dialog.confirm({
          title: '温馨提示',
          message: '确定退出账号吗？'
        })
        // 点击确认： 跳回 login +  删除token、id
        this.$router.push('/login')
        this.$toast('退出成功')
        localStorage.removeItem('token')
        localStorage.removeItem('id')
      } catch (e) {
        console.log('取消了')
        this.$toast('取消成功')
      }
    },
    userEdit () {
      this.$router.push('/user-edit')
    }
  }
}
</script>

<style lang='less'>
  .message{
    display: flex;
    margin: 30px 20px;
    align-items: center;

    .avatar{
      width: 70px;
      height: 70px;
      img{
        border-radius: 50%;
        width:100%;
        height:100%
      }
    }
    .arrow{
      margin: 15px;
      width:'10px';
      color:'#ccc'
    }
    .info{
      flex:1;
      margin: 15px;
      font-size: 16px;
      .time{
        margin-top: 10px;
        color: #999;
      }

      .iconxingbienan{
        color:green
      }
      .iconxingbienv{
        color:pink
      }
    }
  }
</style>
