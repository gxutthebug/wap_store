<template>
  <div class="sort-container">
    <div class="title">分类</div>

    <div class="ss">
      <van-search v-model="value" placeholder="请输入商品名称" />
    </div>

    <div class="down">
      <div class="left">

        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item :title="item.name" v-for="item in name2" :key="item.id" />
        </van-sidebar>
      </div>

      <div class="right">

        <div class="top">
          <img :src=name2[indexx].mini_cover  style="width: 100%; height: 100%;">
          <!-- <img src=name2[indexx] && style="width: 100%; height: 100%;"> -->
        </div>


        <div class="bot">
          <div class="listp">
            <div class="text">{{ name2[indexx].name }}</div>
            <div class="goods">
              <van-grid :column-num="3">
                <van-grid-item v-for="(item, index) in list" :key="index" style="width: 100; height: 100%;"
                  :icon="item.image" :text="item.name" :to="{ path: '/show' }" />
              </van-grid>
            </div>
          </div>


        </div>

      </div>

    </div>
  </div>
</template>

<script>

import Axios from "axios"
export default {
  name: 'sortPage',
  components: {},
  props: {},
  data() {
    return {
      name2: [{}],
      activeKey: 0,
      value: '',
      list: [],
      indexx: 0,

    }
  },
  computed: {},
  watch: {},
  created() { },
  async mounted() {
    // Axios({
    //   method: 'GET',
    //   url: "/api/getOneCategory"
    // }).then(res => {
    //   this.name2 = res.data.data;
    //   console.log(res.data.data);
    // })
    const {data:ress} = await Axios.get("https://minipro-store.msi.com/api/getOneCategory")
    this.name2 = ress.data
    console.log(ress.data);
    const {data:res} = await Axios.get("https://minipro-store.msi.com/api/getOneCategory",{ params: { parent_id: this.name2[0].id } })
    console.log(res.data);
    this.list = res.data
  },
  methods: {
    async onChange(index) {
      // this.name2[index].id
      console.log(this.name2[index].id);
      console.log(index);
      this.indexx = index
      // Notify({ type: 'primary', message: index });
      const { data: res } = await Axios.get("https://minipro-store.msi.com/api/getOneCategory", { params: { parent_id: this.name2[index].id } })
      console.log(res.data);
      this.list = res.data
    },
  },
}
</script>

<style scoped="scoped" lang="less">
.sort-container {
  width: 100%;
  overflow: hidden;
}

.title {
  height: 30px;
  font-size: 20px;
  text-align: center;
}

.ss {
  height: 50px;
}

.down {
  height: 620px;
  display: flex;
  background-color: #f8f8f8;

  .right {
    width: 275px;
    // height: 600px;
    // background-color: #f8f8f8;

    .top {
      width: 100%;
      height: 80px;


    }

    .bot {
      margin: 0 auto;
      padding: 0 10px;
      margin-top: 10px;
      background-color: #fff;

      .listp {
        width: 100%;
        padding-top: 10px;

        .text {
          font-size: 12px;
          font-weight: 500;
        }

      }

    }

  }

}

.left {
  width: 97px;
}
</style>
