<template>
    <div class="my-container">
      <div class="user">
        <div class="touxiang" @click="login"></div>
        <div class="user-name">
          <ul class="a">未登录</ul>
          <ul class="b"></ul>
        </div>
      </div>
      <div class="vip">
        <div class="c">
          <p class="c-1"></p>
          <p class="c-2">查看权益></p>
        </div>
        <div class="d">
          <p class="d-1"></p>
          <p class="d-2">会员免息</p>
          <p class="d-3"></p>
          <p class="d-4">优惠礼包</p>
        </div>
      </div>
      <div class="shop">
        <div class="e">
          <ul class="e-1">我的订单</ul>
          <ul class="e-2">全部订单></ul>
        </div>
        <div class="f">
          <div class="f-1">
            <p class="f-1-1"></p>
            <p class="f-1-2">待付款</p>
          </div>
          <div class="f-2">
            <p class="f-2-1"></p>
            <p class="f-2-2">待发货</p>
          </div>
          <div class="f-3">
            <p class="f-3-1"></p>
            <p class="f-3-2">待收货</p>
          </div>
          <div class="f-4">
            <p class="f-4-1"></p>
            <p class="f-4-2">待评价</p>
          </div>
        </div>
      </div>
      <div class="app">
        <div class="g">
          <div class="g-1">
            <p class="g-1-1"></p>
            <p class="g-1-2">领券中心</p>
          </div>
          <div class="g-2">
            <p class="g-2-1"></p>
            <p class="g-2-2">我的拼团</p>
          </div>
          <div class="g-3">
            <p class="g-3-1"></p>
            <p class="g-3-2">我的助力</p>
          </div>
          <div class="g-4">
            <p class="g-4-1"></p>
            <p class="g-4-2">积分商城</p>
          </div>
        </div>
        <div class="h">
          <div class="h-1">
            <p class="h-1-1"></p>
            <p class="h-1-2">积分订单</p>
          </div>
          <div class="h-2">
            <p class="h-2-1"></p>
            <p class="h-2-2">优惠券</p>
          </div>
          <div class="h-3">
            <p class="h-3-1"></p>
            <p class="h-3-2">我的收藏</p>
          </div>
          <div class="h-4">
            <p class="h-4-1"></p>
            <p class="h-4-2">地址管理</p>
          </div>
        </div>
        <div class="i">
          <div class="i-1">
            <p class="i-1-1"></p>
            <p class="i-1-2">基本信息</p>
          </div>
          <div class="i-2">
            <p class="i-2-1"></p>
            <p class="i-2-2">帮助与反馈</p>
          </div>
          <div class="i-3">
            <p class="i-3-1"></p>
            <p class="i-3-2">常见问题</p>
          </div>
          <div class="i-4">
            <p class="i-4-1"></p>
            <p class="i-4-2">设置</p>
          </div>
        </div>
        <div class="j">
          <div class="j-1">
            <p class="j-1-1"></p>
            <p class="j-1-2">客服服务</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'myPage',
  components: {},
  props: {},
  data () {
    return {
      // imgurl:require('https://oss-store.msicn.com.cn/goods/165061122618822515.png')
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    login () {
      this.$router.push({
         name:'login',
       })
    }
  }
}
</script>

