/**
 * PostCSS 配置文件
 * PostCSS 之于 CSS 就相当于 Babel 之于 JS，PostCSS 能借助各种各样的插件处理 CSS，CSS 的编译器,vue脚手架 
 * 内部使用了 PostCSS。我们只需要在PostCSS的配置文件中按需配置插件即可(配插件前先导包)
 * 
 */

 module.exports = {
    // 配置要使用的 PostCSS 插件
    plugins: {
      'postcss-pxtorem': {
        rootValue: 37.5,
        propList: ['*'],
      },
    },
  }
  