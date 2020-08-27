module.exports = {
  plugins: {
    // 与 vue脚手架内部 配置冲突， 需删除
    // autoprefixer: {
    //     browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    'postcss-pxtorem': {
      // 配置 1rem 大小， 应设置为37.5， 为了与vant-ui匹配
      // 从此量750的设图，尺寸都要除以2
      rootValue: 37.5,
      // 所有属性 通配
      propList: ['*']
    }
  }
}
