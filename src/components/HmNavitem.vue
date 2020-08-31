<template>
  <div class="nav-item" @click="clickFn">
    <div class="title"><slot></slot></div>
    <div class="content"><slot name='content'></slot></div>
    <div class="arrow"><span class="iconfont iconjiantou1"></span></div>
  </div>
</template>

<script>
export default {
  methods: {
    clickFn () {
      this.$router.push(this.to)
    }
  },
  props: {
    to: String
  }
}
</script>

<style lang ='less' scoped>
  .nav-item{
    display: flex;
    margin-left: 10px;
    border-bottom: 1px solid #ccc;
    height: 50px;
    line-height: 50px;
    font-size: 14px;

    .title{
      font-size: 16px;
    }
    .content{
      flex:1;
      text-align: right;
      color: #666;
    }
    .arrow{
      padding: 0 10px;
    }
  }
</style>
