<template>
    <div class="tabcontent-container">
        <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  offset="200"
  @load="onLoad"
>
  <div class="goodslist">
    <van-grid :column-num="2">
  <van-grid-item v-for="obj in goodslist" :key="obj.id" @click="detail(obj.id)">
    <div class="diy-box">
      <div class="up">
        <van-image  width="100%"  height="100%" :src="obj.image"  radius="5px"/>
      </div>
      <div class="bot">
        <div class="title van-multi-ellipsis--l2">
          {{ obj.title }}
        </div>
        <div class="price">
          <div class="left">￥{{ obj.price}}</div>
           <div class="right"> 销量{{ obj.sales }}</div>
        </div>
      </div>
    </div>
  </van-grid-item>
</van-grid>
  </div> 

</van-list>
    </div>
</template>

<script>

export default {
  name: 'tabcontentPage',
  components: {},
  props: ['id'],
  data () {
    return {
        list: [],
      loading: false,
      finished: false,
      page:1
    }
  },
  computed: {
    goodslist () {
      return this.list.filter(item =>{
         return typeof item === 'object'
      })
    }
  },
  watch: {},
  async created () {
    const data = await this.getgooods()
    this.list = data.data.data.data
    console.log("list列表")
    console.log(this.list)
  },
  mounted () {},
  methods: {
   async onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // this.loading=true
      this.page++
     try {
      const data = await this.getgooods ()
      console.log('新请求的数据')
      console.log(this.page)
      console.log(data.data.data.data)
      this.list.push(...data.data.data.data)
      this.loading=false
       // 超过80条停止更新
      if (this.list.length >= 50) {
          console.log('!!!!!!!!!!!停止更新!!!!!!!!!!')
          this.finished = true
        }
     } catch (err) {
      console.log(err)
      this.loading=flase
     }
    },
    async getgooods () {
        const data = await this.$axios({
        method: 'GET',
        url: `/api/WechatGoodsPageList?page=${this.page}&page_size=10&category_ids=${this.id}`
      }) 
      console.log('分页请求商品')
      console.log(data)
      return data
    },
    detail (id) {
       this.$router.push({
         name:'goodsdetail',
         params: {
          id
         }
       })
    }


  }
}
</script>

<style scoped lang="less">

.tabcontent-container{
  padding-bottom: 50px;
  .goodslist{


::v-deep .van-grid-item__content{
   padding: 0; 
   padding-top: 10px;
   width: 100%;
   height: 100%;

   .diy-box{
  width: 164px;
  height: 250px;
   
  .up{
   height: 168px;
  }

  .bot{
   height: 80px;
   padding: 5px;
   

   .title{
     font-size: 14px;
   }
   .price{
     padding-top: 10px;
     font-size: 8px;
     display: flex;
    
     .left{
       font-size: 15px;
       color: red;
     }
     .right{
       margin-left: 45px;
       color:#b1b1b1;
     }
   }
  }
}
 }

}

}


 
</style>
