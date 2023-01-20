<template>
    <div class="show">
      <div class="header">
        <div class="fanhui" @click="tubiao"> <van-icon name="arrow-left" /> </div>
        <div class="ss"><van-search placeholder="请输入商品名称" class="sss" /></div>
      </div>
      <div class="middle">
        <div class="zh">
          <span style="font-size: 14px;color: #ed1c24;">综合</span>
          <img src="https://minipro-store.msi.com/image/22.png" style="width: 6px;height: 5px;margin-left: 5px;" />
        </div>
        <div class="zh">
          <span style="font-size: 14px;">销量</span>
          <img src="https://minipro-store.msi.com/image/21.png" style="width: 6px;height: 5px;margin-left: 5px;" />
        </div>
        <div class="zh">
          <span style="font-size: 14px;">价格</span>
          <img src="https://minipro-store.msi.com/image/21.png" style="width: 6px;height: 5px;margin-left: 5px;" />
        </div>
        <div class="zh">
          <span style="font-size: 14px;">筛选</span>
          <img src="https://minipro-store.msi.com/image/21.png" style="width: 6px;height: 5px;margin-left: 5px;" />
        </div>
      </div>
      <div class="down">
        <div class="sshop" v-for="(item, index) in show" :key="index">
          <div class="iimg">
            <img :src=item.image style="width: 168px; height: 169px;">
          </div>
          <div class="ttitle">
            {{ item.title }}
          </div>
          <div class="bbttom">
            <div class="pprice">
              ${{ item.price }}
            </div>
            <div class="xxiaoliang">
              销量{{ item.sales }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import Axios from "axios";
  import { Dialog } from 'vant';
  export default {
    data() {
      return {
        show: [{}],
      };
    },
    mounted() {
      Axios({
        method: 'GET',
        url: "/api/SearchGoods?category_ids=328&coupon=&page=1&sales=0&page_size=10&price=1&title=&brand_id=&screens=&activity_id="
      }).then(res => {
        this.show = res.data.data.data;
      })
    },
    methods: {
      tubiao() {
        this.$router.replace({ path: '/layout/sort' });
      }
    }
  }
  
  </script>
  <style scoped lang="less">
  .show {
    width: 100%;
    overflow: hidden;
  }
  
  .header {
    padding-top: 6px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .fanhui {
    padding-top: 3px;
    position: inherit;
    /* margin: 0; */
    margin: 0 14px;
    margin-left: 10px;
    overflow: hidden;
  }
  
  .ss {
    width: 100%;
    border-radius: 29px;
    display: flex;
    align-items: center;
    padding: 0 9px;
    line-height: 34px;
  
    /deep/.sss {
      width: 100%;
      height: 34px;
      border-radius: 30px;
      display: flex;
      align-items: center;
      padding: 0 10px;
      line-height: 34px;
      background-color: #f8f8f8
        /* margin-left: 12%; */
      ;
    }
  }
  
  .middle {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background-color: #f7f7f7;
    height: 40px;
  }
  
  .zh {
    align-items: center;
    display: flex;
  }
  
  .zh>img {
    width: 6px;
    height: 6px;
    display: inline-block;
    overflow: hidden;
    position: relative;
  
  }
  
  .zh>span {
    font-size: 16px;
  }
  
  .down {
    width: 94%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
  
    .sshop {
      width: 48%;
      margin: 1%;
      background-color: #fff;
      border-radius: 15px;
      overflow: hidden;
  
      .iimg {
        width: 100%;
        height: 168px;
      }
  
      .ttitle {
        width: 92%;
        margin: 0 auto;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: 14px;
        margin-top: 5px;
      }
  
      .bbttom {
        width: 92%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 10px;
  
        .pprice {
          font-size: 15px;
          color: #ed1c24;
        }
  
        .xxiaoliang {
          color: #b1b1b1;
          font-size: 12px;
        }
      }
    }
  }
  </style>
  