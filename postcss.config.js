/*
 * @Author: kanglang
 * @Date: 2024-05-19 18:05:00
 * @LastEditors: kanglang
 * @LastEditTime: 2024-05-19 18:40:33
 * @Description: 请填写简介
 */
module.exports = {
  plugins: {
    autoprefixer: {},
    // "postcss-plugin-px2rem": {
    //   rootValue: 37.5,// 换算基准，配合lib-flexible使用 750 的设计稿 如果使用 rem.js 则基准为 16
    //   unitPrecision: 5,
    //   mediaQuery: true,
    //   exclude: /(node_module)/,
    //   selectorBlackList: ['html', 'mint-', 'mt-', 'mpvue-', 'calendar', 'iconfont','.ignore'], // 在rem.js全局作用下，排除指定的文件的影响
    //   propBlackList: ['border'] // 过滤属性
    // }
  }
}
