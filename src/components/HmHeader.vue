<template>
  <div class="hm-header">
    <div class="back">
      <span class="iconfont iconjiantou2" @click="back"></span>
    </div>
    <div class="title">
      <slot></slot>
    </div>
    <div class="extra"></div>
  </div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='less'>
.hm-header {
  display: flex;
  border-bottom: 1px solid #ccc;
  height: 50px;
  line-height: 50px;
  text-align: center;

    .back,
    .extra {
      width: 50px;
    }

    .iconfont {
      font-size: 16px;
    }

    .title {
      flex: 1;
      font-size: 16px;
      font-weight: 700;
    }
}
</style>
