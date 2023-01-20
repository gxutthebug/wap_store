<template>
  <div class="assemblePage-container">
    <!-- <div class="headimg-box">
      <van-image src="https://minipro-store.msi.com/image/1.png" />
    </div> -->
    <div class="kefu">
      <a href="https://101641.kefu.easemob.com/webim/im.html?configId=6df54afd-c970-43f0-ae23-b2f8664a74ff">
        <img src="https://minipro-store.msi.com/image/kefu1.png" style="width: 65px; height: 65px;" draggable="false">
      </a>
      <!-- <img src="https://minipro-store.msi.com/image/kefu1.png"  draggable="false"> -->
    </div>
    <div class="search-box">
      <div class="A">
        <div class="left" :class="{ sctop: isActive }">
          <van-image width="100%" height="100%" fit="cover"
            src="https://minipro-store.msi.com/image/WechatIMG5255.png" />
        </div>
        <div class="right">
          <van-search v-model="valuen" shape="round" background="transparent" placeholder="请输入商品名称" @focus="doSearch" />
        </div>
      </div>

    </div>
    <div class="tab">
      <van-tabs v-model="active" background="#ed1c24" title-inactive-color="white" title-active-color="white"
        line-width="35px" line-height="4px" color="white">
        <van-tab title="精选搭配" name="0" title-style="font-size: 16px;font-weight: 600;">
          <div class="tabciassy">
            <section class="theme-list">
              <div class="fixed-nav" ref="fixednav">
                <div class="fixed-nav-content">
                  <div v-for="(item, index) in listt" :key="index">
                    <p  class="tab-title">
                      <span style="  height: 25px;display: block;">{{ item.name }}</span>
                      <img class="img" style="width: 25px;height: 25px;"
                        src="https://minipro-store.msi.com/image/xiaosanjiao.png" alt="">
                    </p>
                  </div>

                </div>
              </div>
            </section>
          </div>
          <div class="goods">
            <div class="goodsitem" v-for="item in list" :key="item.id">
              <div class="top">
                <div class="leftt">
                  <div class="van-ellipsis" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                    {{ item.name }}</div>
                  <div class="van-ellipsis" style="color: #ed1c24; padding-top: 5px;">￥{{ item.price }}</div>
                </div>
                <van-button type="danger" class="rightt">去看看</van-button>
              </div>
              <div class="bottom">
                <div class="lefttt">
                  <van-image width="100" height="100" :src=item.image />
                </div>
                <div class="righttt">
                  <div>
                    <div class="van-ellipsis" v-for="(itemm, index) in item.goods.slice(0, 4)" :key="index">
                      <span style="font-size: 12px;color: #000;"> {{ itemm.category_name }} </span>
                      <span style="width: 150px; color: #666;"> {{ itemm.title }} </span>
                    </div>
                  </div>
                  <!-- <div class="van-ellipsis" v-if="index < 3">
                    <strong>{{ itemm.category_name }}</strong><span>{{ itemm.title }}</span>
                  </div> -->
                  <!-- <div class="van-ellipsis"><strong>主板</strong><span>{{item.id}}</span></div>
                  <div class="van-ellipsis"><strong>显卡</strong><span>{{item.id}}</span></div>
                  <div class="van-ellipsis"><strong>内存</strong><span>{{item.id}}</span></div> -->
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="自助装机" name="1" to="/assembledetail" title-style="font-size: 16px;font-weight: 600;"></van-tab>
        <van-tab title="我的装机" name="2" to="/myassemble" title-style="font-size: 16px;font-weight: 600;"></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'assemblePage',
  components: {},
  props: {},
  data() {
    return {
      valuen: "",
      active: 0,
      list: [],
      listt: [],
      isActive: false,
      activeId: 0

    }
  },
  computed: {},
  watch: {},
  created() {
  },
  async mounted() {
    const { data: res } = await axios.get("https://minipro-store.msi.com/api/getSuitList?category_ids=")
    const { data: ress } = await axios.get("https://minipro-store.msi.com/api/getSuitCategory")
    // console.log(ress);
    this.list = res.data;
    this.listt = ress.data;
    window.addEventListener('scroll', this.handleScroll)

  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    doSearch() {
      this.$router.push('/search');
    },
    changeTab(id, event) {
      // 如果选择的和当前激活的不同
      if (id !== this.activeId) {
        this.activeId = id;
        // 计算当前按钮的位置，看是否需要移动
        const spanLeft = event.clientX; // 当前点击的元素左边距离
        const divBox = document.querySelector(".select-tab").clientWidth / 2; // 点击的元素一半宽度
        const totalWidths = document.body.clientWidth; // 屏幕总宽度
        const widths = totalWidths / 2; // 一半的屏幕宽度
        const spanRight = totalWidths - spanLeft; // 元素的右边距离
        const scrollBox = document.querySelector(".fixed-nav"); // 获取最外层的元素
        const scrollL = scrollBox.scrollLeft; // 滚动条滚动的距离
        // 当元素左边距离 或者 右边距离小于100时进行滑动
        if (spanRight < 100 || spanLeft < 100) {
          scrollBox.scrollLeft = scrollL + (spanLeft - widths) + divBox;
        }
      }

    },


    handleScroll() {
      // 页面滑动的距离
      let scrollTop = document.documentElement.scrollTop
      // 当页面滑动的距离大于300px时元素显示，否则不显示
      if (scrollTop >= 100) {
        this.isActive = true
      } else {
        this.isActive = false
      }
    }
  }
}
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: transparent;
}

