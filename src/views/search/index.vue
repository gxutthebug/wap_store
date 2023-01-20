<template>
  <div>
    <div class="search">
      <van-icon name="arrow-left" @click="back" class="van-icon"/>
      <van-search 
        class="van-search"
        v-model="value" 
        placeholder="请输入搜索关键词" 
        shape="round"
      />
    </div>
    <div class="hot">
      <van-icon name="fire" color="red" size="16px"/><span class="ji">热门搜索</span>
    </div>
    <div class="hotsearch">
      <van-row>
        <van-col span="6">游戏本</van-col>
        <van-col span="6">GP76</van-col>
        <van-col span="6">显示器</van-col>
        <van-col span="6">3070</van-col>
        <van-col span="6">3080</van-col>
        <van-col span="10">绝影G566</van-col>
        <van-col span="6">武士66</van-col>
        <van-col span="6">3080ti</van-col>
        <van-col span="6">机械键盘</van-col>
        <van-col span="6">主板</van-col>
        <van-col span="8">强袭GE66</van-col>
        <van-col span="6">GE76</van-col>
        <van-col span="6">X570</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>

export default {
  name: 'myPage',
  components: {},
  props: {},
  data() {
    return {
      value: '',
    };
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    back(){
      // 返回上一个路径
      this.$router.back();
    }
  }
}
</script>

<style scoped>
.search{
  display: flex;
  justify-content: center; /*水平居中*/ 
  align-items: center; /*垂直居中*/
  justify-content: flex-start;
}
.van-icon{
  padding: 10px 10px;  
}
.van-search{
  padding: 10px 45px;
}

.ji{
  font-size: medium;
}
</style>
