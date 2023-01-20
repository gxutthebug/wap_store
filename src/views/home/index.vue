<template>
    <div class="home-container">

      <div class="headimg-box">
        <van-image src="https://minipro-store.msi.com/image/1.png"/>
      </div>

<div class="search-box">
  <van-image src="https://minipro-store.msi.com/image/15.png"  width="84px" height="40px" class="left" />

  <div class="right">
    <van-search v-model="value" placeholder="请输入商品名称"  class="mytest"  @click="onSearch"/>
  </div>

</div>

<div class="switch">
  <div class="inside">
    <van-swipe class="my-swipe" :autoplay="3000000" indicator-color="white">
  <van-swipe-item v-for="obj in switchlist" :key="obj.id">
    <van-image width="100%" height="100%" radius="10px" :src="obj.url"/>
  </van-swipe-item>
</van-swipe>
</div>
<div class="botbar">
  <van-image width="100%" height="100%"  src="https://minipro-store.msi.com/image/090103.png"/>
</div>
</div>

<div class="JinGang">
  <van-grid :column-num="4" :border="false" icon-size="50px">
  <van-grid-item v-for="obj in JinGangList" :key="obj.id" :icon="obj.icon" :text="obj.title" />
</van-grid>
</div>

<div class="midbox">
  <div class="top">
    <van-image width="100%" height="100%" radius="15px" src="https://oss-store.msicn.com.cn/activity/167160134158818709.png"/>
  </div>
  <div class="bot">
    <div class="left">
      <van-image width="100%" height="100%" radius="5px" src="https://oss-store.msicn.com.cn/activity/167227652874246333.png"/>
    </div>
    <div class="right">
      <div class="up">
        <van-image width="100%" height="100%" radius="5px" src="https://oss-store.msicn.com.cn/activity/167117905598822240.png"/>
      </div>
      <div class="under">
        <van-image width="100%" height="100%" radius="5px" src="https://oss-store.msicn.com.cn/activity/167203403325099110.png"/>
      </div>
    </div>
  </div>
</div>

<div class="goods">
  <van-tabs v-model="active" swipeable title-active-color="rgb(237, 28, 36)">
    <van-tab  title="推荐"> <tabContent id="-1"></tabContent></van-tab>
  <van-tab v-for="obj in scrolllist" :key="obj.id" :title="obj.name">
    <tabContent :id="obj.id"></tabContent>
  </van-tab>
</van-tabs>
</div>
    </div>
</template>

<script>
import tabContent from '@/components/tabcontent.vue'

export default {
  name: 'homePage',
  components: {
    tabContent
  },
  props: {},
  data () {
    return {
      value: '',
      switchlist: [],
      JinGangList: [],
      scrolllist: [],
      active: 2
    }
  },
  computed: {},
  watch: {},
  async created () {
    const data = await this.$axios({
      method: 'GET',
      url: '/api/WechatIndex'
    })
    console.log('获取数据')
    console.log(data)
    this.switchlist = data.data.data.banner
    this.scrolllist = data.data.data.category
    this.JinGangList = await this.getJinGang()
  },
  mounted () {},
  methods: {
    async getJinGang () {
      const data = await this.$axios({
        method: 'GET',
        url: '/api/GetJinGangDistricts'
      })
      console.log('灯笼图标')
      console.log(data)
      return data.data.data
    },
    onSearch () {
      this.$router.push({
         name:'search',
       })
    }
  }
}
</script>

<style scoped lang="less">
.home-container{
      padding-bottom: 100px;
  .headimg-box{
     position: absolute;
     top: 0;
     left: 0;
     height: 200;
     z-index: -1;
  }

  .search-box{
    height: 40px;
    padding-left: 10px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    z-index: 999;
    background-color: #f04951;
    display: flex;

    .left{
      width: 84px;
      height: 40px;
      margin-left: 5px;
    }

    .right{
      width: 255px;
      height: 30px;
      margin-top: 4px;
      margin-left: 20px;
     background-color: #f04951;
     border-radius:15px;

      .van-search{
       margin:0;
       padding: 0;
       width: 100%;
       height: 100%;
       background-color: unset;

       .van-search__content{
        background-color: unset;

        .van-cell{
          color: #ffffff;
        }

        ::v-deep  .van-field__control::-webkit-input-placeholder{
          color: #ffffff;
          // background-color: antiquewhite;
        }
       }
      }
    }
  }

  .switch{
    height: 190px;
    margin-top: 65px;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;

    .inside{
         height: 148px;
         border-radius: 10px;
    }

    .botbar{
       height: 30px;
      //  background-color: aqua;
    }
  }

  .JinGang{
    box-sizing: border-box;
    margin-top: 5px;
    padding-left: 20px;
    padding-right: 20px;
   ::v-deep .van-grid-item__content{
      padding: 0;

      .van-grid-item__icon+.van-grid-item__text{
        margin-top: 5px;
      }

      .van-grid-item__text{
        font-weight: 400;
        color: #111111;
      }
    }
  }

.midbox{
   box-sizing: border-box;
   margin-top: 20px;
   padding-left: 20px;
   padding-right: 20px;

   .top{
     height: 90px;
   }

   .bot{
     height: 168px;
     display: flex;
     margin-top: 9px;

     .left{
      height: 168px;
      width: 160px;
     }
     .right{
      height: 168px;
      width: 169px;
      margin-left: 9px;

      .up{
        height: 80px;
        background-color: antiquewhite;
      }

      .under{
        height: 80px;
        margin-top: 8px;
        background-color: aquamarine;
      }
     }
   }
}

.goods{
  height: 50px;
  box-sizing: border-box;
  margin-top: 15px;
  padding-left: 15px;
  padding-right: 15px; 

  ::v-deep .van-tabs__line{
    background-color: unset;
  }

  // ::v-deep .van-tabs__wrap {
  //       touch-action: manipulation;
  //   }

  ::v-deep .van-tabs__wrap--scrollable .van-tab {
       flex-basis: auto !important;
       padding-right: 15px;
  }
}

}
</style>
