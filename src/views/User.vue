<template>
  <div class="User">
    <div class='message'>
      <div class="avatar"><img src="../assets/avatar.jpg" alt=""></div>
      <div class="info">
        <div>
          <span class="iconfont iconxingbienan"></span>
          <span>名字</span>
        </div>
        <p>2020-20-20</p>
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
  </div>
</template>

<script>
export default {

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

      .iconfont{
        color:green
      }
    }
  }
</style>