.sctop {
  transition: all .7s;
  padding-bottom: 10px;
}

.kefu {
  position: fixed;
  z-index: 99;
  // padding: 0;
  // margin: 0;
  top: 39.5%;
  right: 2%;
}

// .headimg-box {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 114px;
//   z-index: -1;
//   overflow: hidden;
// }

.search-box {
  position: fixed;
  width: 100%;
  z-index: 1000;
  display: flex;
  top: 0;
  align-items: center;
  background-color: #ed1c24;
  padding-bottom: 5px;

  .A {
    display: flex;
  }

  .left {
    margin: 5px 0px 0px 15px;
    width: 35px;
    height: 35px;
  }

  .right {
    margin-top: 7px;
    width: 300px;
    height: 30px;
    align-items: center;
    background-color: #f04951;
    margin-left: 10px;
    border-radius: 25px;
    // line-height: 30px;

    .van-search {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background-color: unset;

      .van-search__content {
        background-color: unset;

        .van-cell {
          color: #ffffff;
        }

        ::v-deep .van-field__control::-webkit-input-placeholder {
          color: #ffffff;
          font-size: 12px;

          // background-color: antiquewhite;
        }
      }
    }
  }
}

.tab {
  margin-top: 39px;
  // padding-top: 30px;
  // background-color: #ed1c24;
  background-color: #f8f8f8;

  .goods {
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
    // background-color: skyblue;
    padding-top: 10px;
    margin-bottom: 50px;
  }

  .goodsitem {
    // position:absolute;
    // margin: 20px;
    // margin-bottom: 10px;
    // border: 1px solid gray;
    // border-radius: 5px;

    // background-color:azure;
    // width: 84%;
    border-radius: 5px;
    background-color: #fff;
    // background-color: #DCDCDC;
    padding: 10px;
    margin: 0 auto;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-right: 20px;

    .top {
      padding-top: 10px;
      display: flex;
      position: flex;
      font-size: 15px;
      justify-content: space-between;

      .leftt {
        width: 220px;
        margin-left: 15px;
      }

      .rightt {
        width: 70px;
        height: 30px;
        line-height: 30px;
        font-size: 10px;
        Border-radius: 30px;
        // margin-right: 20px;
        // width: 70px;
        // line-height: 30px;
        // font-size: 12px;
        text-align: center;
        // border-radius: 30px;
        color: #fff;
        // background-color: #ed1c24;
      }
    }

    .bottom {
      padding-bottom: 10px;
      padding-top: 10px;
      display: flex;
      justify-content: start;
      font-size: 10px;
      margin-right: 20px;

      .lefttt {
        margin-left: 15px;
        // position: absolute;
        // top: 0;
        // left: 0;
        // opacity: 0;
      }

      .righttt {
        width: 180px;
        height: 16px;
        line-height: 16px;
        font-size: 12px;
        margin-left: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
}

.tabciassy {
  background-color: #f8f8f8;
  padding: 10px;
  // padding-left: 20px;
  // .theme-list {
  // margin-top: 10px;
  // }

  .fixed-nav {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }

  .fixed-nav-content {
    display: flex;
  }

  .tab-title {
    // padding: 0 20px;
    // margin-right: 12px;
    color: #141414;
    border-radius: 13px;
    font-size: 16px;
    flex-shrink: 0;
    height: 25px;
    line-height: 25px;
    display: flex;
    // padding-left: 10px;
    width: 100px;
    // margin: 25px;
    padding-top: 10px;
    // padding-left: 20px;
    padding-bottom: 10px;
    text-align: center;
    // margin-left: 5px;

    // flex-direction: column;
    justify-content: space-evenly;
  }

  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar {
    width: 0.01rem;
    opacity: 0;
    display: none;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {
    background-color: #fff;
    opacity: 0;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    width: 0.01rem;
    border-radius: 0.01rem;
    opacity: 0;
  }

}
</style>
