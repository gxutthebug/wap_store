<template>
  <div class="shop-container">
    <div class="head">购物车</div>
    <ul class="shopping">
      <li class="item"   v-for="item in list"  :key="item.id">
        <div class="left">
          <input type="checkbox">
        </div>
        <div class="center">
          <img :src="item.image" alt="">
        </div>
        <div class="right">
          <div class="top">
            <p class="title">{{item.title}}</p>
          </div>
          <div class="bottom">
            <div class="price">
              <span class="rmb">￥</span>
              <span class="RMB">{{item.price}}</span>
            </div>
            <div class="count">
              <span class="reduce" @click="reduce()">-</span>
              <span class="num">1</span>
              <span class="add" @click="add()">+</span>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <tabContent :id="k"></tabContent>
    <div class="foot">
      <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit"  />
    </div>
  </div>  
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';
import tabContent from '@/components/tabcontent.vue'
	
Vue.use(Toast);
export default {
  name: 'shopPage',
  components: {
    tabContent
  },
  props: {},
  data(){
    return {
      "list":[
      {id: '407', title: "微星（MSI） 微星 GeForce RTX 4080 SUPRIM X 16G 超龙 超旗舰 游戏电脑显卡", image: "https://oss-store.msicn.com.cn/goods/167264494485848350.jpg", price: "11999"},
      {id: '408', title: "微星（MSI） 微星 GeForce RTX 4080 GAMING X TRIO 16G 魔龙", image: "https://oss-store.msicn.com.cn/activity/164981754229174040.png", price: "10499"},
      {id: '165', title: "冲锋坦克Pro GP76/76HX 游戏本 12代英特尔酷睿i9-12900H Windows 11 家庭版 GeForce RTX 3080Ti 双烤功耗220W", image: "https://oss-store.msicn.com.cn/goods/167290280525544619.jpg", price: "11499"},
      {id: '227', title: "泰坦 GT77 i9-12900HX/Windows 11 家庭版 GeForce RTX 3080Ti 游戏本电竞本", image: "https://oss-store.msicn.com.cn/goods/167288657220641123.jpg", price: "29499"},    
      {id: '120', title: "绝影GS77游戏本 i9-12900H/Windows 11 家庭版 GeForce RTX 3080 Ti", image: "https://oss-store.msicn.com.cn/goods/167290437413756446.jpg", price: "17999"},
      {id: '352', title: "微星（MSI）5000系微星玩派全家桶R5 5600+3060/3060Ti/6700XT主机方案 玩派352", image: "https://oss-store.msicn.com.cn/goods/167282358993413477.jpg", price: "5799"}
      ],
      k:-1
    }
  },
  computed:{
    sum () {
    
      return 45514;
    }  
  },
  watch: {},
  created () {},
  mounted(){
  },
  methods: {
    onSubmit () {
      
    }
  }
}
</script>

<style scoped="scoped" lang="less">
*{
	margin:0px;
	padding: 0px;
	}


  .shop-container{
    padding-bottom: 120px;
    .van-submit-bar{
          bottom: 55px;
    }
  }
.head{
  width:100%;
	height:36px;
	text-align: center;
	line-height: 36px;
	border-bottom:1px solid rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
}
.shopping{
	padding:10px 20px;
	box-sizing: border-box;
	width:100%;
	background-color: #f7f8fa;
	}
.item{
	width:100%;
	/* border-radius: 15px; 圆角 */
	background:white;
	display: flex;
	padding:15px 10px;
	box-sizing: border-box;
	margin-bottom:10px;
}
.left{
  width: 12%;
  display: flex;
  justify-content: center; /*水平居中*/ 
  align-items: center; /*垂直居中*/
  /* background-color: aqua;  */
}
.center{
  width: 32%;
  /* background-color: aquamarine; */
}
.center>img{
  width: 100%;
}
.right{
  width: 56%;
  display: flex;
	flex-direction: column; /*垂直方向justify-content*/
	justify-content: space-between; /*上下贴边*/
  /* background-color: bisque; */
}
.title{
	color:black;
  font-size:12px;
}
.bottom{
  display: flex;
	justify-content: space-between;
}
.rmb{
  color: red;
  font-size:11px
}
.RMB{
  color: red;
  font-size: 11px;
}
.count{
  width: 40%;
	display: flex;
	justify-content: center;
}
.reduce,.add{
  padding:3px 5px;
}
.num{
  background-color: #f6f6f6;
	padding:3px 6px;
	border-radius: 3px;
}
.foot{
  display: flex;
  position: static; /*粘性定位*/
}
</style>
