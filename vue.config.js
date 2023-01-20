const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    host: "0.0.0.0",// 允许外部ip访问
    port: 8080, // 自定义修改项目启动的端口号
    https: false,// 启用https
    open: false,//build自动打开浏览器
   proxy:{
        '/api':{
          target:'https://minipro-store.msi.com',
          changeOrigin: true
        }
      
      
      },
        // 这里可以写多个对象，同时代理几个端口
    
  }
})
