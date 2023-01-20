<template>
    <div class="layout-container">

      <van-tabbar v-model="active" active-color="#EE0A24" route>

        <van-tabbar-item  class="layout-tabbar" :to="{name:'home'}">
          <template #icon>
            <div class="top"><i class="iconfont icon-shouye_home"></i></div>
    <div class="bot"><span class="text">首页</span></div>
    </template>
        </van-tabbar-item >

       <van-tabbar-item class="layout-tabbar"  :to="{name:'assemble'}">
        <template #icon>
    <div class="top"><i class="iconfont icon-diannao"></i></div>
    <div class="bot"><span class="text">微星装机</span></div>
    </template>
       </van-tabbar-item>

       <van-tabbar-item class="layout-tabbar"  :to="{name:'sort'}">
        <template #icon>
          <div class="top"><i class="iconfont icon-sort"></i></div>
    <div class="bot"><span class="text">分类</span></div>
    </template>
       </van-tabbar-item>

       <van-tabbar-item class="layout-tabbar" :to="{name:'shop'}">
        <template #icon>
          <div class="top"><i class="iconfont icon-gouwuche_shopping"></i></div>
    <div class="bot"><span class="text">购物车</span></div>
    </template>
       </van-tabbar-item>

      <van-tabbar-item class="layout-tabbar" :to="{name:'my'}">
        <template #icon>
          <div class="top"><i class="iconfont icon-wode"></i></div>
    <div class="bot"><span class="text">我的</span></div>
    </template>
      </van-tabbar-item>
</van-tabbar>
      <router-view/>
    </div>
</template>

<script>

export default {
  name: 'layoutPage',
  components: {},
  props: {},
  data () {
    return {
      active: 0
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">

.layout-container {
    .layout-tabbar {

     .top{
        display: flex;
        justify-content: center;
        align-items: center;
        i.iconfont {
        font-size: 25px;
        text-align: center;
      }
     }

      span.text {
        font-size: 12px;
        padding-left: 0.5px;
      }
    }
  }

</style>
