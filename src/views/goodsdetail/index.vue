<template>
    <div class="goodsDetailPage-container">
        <div class="head">
            <van-nav-bar
  title="商品详情"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
        </div>

        <div class="switch">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="(item,index) in imglist "  :key="index">
    <van-image
  width="100%"
  height="100%"
  :src="item"
/></van-swipe-item>
  
</van-swipe>
        </div>

        <div class="shoptitle">
                 <div class="shopdelitPikcer">
                      <div class="picekr-left">
                        <div class="picker1 ">{{ detailobj.price }}</div>
                        <div class="pikcer-2">{{ detailobj.original_price}}</div>
                      </div>
                      <div class="newtype" v-if="detailobj.is_new === 0">
                          <div class="newxinp">新品</div>
                      </div>

                      <div class="yinewshou">已售{{detailobj.sales}}</div>
                 </div>

                 <div class="title">{{ detailobj.title }}</div>

                 <div class="txtdest">{{ detailobj.subtitle }}</div>
        </div>
       
              <div class="separate"></div>

        <div class="pintuanWanfa">
           <div class="leftname_new">
            <div class="leftname_new_tit">已选</div>
             <div class="sukiud van-ellipsis">{{detailobj.sku[0].name}}</div>
          </div>

          <div class="small">
            <van-image
  width="100%"
  height="100%"
  src="https://minipro-store.msi.com/image/6.png"
/>
          </div>
        </div>
  
        <div class="separate"></div>

        <div class="pintuanWanfa">
          <div class="leftname_new" id="more">
            <div class="leftname_new_tit">服务保障</div>
            
             <div class="sukiud " id="yfm">支持7天无理由退货(拆封 激活后不支持 人为损坏不支持 包装破损不支持 不影响二次销售)</div>
          </div>
        </div>

        <div class="separate"></div>

        <div class="shangopdelit">
           <div class="topshopdelit">—— 商品详情 ——</div>
           <div class="long" v-html="detailobj.content"></div>
        </div>


        <div class="bounce">
          <van-popup v-model="show" position="bottom" round>买！</van-popup>
        </div>

      <div class="bar">
        <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
  <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
  <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
  <van-goods-action-button
    type="danger"
    text="立即购买"
    @click="onClickButton"
  />
</van-goods-action>
      </div>
    </div>
</template>

<script>

export default {
  name: 'goodsDetailPage',
  components: {},
  props: {
    id :{
        type:[Number, String], //注意这里要写成双类型是因为
        // 如果你是直接在浏览器头顶输入路径转跳ID是字符串，如果你通过路由传参跳转是数字类型
        require:true
      }
  },
  data () {
    return {
        detailobj:{
            images:'',
            sku:[{}]
        },
        list:[],
        show: false,
    }
  },
  computed: {
    imglist () {
        console.log(this.detailobj.images.split(","))
        return this.detailobj.images.split(",")

        // return this.test.a.split('')
    }
  },
  watch: {},
  async created () {
    
    try {
        const data = await this.getgooddetail()
        this.detailobj = data
     console.log('商品详情信息')
     console.log(this.detailobj)
     
    } catch (err) {
        console.log(err)
    }
     
  },
  mounted () {},
  destroyed () {
    console.log('组件销毁了')
  },
  methods: {
    async getgooddetail() {
        const data = await this.$axios({
          method: 'GET',
          url: `/api/goods/${this.id}`
        })

        return data.data.data
    },
    onClickLeft() {
      this.$router.back()
    },
    onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      this.show = true;
    }
  }
}
</script>

<style scoped lang="less">
.goodsDetailPage-container{

    padding-bottom: 50px;     
    .head{
        height: 44px;
   
        ::v-deep .van-nav-bar__title{
            font-weight: 900;
        }
        ::v-deep .van-nav-bar .van-icon{
            color: #f02731;
        }
       ::v-deep .van-nav-bar__text{
            color: #f02731;
        }
    }

    .switch{
        height: 375px;
    }

    .shoptitle{
      width: 90%;
     margin: 0 auto;
     margin-top: 10px;
     padding-bottom: 10px;
     height: 136px;

     .shopdelitPikcer {
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .picekr-left {
    display: flex;
    align-items: center;
    width: 45%;

    .picker1 {
    font-size: 20px;
    font-weight: 600;
    color: #e02020;
}

.pikcer-2 {
    text-decoration: line-through;
    font-size: 13px;
    color: #999;
    margin-top: 5px;
    margin-left: 4px;
}

}

.newtype{
    width: 40%;
    display: flex;
    align-items: center;

    .newxinp{
    background: url(https://minipro-store.msi.com/image/24.png) no-repeat 50%;
    background-size: 100% 100%;
    width: 36px;
    height: 16px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-size: 11px;
}

}

.yinewshou{
    font-size: 13px;
    color: #999;
}
}

.title {
    font-size: 14px;
    color: #000;
}

.txtdest{
    color: #999;
    font-size: 12px;
    margin-top: 10px;
}
    }

    .separate{
      width: 100%;
    height: 10px;
    background-color: #f8f8f8;
    }

    .pintuanWanfa{
    margin: 0 auto;
    background-color: #fff;
    padding: 15px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .leftname_new {
    display: flex;
    align-items: center;
    width: 270px;
    font-size: 13px;
    font-weight: 600;

    .leftname_new_tit{
    width: 24%;
}
.sukiud {
    width: 193px;
    color: #666;
    font-size: 12px;
    font-weight: 500;
}

}

.small{
   width: 8px;
   height: 15px;
   display: inline-block;
   position: absolute;
   right: 15px;
   top: 6px;
}
  
}



.shangopdelit{
    padding: 10px 15px;

    .topshopdelit {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;

}

}



#more{
  width: 100%;
} 

#yfm{
  width: 273px;
  box-sizing: border-box;
  font-size: 8px;
}

}
</style>
