<template>
  <div class="user-edit">
    <hm-header>资料编辑</hm-header>
    <div class="avatar">
      <img src="../assets/avatar.jpg" alt="">
    </div>
    <div class="info">
      <hm-navitem>
        <template>昵称</template>
        <template  #content>一朵梨花压海棠</template>
      </hm-navitem>
      <hm-navitem>
        <template>密码</template>
        <template #content>******</template>
      </hm-navitem>
      <hm-navitem>
        <template>性别</template>
        <template #content>女</template>
      </hm-navitem>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
  .avatar{
    height: 200px;
    text-align: center;
    line-height: 250px;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
</style>