<style scoped>
body{
    /* background: darkgray; */
  }
  .user{
    display: flex;
    width: 100%;
    height: 120px;
    background-color: white;
    margin: 0px 0px 0px 0px;
    background-color: white;
  }
  .touxiang{
    display: flex;
    background-size: contain;
    margin-left:20px;
    margin-top: 55px;
    background-image: url('https://oss-store.msicn.com.cn/goods/165061122618822515.png');
    width: 65px;
    height: 65px;
    background-color: white;
  }
  .user-name{
    display: flex;
    width: 200px;
    height: 65px;
    /* background-color: pink; */
    flex-wrap: wrap;
    margin-left:25px;
    margin-top: 48px;
  }
  .a{
    width: 200px;
    height: 30px;
    margin-top: 10px;
    /* background-color: antiquewhite; */
    font-size: 18px;
  }
  .b{
    width: 200px;
    height: 30px;
    /* background-color: aquamarine; */
    font-size: 17px;
    /* font-weight: lighter; */
    color: dimgrey;
  }
  .vip{
    display: flex;
    width: 92%;
    height: 71px;
    background-image: url('https://minipro-store.msi.com/image/qtMyBg.png');
    background-size: contain;
    flex-wrap: wrap;
    margin: 0px 16px 15px 16px;
    border-radius: 10px;
  }
  .c{
    display: flex;
    width: 100%;
    height: 38px;
    /* background-color: pink; */
  }
  .c-1{
    display: flex;
    width: 88px;
    height: 26px;
    margin-left:18px;
    margin-top: 5px;
    background-size: contain;
    background-image: url('https://minipro-store.msi.com/image/qtHg.png');
  }
  .c-2{
    display: flex;
    width: 100px;
    height: 30px;
    margin-left: 150px;
    margin-top: 10px;
    font-size: 17px;
    /* background-color: aliceblue; */
  }
  .d{
    display: flex;
    width: 100%;
    height: 30px;
    /* background-color: greenyellow; */
  }
  .d-1{
    display: flex;
    width: 21px;
    height: 19px;
    margin-left: 20px;
    margin-top: 6px;
    background-size: contain;
    background-image: url('https://minipro-store.msi.com/image/mym.png');
  }
  .d-2{
    display: flex;
    width: 95px;
    height: 30px;
    margin-left: 3px;
    margin-top: 4px;
    font-size: 14px;
    /* background-color: aliceblue; */
  }
  .d-3{
    display: flex;
    width: 22px;
    height: 22px;
    margin-left: 120px;
    margin-top: 5px;
    background-image: url('https://minipro-store.msi.com/image/mylp.png');
    background-size: contain;
  }
  .d-4{
    display: flex;
    width: 95px;
    height: 30px;
    margin-left: 0px;
    margin-top: 2px;
    font-size: 17px;
   /* background-color: aliceblue; */
  }
  .shop{
    display: flex;
    width: 92%;
    height: 150px;
    background-color: ghostwhite;
    flex-wrap: wrap;
    margin: 0px 16px 15px 16px;
    border-radius: 10px;
  }
  .e{
    display: flex;
    width: 100%;
    height: 40px;
    /* background-color: white; */
  }
  .e-1{
    display: flex;
    width: 95px;
    height: 30px;
    margin-left: 10px;
    margin-top: 15px;
    font-size: 19px;
    /* background-color: aqua; */
  }
  .e-2{
    display: flex;
    width: 95px;
    height: 28px;
    margin-left: 155px;
    margin-top: 15px;
    font-size: 18px;
    font-weight: lighter;
    color: gray;
  }
  .f{
    display: flex;
    width: 100%;
    height: 92px;
    /* background-color: gold; */
  }
  .f-1{
    display: flex;
    width: 25%;
    height: 92px;
    /* background-color: pink; */
    flex-wrap: wrap;
  }
  .f-1-1{
    display: flex;
    width: 38px;
    height: 38px;
    margin-left: 22px;
    margin-top: 15px;
    background-image: url('https://minipro-store.msi.com/image/d1.png');
    background-size: contain;
  }
  .f-1-2{
    display: flex;
    width: 60px;
    height: 35px;
    font-size: 17px;
    margin-left: 15px;
    margin-top: 0px;
  }
  .f-2{
    display: flex;
    width: 25%;
    height: 92px;
    flex-wrap: wrap;
  }
  .f-2-1{
    display: flex;
    width: 38px;
    height: 38px;
    margin-left: 22px;
    margin-top: 15px;
    background-image: url('https://minipro-store.msi.com/image/d2.png');
    background-size: contain;
  }
  .f-2-2{
    display: flex;
    width: 60px;
    height: 35px;
    font-size: 17px;
    margin-left: 15px;
    margin-top: 0px;
  }
  .f-3{
    display: flex;
    width: 25%;
    height: 92px;
    flex-wrap: wrap;
  }
  .f-3-1{
    display: flex;
    width: 38px;
    height: 38px;
    margin-left: 22px;
    margin-top: 15px;
    background-image: url('https://minipro-store.msi.com/image/d3.png');
    background-size: contain;
  }
  .f-3-2{
    display: flex;
    width: 60px;
    height: 35px;
    font-size: 17px;
    margin-left: 15px;
    margin-top: 0px;
  }
  .f-4{
    display: flex;
    width: 25%;
    height: 92px;
    flex-wrap: wrap;
  }
  .f-4-1{
    display: flex;
    width: 38px;
    height: 38px;
    margin-left: 22px;
    margin-top: 15px;
    background-image: url('https://minipro-store.msi.com/image/d4.png');
    background-size: contain;
  }
  .f-4-2{
    display: flex;
    width: 60px;
    height: 35px;
    font-size: 17px;
    margin-left: 15px;
    margin-top: 0px;
  }
  .app{
    display: flex;
    width: 92%;
    height: 360px;
    background-color: ghostwhite;
    margin: 0px 16px 15px 16px;
    border-radius: 10px;
    flex-wrap: wrap;
  }
  .g{
    display: flex;
    width: 100%;
    height: 85px;
  }
  .g-1{
    display: flex;
    width: 25%;
    height: 85px;
    flex-wrap: wrap;
  }
  .g-1-1{
    display: flex;
    width: 38px;
    height: 38px;
    margin-left: 23px;
    margin-top: 15px;
    background-image: url('https://minipro-store.msi.com/image/1009.png');
    background-size: contain;
  }
  .g-1-2{
    display: flex;
    width: 68px;
    height: 35px;
    font-size: 17px;
    margin-left: 8px;
    margin-top: 0px;
  }
  .g-2{
    display: flex;
    width: 25%;
    height: 85px;
    flex-wrap: wrap;
  }
  .g-2-1{
    display: flex;
    width: 38px;
    height: 38px;
    margin-left: 23px;
    margin-top: 15px;
    background-image: url('https://minipro-store.msi.com/image/pintuan.png');
    background-size: contain;
  }
  .g-2-2{
    display: flex;
    width: 68px;
    height: 35px;
    font-size: 17px;
    margin-left: 8px;
    margin-top: 0px;
  }
  .g-3{
    display: flex;
    width: 25%;
    height: 85px;
    flex-wrap: wrap;
  }
  .g-3-1{
    display: flex;
    width: 38px;
    height: 38px;
    margin-left: 23px;
    margin-top: 15px;
    background-image: url('https://minipro-store.msi.com/image/zhuli.png');
    background-size: contain;
  }
  .g-3-2{
    display: flex;
    width: 68px;
    height: 35px;
    font-size: 17px;
    margin-left: 8px;
    margin-top: 0px;
  }
  .g-4{
    display: flex;
    width: 25%;
    height: 85px;
    flex-wrap: wrap;
  }
  .g-4-1{
    display: flex;
    width: 38px;
    height: 38px;
    margin-left: 23px;
    margin-top: 15px;
    background-image: url('https://minipro-store.msi.com/image/jifen.png');
    background-size: contain;
  }
  .g-4-2{
    display: flex;
    width: 68px;
    height: 35px;
    font-size: 17px;
    margin-left: 8px;
    margin-top: 0px;
  }
  .h{
    display: flex;
    width: 100%;
    height: 85px;
  }
  .h-1{
    display: flex;
    width: 25%;
    height: 85px;
    flex-wrap: wrap;
  }
  .h-1-1{
    display: flex;
    width: 38px;
    height: 38px;
    margin-left: 23px;
    margin-top: 15px;
    background-image: url('https://minipro-store.msi.com/image/jifendindan.png');
    background-size: contain;
  }
  .h-1-2{
    display: flex;
    width: 68px;
    height: 35px;
    font-size: 17px;
    margin-left: 8px;
    margin-top: 0px;
  }
  .h-2{
    display: flex;
    width: 25%;
    height: 85px;
    flex-wrap: wrap;
  }
  .h-2-1{
    display: flex;
    width: 38px;
    height: 38px;
    margin-left: 23px;
    margin-top: 15px;
    background-image: url('https://minipro-store.msi.com/image/youhui.png');
    background-size: contain;
  }
  .h-2-2{
    display: flex;
    width: 68px;
    height: 35px;
    font-size: 17px;
    margin-left: 15px;
    margin-top: 0px;
  }
  .h-3{
    display: flex;
    width: 25%;
    height: 85px;
    flex-wrap: wrap;
  }
  .h-3-1{
    display: flex;
    width: 38px;
    height: 38px;
    margin-left: 23px;
    margin-top: 15px;
    background-image: url('https://minipro-store.msi.com/image/shoucang.png');
    background-size: contain;
  }
  .h-3-2{
    display: flex;
    width: 68px;
    height: 35px;
    font-size: 17px;
    margin-left: 8px;
    margin-top: 0px;
  }
  .h-4{
    display: flex;
    width: 25%;
    height: 85px;
    flex-wrap: wrap;
  }
  .h-4-1{
    display: flex;
    width: 38px;
    height: 38px;
    margin-left: 23px;
    margin-top: 15px;
    background-image: url('https://minipro-store.msi.com/image/dizhi.png');
    background-size: contain;
  }
  .h-4-2{
    display: flex;
    width: 68px;
    height: 35px;
    font-size: 17px;
    margin-left: 8px;
    margin-top: 0px;
  }
  .i{
    display: flex;
    width: 100%;
    height: 85px;
  }
  .i-1{
    display: flex;
    width: 25%;
    height: 85px;
    flex-wrap: wrap;
  }
  .i-1-1{
    display: flex;
    width: 38px;
    height: 38px;
    margin-left: 23px;
    margin-top: 15px;
    background-image: url('https://minipro-store.msi.com/image/jiben.png');
    background-size: contain;
  }
  .i-1-2{
    display: flex;
    width: 68px;
    height: 35px;
    font-size: 17px;
    margin-left: 8px;
    margin-top: 0px;
  }
  .i-2{
    display: flex;
    width: 25%;
    height: 85px;
    flex-wrap: wrap;
  }
  .i-2-1{
    display: flex;
    width: 38px;
    height: 38px;
    margin-left: 23px;
    margin-top: 15px;
    background-image: url('https://minipro-store.msi.com/image/bangzhu.png');
    background-size: contain;
  }
  .i-2-2{
    display: flex;
    width: 89px;
    height: 35px;
    font-size: 17px;
    margin-left:0px;
    margin-top: 0px;
  }
  .i-3{
    display: flex;
    width: 25%;
    height: 85px;
    flex-wrap: wrap;
  }
  .i-3-1{
    display: flex;
    width: 38px;
    height: 38px;
    margin-left: 23px;
    margin-top: 15px;
    background-image: url('https://minipro-store.msi.com/image/wenti.png');
    background-size: contain;
  }
  .i-3-2{
    display: flex;
    width: 68px;
    height: 35px;
    font-size: 17px;
    margin-left: 8px;
    margin-top: 0px;
  }
  .i-4{
    display: flex;
    width: 25%;
    height: 85px;
    flex-wrap: wrap;
  }
  .i-4-1{
    display: flex;
    width: 38px;
    height: 38px;
    margin-left: 23px;
    margin-top: 15px;
    background-image: url('https://minipro-store.msi.com/image/shezhi.png');
    background-size: contain;
  }
  .i-4-2{
    display: flex;
    width: 68px;
    height: 35px;
    font-size: 17px;
    margin-left: 24px;
    margin-top: 0px;
  }
  .j{
    display: flex;
    width: 100%;
    height: 85px;
  }
  .j-1{
    display: flex;
    width: 25%;
    height: 85px;
    flex-wrap: wrap;
    margin-top: -9px;
  }
  .j-1-1{
    display: flex;
    width: 38px;
    height: 38px;
    background-color: aliceblue;
    margin-left: 23px;
    margin-top: 0px;
    background-image: url('https://minipro-store.msi.com/image/kefu.png');
    background-size: contain;
  }
  .j-1-2{
    display: flex;
    width: 68px;
    height: 36px;
    font-size: 17px;
    margin-left: 8px;
    margin-top: 0px;
  }
</style>
