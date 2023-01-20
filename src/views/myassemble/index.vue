<template>
  <div class="myassemble-container">
    <div class="head" style="background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);">
      <div class="title">
        <van-icon name="arrow-left" size="25px" class="i" @click="back" />
        装机大师
      </div>

    </div>
    <div class="tab">
      <!-- to="/layout/assemble"
      to="/assembledetail" -->
      <van-tabs v-model="active" background="fff" class="tabs" line-width="26px">
        <van-tab title="精选搭配" name="a" title-style="font-size: 16px;" to="/layout/assemble"></van-tab>
        <van-tab title="自助装机" name="b" title-style="font-size: 16px;" to="/assembledetail"></van-tab>
        <van-tab title="我的装机" name="c" title-style="font-size: 16px;">
          <div class="my">
            <div class="btn">
              <div class="mycj mybtn" :class="{ sctop: isActiveA }" @click="doActive">我的创建</div>
              <div class="mysc mybtn" :class="{ sctop: isActiveB }" @click="doActive">我的收藏</div>
            </div>
            <div v-if="isActiveA">
              <div class="detail" v-for="(item, index) in list" :key="index">
                <div class="taozhuang">
                  <div class="top">
                    <div class="tleft">
                      ${{ item.price }}
                    </div>
                    <button class="tright" style="border-style: none">去看看</button>
                  </div>
                  <div class="bottom">
                    <div>
                      <div class="delits" v-for="(itemm, index) in item.goods.slice(0, 2)" :key="index">
                        <div class="name">
                          {{ itemm.category_name }}
                        </div>
                        <div class="titlel ">
                          {{ itemm.title }}
                        </div>
                      </div>
                    </div>
                    <div class="biosx" @click="doxuanzhong(item.id)">
                      <!-- "https://minipro-store.msi.com/image/chenkos.png" -->
                      <!-- "https://minipro-store.msi.com/image/chenkox.png" -->
                      <img :src="imgsrc[item.status]" draggable="false" style="width: 17px;height: 17px;">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="sccdetail" v-for="(item, index) in listsc" :key="index">
                <div class="scctaozhuang">
                  <div class="scctop">
                    <div class="scctleft">
                      <div class="scctlefta">{{ item.name }}</div>
                      <div class="scctleftb">${{ item.price }}</div>
                    </div>
                    <button class="scctrightbtn">去看看</button>
                  </div>
                  <div class="sccbottom">
                    <div class="sccbleftimg">
                      <img :src=item.image draggable="false" style="width:95px;height:95px;border-radius: 5px">
                    </div>
                    <div class="sccbright">
                      <div v-for="(itemm, index) in item.goods.slice(0, 2)" :key="index">
                        <div class="sccbblisyc">
                          <div class="sccbblname">{{ itemm.category_name }}</div>
                          <div class="sccbbldelit">{{ itemm.title }}</div>
                        </div>
                      </div>
                    </div>
                    <div class="sccbiosx" @click="ddxuanzhong(item.id)">
                      <img :src="imgsrc[item.status]" draggable="false" style="width: 17px;height: 17px;">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="none" v-show="isActiveA && list.length == 0 || isActiveB && listsc.length == 0">
              别删完我的数据！
            </div>
          </div>
        </van-tab>

      </van-tabs>
    </div>
    <div class="bottom_pages" @click="dodelete">
      <div class="vivw"></div>
      <button class="dbtn">删除</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'myassemblePage',
  components: {},
  props: {},
  data() {
    return {
      imgsrc: [
        "https://minipro-store.msi.com/image/chenkox.png",
        "https://minipro-store.msi.com/image/chenkos.png",
        "https://minipro-store.msi.com/image/chenkox.png"],
      isActiveA: true,
      isActiveB: false,
      darr: [],
      darrr: [],
      active: 'c',
      activeId: 0,
      list: [
        {
          "id": 1990,
          "name": null,
          "describe": null,
          "image": null,
          "pc_img": null,
          "is_collection": null,
          "status": 1,
          "weigh": 0,
          "price": 12730,
          "category_ids": null,
          "img_type": 1,
          "cover": null,
          "pc_cover": null,
          "video": null,
          "pc_video": null,
          "content": null,
          "pc_content": null,
          "goods": [
            {
              "title": "AMD 锐龙7 5800X 处理器(r7)7nm 8核16线程 3.8GHz 105W AM4接口 盒装CPU",
              "id": 127,
              "goods_id": 258,
              "category_name": "CPU",
              "sku_name": "装机商品，单拍不发货，注意主板兼容",
              "stock": 41,
              "price": 1899,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/165951292776749071.jpg",
              "pc_image": ""
            },
            {
              "title": "微星（MSI）MAG B550M MORTAR MAX WIFI DDR4 迫击炮 电脑主板",
              "id": 102,
              "goods_id": 255,
              "category_name": "主板",
              "sku_name": "MAG B550M MORTAR MAX WIFI",
              "stock": 4,
              "price": 999,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/165838237278115496.JPG",
              "pc_image": ""
            },
            {
              "title": "【年货节】微星（MSI）超龙 GeForce RTX 3080 SUPRIM X 10G LHR 超旗舰 电竞游戏设计智能学习电脑独立显卡",
              "id": 288,
              "goods_id": 291,
              "category_name": "显卡",
              "sku_name": "【3080-超龙X-10G】",
              "stock": 7,
              "price": 5999,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167211809590072337.jpg",
              "pc_image": ""
            },
            {
              "title": "美商海盗船16GB DDR4 3600 台式机内存条 单条 复仇者LPX系列",
              "id": 179,
              "goods_id": 281,
              "category_name": "内存",
              "sku_name": "装机商品，单拍不发货，注意主板兼容",
              "stock": 19,
              "price": 459,
              "limit": 4,
              "number": 2,
              "image": "https://oss-store.msicn.com.cn/goods/166070486421075971.jpg",
              "pc_image": ""
            },
            {
              "title": "西部数据 蓝盘  7200转/5400转64MB 台式机械硬盘",
              "id": 132,
              "goods_id": 259,
              "category_name": "HDD硬盘",
              "sku_name": "西部数据(WD)蓝盘2T",
              "stock": 38,
              "price": 379,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167142019794979242.jpg",
              "pc_image": ""
            },
            {
              "title": "黑竞SPATIUM M450 1T SSD固态硬盘 M.2接口 NVMe协议PCIe4.0 高速游戏台式笔记本电脑",
              "id": 18,
              "goods_id": 51,
              "category_name": "SSD硬盘",
              "sku_name": "【M450 1T】急速狂奔",
              "stock": 4,
              "price": 729,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166012237965446555.png",
              "pc_image": ""
            },
            {
              "title": "微星（MSI）额定750W 金牌全模组电脑电源 MPG A750GF",
              "id": 95,
              "goods_id": 129,
              "category_name": "电源",
              "sku_name": "MPG A750GF",
              "stock": 10,
              "price": 699,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/165578501911144302.jpg",
              "pc_image": ""
            },
            {
              "title": "刀锋100R 游戏办公主机atx中塔侧透机箱(支持360水冷/3070Ti/3080显卡)",
              "id": 32,
              "goods_id": 101,
              "category_name": "机箱",
              "sku_name": "MPG VELOX 100R",
              "stock": 1,
              "price": 569,
              "limit": 1,
              "number": 1,
              "image": "http://oss-store.msicn.com.cn/goods/164938349219966995.jpg",
              "pc_image": ""
            },
            {
              "title": "寒冰P360/P240 360/240一体式电脑机箱CPU水冷散热器 MAG CORELIQUID P360/P240",
              "id": 117,
              "goods_id": 125,
              "category_name": "散热器",
              "sku_name": "MAG CORELIQUID P360",
              "stock": 1,
              "price": 539,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166018758070993591.jpeg",
              "pc_image": ""
            },
            {
              "title": "安装服务（整机安装发出，不需要录制装机视频）【开始装机流程后不支持无理由退货】",
              "id": 87,
              "goods_id": 251,
              "category_name": "安装服务",
              "sku_name": "【限时赠送】价值178元安装服务0元购",
              "stock": 970,
              "price": 0,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166028082833885830.jpg",
              "pc_image": ""
            }
          ]
        },
        {
          "id": 1989,
          "name": null,
          "describe": null,
          "image": null,
          "pc_img": null,
          "is_collection": null,
          "status": 1,
          "weigh": 0,
          "price": 34292,
          "category_ids": null,
          "img_type": 1,
          "cover": null,
          "pc_cover": null,
          "video": null,
          "pc_video": null,
          "content": null,
          "pc_content": null,
          "goods": [
            {
              "title": "英特尔13代 酷睿 i9-13900KF 处理器 24核32线程 台式机CPU",
              "id": 282,
              "goods_id": 380,
              "category_name": "CPU",
              "sku_name": "装机商品，单拍不发货，注意主板兼容",
              "stock": 14,
              "price": 4799,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166642775579296892.jpg",
              "pc_image": ""
            },
            {
              "title": "【年货节】微星（MSI）MPG Z790 CARBON WIFI DDR5 暗黑 电脑主板",
              "id": 285,
              "goods_id": 338,
              "category_name": "主板",
              "sku_name": "MPG Z790 CARBON WIFI DDR5",
              "stock": 21,
              "price": 3299,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167211126951529079.jpg",
              "pc_image": ""
            },
            {
              "title": "微星 GeForce RTX 4090 SUPRIM X 24G 超龙",
              "id": 317,
              "goods_id": 446,
              "category_name": "显卡",
              "sku_name": "装机店专享，限购一张",
              "stock": 2,
              "price": 15999,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167048083898738345.png",
              "pc_image": ""
            },
            {
              "title": "美商海盗船32GB(16G×2)套装 DDR5 5600 统治者铂金 RGB灯条 高端游戏型",
              "id": 180,
              "goods_id": 282,
              "category_name": "内存",
              "sku_name": "装机商品，单拍不发货，注意主板兼容",
              "stock": 17,
              "price": 1799,
              "limit": 2,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166070579092769884.jpg",
              "pc_image": ""
            },
            {
              "title": "M480 HS 2TB SSD固态硬盘 M.2接口(NVMe协议) SPATIUM 黑竞系列 电竞高性能散热器版",
              "id": 135,
              "goods_id": 55,
              "category_name": "SSD硬盘",
              "sku_name": "【M480 HS 2T】可拆除散热片",
              "stock": 2,
              "price": 1999,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166012282745933793.png",
              "pc_image": ""
            },
            {
              "title": "【年货节】微星（MSI）额度1300W 白金全模组电源 十年保障/全日系电容/PCI-E5.0接口 MEG Ai1300P PCIE5",
              "id": 266,
              "goods_id": 348,
              "category_name": "电源",
              "sku_name": "MEG Ai1300P PCIE5",
              "stock": 8,
              "price": 2699,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/16721988316218387.jpg",
              "pc_image": ""
            },
            {
              "title": "战神 MEG PROSPECT 700RL 大容量机箱 标配4把ARGB风扇 标配显卡竖置支架 支持E-ATX主板/分体式水冷/显卡竖置",
              "id": 261,
              "goods_id": 354,
              "category_name": "机箱",
              "sku_name": "MEG PROSPECT 700RL",
              "stock": 0,
              "price": 1699,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166850728129504665.png",
              "pc_image": ""
            },
            {
              "title": "战神S360/S280 360/280一体式电脑机箱CPU水冷散热器 MEG CORELIQUID S360/S280",
              "id": 119,
              "goods_id": 116,
              "category_name": "散热器",
              "sku_name": "MEG CORELIQUID S360",
              "stock": 4,
              "price": 1999,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166018860515246470.png",
              "pc_image": ""
            },
            {
              "title": "安装服务（整机安装发出，不需要录制装机视频）【开始装机流程后不支持无理由退货】",
              "id": 87,
              "goods_id": 251,
              "category_name": "安装服务",
              "sku_name": "【限时赠送】价值178元安装服务0元购",
              "stock": 970,
              "price": 0,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166028082833885830.jpg",
              "pc_image": ""
            }
          ]
        },
        {
          "id": 1988,
          "name": null,
          "describe": null,
          "image": null,
          "pc_img": null,
          "is_collection": null,
          "status": 1,
          "weigh": 0,
          "price": 7341,
          "category_ids": null,
          "img_type": 1,
          "cover": null,
          "pc_cover": null,
          "video": null,
          "pc_video": null,
          "content": null,
          "pc_content": null,
          "goods": [
            {
              "title": "英特尔12代 酷睿 i5-12400F+雅浚B3风冷",
              "id": 154,
              "goods_id": 273,
              "category_name": "CPU",
              "sku_name": "装机商品，单拍不发货，注意主板兼容",
              "stock": 33,
              "price": 1288,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166018206557570491.jpg",
              "pc_image": ""
            },
            {
              "title": "微星（MSI）PRO B660M-A DDR4 游戏办公电脑主板",
              "id": 93,
              "goods_id": 92,
              "category_name": "主板",
              "sku_name": "PRO B660M-A DDR4",
              "stock": 1,
              "price": 959,
              "limit": 1,
              "number": 1,
              "image": "http://oss-store.msicn.com.cn/goods/164934631824657267.jpg",
              "pc_image": ""
            },
            {
              "title": "【年货节】微星（MSI）GeForce RTX 3060ti GAMING X TRIO GDDR6X 电竞游戏设计专业电脑显卡",
              "id": 311,
              "goods_id": 428,
              "category_name": "显卡",
              "sku_name": "【3060Ti-魔龙X-8GD6X】",
              "stock": 9,
              "price": 3699,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167211847117608160.jpg",
              "pc_image": ""
            },
            {
              "title": "影驰8GB DDR4 3600 台式机内存条 星曜系列",
              "id": 81,
              "goods_id": 245,
              "category_name": "内存",
              "sku_name": "装机商品，单拍不发货，注意主板兼容",
              "stock": 12,
              "price": 239,
              "limit": 4,
              "number": 2,
              "image": "https://oss-store.msicn.com.cn/goods/165811389783683959.jpg",
              "pc_image": ""
            },
            {
              "title": "黑竞SPATIUM M450 500G SSD固态硬盘 M.2接口 NVMe协议PCIe4.0 高速游戏台式笔记本电脑",
              "id": 19,
              "goods_id": 50,
              "category_name": "SSD硬盘",
              "sku_name": "【M450 500G】急速狂奔",
              "stock": 8,
              "price": 329,
              "limit": 2,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166012212091970193.png",
              "pc_image": ""
            },
            {
              "title": "微星（MSI）额定600W 游戏电脑电源 80PLUS白牌认证 MAG A600DN",
              "id": 195,
              "goods_id": 285,
              "category_name": "电源",
              "sku_name": "MAG A600DN 白牌电源",
              "stock": 3,
              "price": 309,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166081497533277688.png",
              "pc_image": ""
            },
            {
              "title": "雷万汀2钢化侧透 游戏办公台式电脑主机atx机箱 (支持mortar主板/3060显卡/240冷排散热/可走背线)",
              "id": 105,
              "goods_id": 112,
              "category_name": "机箱",
              "sku_name": "PAG LAEVATAIN 100R",
              "stock": 2,
              "price": 279,
              "limit": 1,
              "number": 1,
              "image": "http://oss-store.msicn.com.cn/goods/164939092515001666.png",
              "pc_image": ""
            },
            {
              "title": "安装服务（整机安装发出，不需要录制装机视频）【开始装机流程后不支持无理由退货】",
              "id": 87,
              "goods_id": 251,
              "category_name": "安装服务",
              "sku_name": "【限时赠送】价值178元安装服务0元购",
              "stock": 970,
              "price": 0,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166028082833885830.jpg",
              "pc_image": ""
            }
          ]
        },
        {
          "id": 1987,
          "name": null,
          "describe": null,
          "image": null,
          "pc_img": null,
          "is_collection": null,
          "status": 1,
          "weigh": 0,
          "price": 24792,
          "category_ids": null,
          "img_type": 1,
          "cover": null,
          "pc_cover": null,
          "video": null,
          "pc_video": null,
          "content": null,
          "pc_content": null,
          "goods": [
            {
              "title": "AMD 锐龙9 7900X 盒装处理器",
              "id": 253,
              "goods_id": 335,
              "category_name": "CPU",
              "sku_name": "装机商品，单拍不发货，注意主板兼容",
              "stock": 18,
              "price": 3699,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166427417026479542.jpg",
              "pc_image": ""
            },
            {
              "title": "微星（MSI）MPG X670E CARBON WIFI 暗黑 电脑主板",
              "id": 257,
              "goods_id": 330,
              "category_name": "主板",
              "sku_name": "MPG X670E CARBON",
              "stock": 1,
              "price": 3999,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/16642663197743474.jpg",
              "pc_image": ""
            },
            {
              "title": "微星（MSI） 微星 GeForce RTX 4080 GAMING X TRIO 16G 魔龙",
              "id": 325,
              "goods_id": 408,
              "category_name": "显卡",
              "sku_name": "【4080-魔龙X-16G】送1000W PCIE5.0电源",
              "stock": 2,
              "price": 10499,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167264520121757505.jpg",
              "pc_image": ""
            },
            {
              "title": "美商海盗船32GB(16G×2)套装 DDR5 5600 统治者铂金 RGB灯条 高端游戏型",
              "id": 180,
              "goods_id": 282,
              "category_name": "内存",
              "sku_name": "装机商品，单拍不发货，注意主板兼容",
              "stock": 17,
              "price": 1799,
              "limit": 2,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166070579092769884.jpg",
              "pc_image": ""
            },
            {
              "title": "M480 HS 1TB SSD固态硬盘 M.2接口(NVMe协议) SPATIUM 黑竞系列 电竞高性能散热器版",
              "id": 30,
              "goods_id": 54,
              "category_name": "SSD硬盘",
              "sku_name": "【M480 HS 1T】可拆除散热片",
              "stock": 4,
              "price": 1199,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166012272628646580.png",
              "pc_image": ""
            },
            {
              "title": "微星（MSI）额定1000W 金牌全模组电脑电源 MPG A1000G",
              "id": 97,
              "goods_id": 126,
              "category_name": "电源",
              "sku_name": "MPG A1000G",
              "stock": 5,
              "price": 1099,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/165477101525011461.jpg",
              "pc_image": ""
            },
            {
              "title": "黑金佩龙斧 游戏办公台式电脑主机eatx机箱 (预装3风扇/支持显卡竖置/ace主板/3080显卡/360水冷)",
              "id": 260,
              "goods_id": 99,
              "category_name": "机箱",
              "sku_name": "MPG SEKIRA 500G",
              "stock": 9,
              "price": 1099,
              "limit": 1,
              "number": 1,
              "image": "http://oss-store.msicn.com.cn/goods/164934945140902780.png",
              "pc_image": ""
            },
            {
              "title": "寒霜K360 360一体式电脑机箱CPU水冷散热器 MPG CORELIQUID K360",
              "id": 120,
              "goods_id": 117,
              "category_name": "散热器",
              "sku_name": "MPG CORELIQUID K360",
              "stock": 1,
              "price": 1399,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/165477127063371741.jpg",
              "pc_image": ""
            },
            {
              "title": "安装服务（整机安装发出，不需要录制装机视频）【开始装机流程后不支持无理由退货】",
              "id": 87,
              "goods_id": 251,
              "category_name": "安装服务",
              "sku_name": "【限时赠送】价值178元安装服务0元购",
              "stock": 970,
              "price": 0,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166028082833885830.jpg",
              "pc_image": ""
            }
          ]
        },
        {
          "id": 1970,
          "name": null,
          "describe": null,
          "image": null,
          "pc_img": null,
          "is_collection": null,
          "status": 1,
          "weigh": 0,
          "price": 26878,
          "category_ids": null,
          "img_type": 1,
          "cover": null,
          "pc_cover": null,
          "video": null,
          "pc_video": null,
          "content": null,
          "pc_content": null,
          "goods": [
            {
              "title": "AMD 锐龙7 5800X 处理器(r7)7nm 8核16线程 3.8GHz 105W AM4接口 盒装CPU",
              "id": 127,
              "goods_id": 258,
              "category_name": "CPU",
              "sku_name": "装机商品，单拍不发货，注意主板兼容",
              "stock": 41,
              "price": 1899,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/165951292776749071.jpg",
              "pc_image": ""
            },
            {
              "title": "【年货节】微星（MSI）MPG Z790 CARBON WIFI DDR5 暗黑 电脑主板",
              "id": 285,
              "goods_id": 338,
              "category_name": "主板",
              "sku_name": "MPG Z790 CARBON WIFI DDR5",
              "stock": 21,
              "price": 3299,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167211126951529079.jpg",
              "pc_image": ""
            },
            {
              "title": "微星（MSI） 微星 GeForce RTX 4080 SUPRIM X 16G 超龙 超旗舰 游戏电脑显卡",
              "id": 324,
              "goods_id": 407,
              "category_name": "显卡",
              "sku_name": "【4080-超龙X-16G】送1000W PCIE5.0电源",
              "stock": 4,
              "price": 11999,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167264490283504601.jpg",
              "pc_image": ""
            },
            {
              "title": "宏碁掠夺者32G(16G×2)套装 DDR5 6000频率 Vesta II 炫光星舰系列RGB",
              "id": 316,
              "goods_id": 445,
              "category_name": "内存",
              "sku_name": "装机商品，单品不发货，注意主板兼容",
              "stock": 16,
              "price": 1799,
              "limit": 2,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167023852422020816.jpg",
              "pc_image": ""
            },
            {
              "title": "西部数据 蓝盘  7200转/5400转64MB 台式机械硬盘",
              "id": 131,
              "goods_id": 259,
              "category_name": "HDD硬盘",
              "sku_name": "西部数据(WD)蓝盘1T",
              "stock": 45,
              "price": 289,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167142022141307810.jpg",
              "pc_image": ""
            },
            {
              "title": "黑竞SPATIUM M450 500G SSD固态硬盘 M.2接口 NVMe协议PCIe4.0 高速游戏台式笔记本电脑",
              "id": 19,
              "goods_id": 50,
              "category_name": "SSD硬盘",
              "sku_name": "【M450 500G】急速狂奔",
              "stock": 8,
              "price": 329,
              "limit": 2,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166012212091970193.png",
              "pc_image": ""
            },
            {
              "title": "【年货节】微星（MSI）额度1300W 白金全模组电源 十年保障/全日系电容/PCI-E5.0接口 MEG Ai1300P PCIE5",
              "id": 266,
              "goods_id": 348,
              "category_name": "电源",
              "sku_name": "MEG Ai1300P PCIE5",
              "stock": 8,
              "price": 2699,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/16721988316218387.jpg",
              "pc_image": ""
            },
            {
              "title": "刀锋100R 游戏办公主机atx中塔侧透机箱(支持360水冷/3070Ti/3080显卡)",
              "id": 32,
              "goods_id": 101,
              "category_name": "机箱",
              "sku_name": "MPG VELOX 100R",
              "stock": 1,
              "price": 569,
              "limit": 1,
              "number": 1,
              "image": "http://oss-store.msicn.com.cn/goods/164938349219966995.jpg",
              "pc_image": ""
            },
            {
              "title": "战神S360/S280 360/280一体式电脑机箱CPU水冷散热器 MEG CORELIQUID S360/S280",
              "id": 119,
              "goods_id": 116,
              "category_name": "散热器",
              "sku_name": "MEG CORELIQUID S360",
              "stock": 4,
              "price": 1999,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166018860515246470.png",
              "pc_image": ""
            },
            {
              "title": "几何未来 机箱散热风扇 龙鳞2505W 白色 12cm/aRGB主板同步",
              "id": 284,
              "goods_id": 384,
              "category_name": "机箱风扇",
              "sku_name": "几何未来 机箱散热风扇 龙鳞2505W 白色 12cm/aRGB主板同步",
              "stock": 38,
              "price": 89,
              "limit": 6,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166677535951686762.jpg",
              "pc_image": ""
            },
            {
              "title": "微星(MSI) 27英寸 纯白电竞小金刚 超频170Hz 2K 快速液晶IPS 游戏电竞显示器 G274QRFW",
              "id": 323,
              "goods_id": 295,
              "category_name": "显示器",
              "sku_name": "【G274QRFW 纯白电竞小金刚】",
              "stock": 2,
              "price": 1799,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167186545338285872.jpg",
              "pc_image": ""
            },
            {
              "title": "微星（MSI）GK50Z 机械键盘 茶轴/青轴/红轴/黑轴 RGB光效 有线 游戏电竞办公键盘 104键 吃鸡键盘 黑色",
              "id": 217,
              "goods_id": 21,
              "category_name": "键盘",
              "sku_name": "【GK50Z 黑色 茶轴】",
              "stock": 7,
              "price": 109,
              "limit": 5,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167161242366891638.jpg",
              "pc_image": ""
            }
          ]
        },
        {
          "id": 1969,
          "name": null,
          "describe": null,
          "image": null,
          "pc_img": null,
          "is_collection": null,
          "status": 1,
          "weigh": 0,
          "price": 5291,
          "category_ids": null,
          "img_type": 1,
          "cover": null,
          "pc_cover": null,
          "video": null,
          "pc_video": null,
          "content": null,
          "pc_content": null,
          "goods": [
            {
              "title": "英特尔12代 酷睿 i5-12490F+雅浚B3风冷",
              "id": 176,
              "goods_id": 276,
              "category_name": "CPU",
              "sku_name": "装机商品，单拍不发货，注意主板兼容",
              "stock": 12,
              "price": 1288,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166038193232929828.jpg",
              "pc_image": ""
            },
            {
              "title": "微星（MSI）PRO B660M-G DDR4电脑主板",
              "id": 90,
              "goods_id": 91,
              "category_name": "主板",
              "sku_name": "PRO B660M-G DDR4",
              "stock": 0,
              "price": 849,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167204707294432696.png",
              "pc_image": ""
            },
            {
              "title": "微星（MSI） 万图师 GeForce RTX 3050 VENTUS 2X 8G OC 超频版 次旗舰 电竞游戏设计电脑显卡",
              "id": 304,
              "goods_id": 277,
              "category_name": "显卡",
              "sku_name": "【3050-万图师2X-8G】",
              "stock": 7,
              "price": 1899,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167212321465724302.jpg",
              "pc_image": ""
            },
            {
              "title": "影驰8GB DDR4 3600 台式机内存条 星曜系列",
              "id": 81,
              "goods_id": 245,
              "category_name": "内存",
              "sku_name": "装机商品，单拍不发货，注意主板兼容",
              "stock": 12,
              "price": 239,
              "limit": 4,
              "number": 2,
              "image": "https://oss-store.msicn.com.cn/goods/165811389783683959.jpg",
              "pc_image": ""
            },
            {
              "title": "M371 500G SSD固态硬盘 M.2接口(NVMe协议)  SPATIUM 黑竞系列 电竞高性能版",
              "id": 232,
              "goods_id": 296,
              "category_name": "SSD硬盘",
              "sku_name": "【M371 500G】疾速星选",
              "stock": 4,
              "price": 249,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166850733697249665.png",
              "pc_image": ""
            },
            {
              "title": "微星（MSI）额定550W 迫击炮 游戏电脑电源 80PLUS铜牌 MAG A550BN",
              "id": 4,
              "goods_id": 132,
              "category_name": "电源",
              "sku_name": "MAG A550BN",
              "stock": 10,
              "price": 339,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166018905580545667.png",
              "pc_image": ""
            },
            {
              "title": "龙菱侧透 黑色游戏办公台式电脑主机atx机箱 (支持mortar主板/3060显卡/240冷排散热/可走背线)",
              "id": 5,
              "goods_id": 115,
              "category_name": "机箱",
              "sku_name": "PAG SHIELD 100L",
              "stock": 19,
              "price": 189,
              "limit": 1,
              "number": 1,
              "image": "http://oss-store.msicn.com.cn/goods/164939268222119985.png",
              "pc_image": ""
            },
            {
              "title": "安装服务（整机安装发出，不需要录制装机视频）【开始装机流程后不支持无理由退货】",
              "id": 87,
              "goods_id": 251,
              "category_name": "安装服务",
              "sku_name": "【限时赠送】价值178元安装服务0元购",
              "stock": 970,
              "price": 0,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166028082833885830.jpg",
              "pc_image": ""
            }
          ]
        }
      ],
      listsc: [
        {
          "id": 1703,
          "name": "游戏竞技丨12代刀锋白i5 12490F+RTX3060",
          "describe": "本套装送价值199元机械键盘，详情请联系在线客服",
          "image": "https://oss-store.msicn.com.cn/goods/167049508838208641.jpg",
          "pc_img": "https://oss-store.msicn.com.cn/goods/167049509241314490.jpg",
          "is_collection": null,
          "status": 1,
          "weigh": 17,
          "price": 8141,
          "category_ids": "66,17,77,32,1,12,22",
          "img_type": 1,
          "cover": null,
          "pc_cover": null,
          "video": null,
          "pc_video": null,
          "content": null,
          "pc_content": null,
          "goods": [
            {
              "title": "英特尔12代 酷睿 i5-12490F 处理器 6核12线程 单核睿频至高可达4.6Ghz 20M三级缓存 台式机CPU",
              "id": 142,
              "goods_id": 264,
              "category_name": "CPU",
              "sku_name": "装机商品，单拍不发货，注意主板兼容",
              "stock": 41,
              "price": 1199,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/165968897159601070.jpg",
              "pc_image": ""
            },
            {
              "title": "微星（MSI）MAG B660M MORTAR WIFI DDR4 迫击炮电脑主板",
              "id": 94,
              "goods_id": 93,
              "category_name": "主板",
              "sku_name": "MAG B660M MORTAR WIFI DDR4",
              "stock": 3,
              "price": 1249,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167212818361432041.jpg",
              "pc_image": ""
            },
            {
              "title": "【年货节】微星（MSI）万图师 GeForce RTX 3060 VENTUS 2X 12G OC 超频版 双风扇 电竞游戏设计专业电脑显卡",
              "id": 289,
              "goods_id": 371,
              "category_name": "显卡",
              "sku_name": "【3060-万图师-12G】",
              "stock": 15,
              "price": 2499,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167213259134703320.jpg",
              "pc_image": ""
            },
            {
              "title": "美商海盗船 16GB DDR4 3600 台式机内存条 复仇者RGB PRO灯条 单条 白色",
              "id": 335,
              "goods_id": 485,
              "category_name": "内存",
              "sku_name": "装机商品，单拍不发货，请注意主板兼容",
              "stock": 50,
              "price": 549,
              "limit": 4,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167280281523288605.jpg",
              "pc_image": ""
            },
            {
              "title": "黑竞SPATIUM M450 1T SSD固态硬盘 M.2接口 NVMe协议PCIe4.0 高速游戏台式笔记本电脑",
              "id": 18,
              "goods_id": 51,
              "category_name": "SSD硬盘",
              "sku_name": "【M450 1T】急速狂奔",
              "stock": 4,
              "price": 729,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166012237965446555.png",
              "pc_image": ""
            },
            {
              "title": "微星（MSI）额定750W 金牌全模组 白色电脑电源 MPG A750GF WHITE",
              "id": 96,
              "goods_id": 128,
              "category_name": "电源",
              "sku_name": "MPG A750GF WHITE",
              "stock": 5,
              "price": 719,
              "limit": 2,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/165477055772799697.jpg",
              "pc_image": ""
            },
            {
              "title": "刀锋100R 白色 游戏办公主机atx中塔侧透机箱",
              "id": 121,
              "goods_id": 212,
              "category_name": "机箱",
              "sku_name": "MPG VELOX 100R WHITE",
              "stock": 1,
              "price": 589,
              "limit": 2,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166070062610785142.JPG",
              "pc_image": ""
            },
            {
              "title": "寒冰240R白 240一体式电脑机箱CPU水冷散热器 MAG CORELIQUID 240R V2 WHITE",
              "id": 7,
              "goods_id": 124,
              "category_name": "散热器",
              "sku_name": "MAG CORELIQUID 240R V2 WHITE",
              "stock": 6,
              "price": 519,
              "limit": 1,
              "number": 1,
              "image": "http://oss-store.msicn.com.cn/goods/164941438597852016.png",
              "pc_image": ""
            },
            {
              "title": "安装服务（整机安装发出，不需要录制装机视频）【开始装机流程后不支持无理由退货】",
              "id": 87,
              "goods_id": 251,
              "category_name": "安装服务",
              "sku_name": "【限时赠送】价值178元安装服务0元购",
              "stock": 970,
              "price": 0,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166028082833885830.jpg",
              "pc_image": ""
            },
            {
              "title": "几何未来 机箱散热风扇 龙鳞2505W 白色 12cm/aRGB主板同步",
              "id": 284,
              "goods_id": 384,
              "category_name": "机箱风扇",
              "sku_name": "几何未来 机箱散热风扇 龙鳞2505W 白色 12cm/aRGB主板同步",
              "stock": 38,
              "price": 89,
              "limit": 6,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166677535951686762.jpg",
              "pc_image": ""
            }
          ]
        },
        {
          "id": 1577,
          "name": "游戏竞技丨全新显存RTX3060Ti 12400F主机方案",
          "describe": "全新显存 GDDR6X 【此套送外设三件套，返200元红包】",
          "image": "https://oss-store.msicn.com.cn/goods/166960150138402148.jpg",
          "pc_img": "https://oss-store.msicn.com.cn/goods/166960150435794419.jpg",
          "is_collection": null,
          "status": 1,
          "weigh": 11,
          "price": 7341,
          "category_ids": "77,66,9,16,33,1,7,12,22",
          "img_type": 1,
          "cover": null,
          "pc_cover": null,
          "video": null,
          "pc_video": null,
          "content": "<p><img src=\"https://oss-store.msicn.com.cn/editor/166960152155811958.png\" alt=\"\" width=\"800\" height=\"1000\" /></p>",
          "pc_content": "<p><img src=\"https://oss-store.msicn.com.cn/editor/166960153056293763.png\" alt=\"\" width=\"800\" height=\"1000\" /></p>",
          "goods": [
            {
              "title": "英特尔12代 酷睿 i5-12400F+雅浚B3风冷",
              "id": 154,
              "goods_id": 273,
              "category_name": "CPU",
              "sku_name": "装机商品，单拍不发货，注意主板兼容",
              "stock": 33,
              "price": 1288,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166018206557570491.jpg",
              "pc_image": ""
            },
            {
              "title": "微星（MSI）PRO B660M-A DDR4 游戏办公电脑主板",
              "id": 93,
              "goods_id": 92,
              "category_name": "主板",
              "sku_name": "PRO B660M-A DDR4",
              "stock": 1,
              "price": 959,
              "limit": 1,
              "number": 1,
              "image": "http://oss-store.msicn.com.cn/goods/164934631824657267.jpg",
              "pc_image": ""
            },
            {
              "title": "【年货节】微星（MSI）GeForce RTX 3060ti GAMING X TRIO GDDR6X 电竞游戏设计专业电脑显卡",
              "id": 311,
              "goods_id": 428,
              "category_name": "显卡",
              "sku_name": "【3060Ti-魔龙X-8GD6X】",
              "stock": 9,
              "price": 3699,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167211847117608160.jpg",
              "pc_image": ""
            },
            {
              "title": "影驰8GB DDR4 3600 台式机内存条 星曜系列",
              "id": 81,
              "goods_id": 245,
              "category_name": "内存",
              "sku_name": "装机商品，单拍不发货，注意主板兼容",
              "stock": 12,
              "price": 239,
              "limit": 4,
              "number": 2,
              "image": "https://oss-store.msicn.com.cn/goods/165811389783683959.jpg",
              "pc_image": ""
            },
            {
              "title": "黑竞SPATIUM M450 500G SSD固态硬盘 M.2接口 NVMe协议PCIe4.0 高速游戏台式笔记本电脑",
              "id": 19,
              "goods_id": 50,
              "category_name": "SSD硬盘",
              "sku_name": "【M450 500G】急速狂奔",
              "stock": 8,
              "price": 329,
              "limit": 2,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166012212091970193.png",
              "pc_image": ""
            },
            {
              "title": "微星（MSI）额定600W 游戏电脑电源 80PLUS白牌认证 MAG A600DN",
              "id": 195,
              "goods_id": 285,
              "category_name": "电源",
              "sku_name": "MAG A600DN 白牌电源",
              "stock": 3,
              "price": 309,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166081497533277688.png",
              "pc_image": ""
            },
            {
              "title": "雷万汀2钢化侧透 游戏办公台式电脑主机atx机箱 (支持mortar主板/3060显卡/240冷排散热/可走背线)",
              "id": 105,
              "goods_id": 112,
              "category_name": "机箱",
              "sku_name": "PAG LAEVATAIN 100R",
              "stock": 2,
              "price": 279,
              "limit": 1,
              "number": 1,
              "image": "http://oss-store.msicn.com.cn/goods/164939092515001666.png",
              "pc_image": ""
            },
            {
              "title": "安装服务（整机安装发出，不需要录制装机视频）【开始装机流程后不支持无理由退货】",
              "id": 87,
              "goods_id": 251,
              "category_name": "安装服务",
              "sku_name": "【限时赠送】价值178元安装服务0元购",
              "stock": 970,
              "price": 0,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166028082833885830.jpg",
              "pc_image": ""
            }
          ]
        },
        {
          "id": 1554,
          "name": "发烧电竞丨13代刀锋白i7 13700KF+RTX4080超龙主机方案",
          "describe": "本套装送40度灰机械键盘，额外赠送超龙妹手办，详情请联系客服",
          "image": "https://oss-store.msicn.com.cn/goods/166936066810712389.jpg",
          "pc_img": "https://oss-store.msicn.com.cn/goods/166936067614460834.jpg",
          "is_collection": null,
          "status": 1,
          "weigh": 16,
          "price": 23322,
          "category_ids": "66,9,78,21,86,1,7,12,22",
          "img_type": 1,
          "cover": null,
          "pc_cover": null,
          "video": null,
          "pc_video": null,
          "content": null,
          "pc_content": null,
          "goods": [
            {
              "title": "英特尔13代 酷睿 i7-13700KF 处理器 16核24线程 台式机CPU",
              "id": 281,
              "goods_id": 379,
              "category_name": "CPU",
              "sku_name": "装机商品，单拍不发货，注意主板兼容",
              "stock": 50,
              "price": 3199,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166642763675322628.jpg",
              "pc_image": ""
            },
            {
              "title": "微星（MSI）MPG Z790 EDGE WIFI DDR5 刀锋 电脑主板",
              "id": 306,
              "goods_id": 366,
              "category_name": "主板",
              "sku_name": "MPG Z790 EDGE WIFI DDR5",
              "stock": 1,
              "price": 2899,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167212786044450199.jpg",
              "pc_image": ""
            },
            {
              "title": "微星（MSI） 微星 GeForce RTX 4080 SUPRIM X 16G 超龙 超旗舰 游戏电脑显卡",
              "id": 324,
              "goods_id": 407,
              "category_name": "显卡",
              "sku_name": "【4080-超龙X-16G】送1000W PCIE5.0电源",
              "stock": 4,
              "price": 11999,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167264490283504601.jpg",
              "pc_image": ""
            },
            {
              "title": "美商海盗船32GB(16G×2)套装 DDR5 5600 统治者铂金 炫目白 RGB灯条 高端游戏型",
              "id": 305,
              "goods_id": 410,
              "category_name": "内存",
              "sku_name": "装机商品，单拍不发货，注意主板兼容",
              "stock": 18,
              "price": 1799,
              "limit": 4,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166860480837944173.jpg",
              "pc_image": ""
            },
            {
              "title": "M480 HS 1TB SSD固态硬盘 M.2接口(NVMe协议) SPATIUM 黑竞系列 电竞高性能散热器版",
              "id": 30,
              "goods_id": 54,
              "category_name": "SSD硬盘",
              "sku_name": "【M480 HS 1T】可拆除散热片",
              "stock": 4,
              "price": 1199,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166012272628646580.png",
              "pc_image": ""
            },
            {
              "title": "【年货节】微星（MSI）额定850W 金牌全模组电脑电源 ATX 3.0标准 全日系电容 PCI-E5.0接口 MPG A850G PCIE5",
              "id": 265,
              "goods_id": 349,
              "category_name": "电源",
              "sku_name": "MPG A850G PCIE5",
              "stock": 0,
              "price": 999,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167219971530823950.jpg",
              "pc_image": ""
            },
            {
              "title": "刀锋100R 白色 游戏办公主机atx中塔侧透机箱",
              "id": 121,
              "goods_id": 212,
              "category_name": "机箱",
              "sku_name": "MPG VELOX 100R WHITE",
              "stock": 1,
              "price": 589,
              "limit": 2,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166070062610785142.JPG",
              "pc_image": ""
            },
            {
              "title": "寒冰360R白 360一体式电脑机箱CPU水冷散热器",
              "id": 150,
              "goods_id": 269,
              "category_name": "散热器",
              "sku_name": "MAG CORELIQUID 360R V2 WHITE",
              "stock": 6,
              "price": 639,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166848958814829792.png",
              "pc_image": ""
            },
            {
              "title": "安装服务（整机安装发出，不需要录制装机视频）【开始装机流程后不支持无理由退货】",
              "id": 87,
              "goods_id": 251,
              "category_name": "安装服务",
              "sku_name": "【限时赠送】价值178元安装服务0元购",
              "stock": 970,
              "price": 0,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166028082833885830.jpg",
              "pc_image": ""
            }
          ]
        },
        {
          "id": 1541,
          "name": "发烧电竞丨7000系黑金R9 7900X+RTX4080魔龙主机方案",
          "describe": "本套装送500元红包，详情请联系客服",
          "image": "https://oss-store.msicn.com.cn/goods/166925809336427415.jpg",
          "pc_img": "https://oss-store.msicn.com.cn/goods/166925809815266511.jpg",
          "is_collection": null,
          "status": 1,
          "weigh": 19,
          "price": 24792,
          "category_ids": "66,78,86,21,8,1,22,12,7",
          "img_type": 1,
          "cover": null,
          "pc_cover": null,
          "video": null,
          "pc_video": null,
          "content": null,
          "pc_content": null,
          "goods": [
            {
              "title": "AMD 锐龙9 7900X 盒装处理器",
              "id": 253,
              "goods_id": 335,
              "category_name": "CPU",
              "sku_name": "装机商品，单拍不发货，注意主板兼容",
              "stock": 18,
              "price": 3699,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166427417026479542.jpg",
              "pc_image": ""
            },
            {
              "title": "微星（MSI）MPG X670E CARBON WIFI 暗黑 电脑主板",
              "id": 257,
              "goods_id": 330,
              "category_name": "主板",
              "sku_name": "MPG X670E CARBON",
              "stock": 1,
              "price": 3999,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/16642663197743474.jpg",
              "pc_image": ""
            },
            {
              "title": "微星（MSI） 微星 GeForce RTX 4080 GAMING X TRIO 16G 魔龙",
              "id": 325,
              "goods_id": 408,
              "category_name": "显卡",
              "sku_name": "【4080-魔龙X-16G】送1000W PCIE5.0电源",
              "stock": 3,
              "price": 10499,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167264520121757505.jpg",
              "pc_image": ""
            },
            {
              "title": "美商海盗船32GB(16G×2)套装 DDR5 5600 统治者铂金 RGB灯条 高端游戏型",
              "id": 180,
              "goods_id": 282,
              "category_name": "内存",
              "sku_name": "装机商品，单拍不发货，注意主板兼容",
              "stock": 17,
              "price": 1799,
              "limit": 2,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166070579092769884.jpg",
              "pc_image": ""
            },
            {
              "title": "M480 HS 1TB SSD固态硬盘 M.2接口(NVMe协议) SPATIUM 黑竞系列 电竞高性能散热器版",
              "id": 30,
              "goods_id": 54,
              "category_name": "SSD硬盘",
              "sku_name": "【M480 HS 1T】可拆除散热片",
              "stock": 4,
              "price": 1199,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166012272628646580.png",
              "pc_image": ""
            },
            {
              "title": "微星（MSI）额定1000W 金牌全模组电脑电源 MPG A1000G",
              "id": 97,
              "goods_id": 126,
              "category_name": "电源",
              "sku_name": "MPG A1000G",
              "stock": 5,
              "price": 1099,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/165477101525011461.jpg",
              "pc_image": ""
            },
            {
              "title": "黑金佩龙斧 游戏办公台式电脑主机eatx机箱 (预装3风扇/支持显卡竖置/ace主板/3080显卡/360水冷)",
              "id": 260,
              "goods_id": 99,
              "category_name": "机箱",
              "sku_name": "MPG SEKIRA 500G",
              "stock": 9,
              "price": 1099,
              "limit": 1,
              "number": 1,
              "image": "http://oss-store.msicn.com.cn/goods/164934945140902780.png",
              "pc_image": ""
            },
            {
              "title": "寒霜K360 360一体式电脑机箱CPU水冷散热器 MPG CORELIQUID K360",
              "id": 120,
              "goods_id": 117,
              "category_name": "散热器",
              "sku_name": "MPG CORELIQUID K360",
              "stock": 1,
              "price": 1399,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/165477127063371741.jpg",
              "pc_image": ""
            },
            {
              "title": "安装服务（整机安装发出，不需要录制装机视频）【开始装机流程后不支持无理由退货】",
              "id": 87,
              "goods_id": 251,
              "category_name": "安装服务",
              "sku_name": "【限时赠送】价值178元安装服务0元购",
              "stock": 970,
              "price": 0,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166028082833885830.jpg",
              "pc_image": ""
            }
          ]
        },
        {
          "id": 1092,
          "name": "发烧电竞丨13代战神i9 13900KF+RTX4090方案套装",
          "describe": "i9 13900KF+ RTX4090",
          "image": "https://oss-store.msicn.com.cn/goods/166684050961130084.jpg",
          "pc_img": "https://oss-store.msicn.com.cn/goods/166684051534704341.jpg",
          "is_collection": null,
          "status": 1,
          "weigh": 9,
          "price": 34292,
          "category_ids": "9,21,84,78,7,12,22,1",
          "img_type": 1,
          "cover": null,
          "pc_cover": null,
          "video": null,
          "pc_video": null,
          "content": null,
          "pc_content": null,
          "goods": [
            {
              "title": "英特尔13代 酷睿 i9-13900KF 处理器 24核32线程 台式机CPU",
              "id": 282,
              "goods_id": 380,
              "category_name": "CPU",
              "sku_name": "装机商品，单拍不发货，注意主板兼容",
              "stock": 14,
              "price": 4799,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166642775579296892.jpg",
              "pc_image": ""
            },
            {
              "title": "【年货节】微星（MSI）MPG Z790 CARBON WIFI DDR5 暗黑 电脑主板",
              "id": 285,
              "goods_id": 338,
              "category_name": "主板",
              "sku_name": "MPG Z790 CARBON WIFI DDR5",
              "stock": 21,
              "price": 3299,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167211126951529079.jpg",
              "pc_image": ""
            },
            {
              "title": "微星 GeForce RTX 4090 SUPRIM X 24G 超龙",
              "id": 317,
              "goods_id": 446,
              "category_name": "显卡",
              "sku_name": "装机店专享，限购一张",
              "stock": 2,
              "price": 15999,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/167048083898738345.png",
              "pc_image": ""
            },
            {
              "title": "美商海盗船32GB(16G×2)套装 DDR5 5600 统治者铂金 RGB灯条 高端游戏型",
              "id": 180,
              "goods_id": 282,
              "category_name": "内存",
              "sku_name": "装机商品，单拍不发货，注意主板兼容",
              "stock": 17,
              "price": 1799,
              "limit": 2,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166070579092769884.jpg",
              "pc_image": ""
            },
            {
              "title": "M480 HS 2TB SSD固态硬盘 M.2接口(NVMe协议) SPATIUM 黑竞系列 电竞高性能散热器版",
              "id": 135,
              "goods_id": 55,
              "category_name": "SSD硬盘",
              "sku_name": "【M480 HS 2T】可拆除散热片",
              "stock": 2,
              "price": 1999,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166012282745933793.png",
              "pc_image": ""
            },
            {
              "title": "【年货节】微星（MSI）额度1300W 白金全模组电源 十年保障/全日系电容/PCI-E5.0接口 MEG Ai1300P PCIE5",
              "id": 266,
              "goods_id": 348,
              "category_name": "电源",
              "sku_name": "MEG Ai1300P PCIE5",
              "stock": 8,
              "price": 2699,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/16721988316218387.jpg",
              "pc_image": ""
            },
            {
              "title": "战神 MEG PROSPECT 700RL 大容量机箱 标配4把ARGB风扇 标配显卡竖置支架 支持E-ATX主板/分体式水冷/显卡竖置",
              "id": 261,
              "goods_id": 354,
              "category_name": "机箱",
              "sku_name": "MEG PROSPECT 700RL",
              "stock": 0,
              "price": 1699,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166850728129504665.png",
              "pc_image": ""
            },
            {
              "title": "战神S360/S280 360/280一体式电脑机箱CPU水冷散热器 MEG CORELIQUID S360/S280",
              "id": 119,
              "goods_id": 116,
              "category_name": "散热器",
              "sku_name": "MEG CORELIQUID S360",
              "stock": 4,
              "price": 1999,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166018860515246470.png",
              "pc_image": ""
            },
            {
              "title": "安装服务（整机安装发出，不需要录制装机视频）【开始装机流程后不支持无理由退货】",
              "id": 87,
              "goods_id": 251,
              "category_name": "安装服务",
              "sku_name": "【限时赠送】价值178元安装服务0元购",
              "stock": 970,
              "price": 0,
              "limit": 1,
              "number": 1,
              "image": "https://oss-store.msicn.com.cn/goods/166028082833885830.jpg",
              "pc_image": ""
            }
          ]
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {
    back() {
      this.$router.back();
    },
    doActive() {
      this.isActiveA = !this.isActiveA
      this.isActiveB = !this.isActiveB
    },
    doxuanzhong(id) {
      console.log(this.list.indexOf(this.list.find(x => x.id === id)));
      const index = this.list.indexOf(this.list.find(x => x.id === id))
      this.list[index].status++
      if (this.list[index].status == 2) {
        this.darr.push(id)
      }
      if (this.list[index].status == 3) {
        this.list[index].status = 1
        // this.darr.splice(this.darr.indexOf(index), 1);
        this.darr = this.darr.filter(item => item !== id);
      }
      // this.darr.push(index)
      // console.log(this.darr);
    },
    ddxuanzhong(id) {
      console.log(this.listsc.indexOf(this.listsc.find(x => x.id === id)));
      const index = this.listsc.indexOf(this.listsc.find(x => x.id === id))
      this.listsc[index].status++
      if (this.listsc[index].status == 2) {
        this.darrr.push(id)
      }
      if (this.listsc[index].status == 3) {
        this.listsc[index].status = 1
        // this.darrr.splice(this.darrr.indexOf(index), 1);
        this.darrr = this.darrr.filter(item => item !== id);
      }
      // this.darrr.push(index)
      // console.log(this.darrr);
    },
    dodelete() {
      // console.log(this.darr);
      for (let index = 0; index < this.darr.length; index++) {
        // console.log(this.list.indexOf(this.list.find(x => x.id === this.darr[index])));
        // console.log(this.list.find(x => x.id === this.darr[index]));
        this.list.splice(this.list.indexOf(this.list.find(x => x.id === this.darr[index])), 1)
      }
      this.darr = []
      // console.log(this.darrr);
      for (let index = 0; index < this.darrr.length; index++) {
        // console.log(this.listsc.indexOf(this.listsc.find(x => x.id === this.darrr[index])));
        // console.log(this.listsc.find(x => x.id === this.darrr[index]));
        this.listsc.splice(this.listsc.indexOf(this.listsc.find(x => x.id === this.darrr[index])), 1)
      }
      this.darrr = []
    }
  }
}
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}



.myassemble-container {
  .head {
    width: 100%;
    position: fixed;
    height: 44px;
    // // position: fixed;
    // display: flex;
    // overflow: hidden;
    // justify-content: space-between;
    // box-sizing: border-box;
    z-index: 998;
    // height: calc(44px + env(safe-area-inset-top));  
    padding: 7px 3px;
    top: 0;



    .i {
      position: absolute;
      left: 1%;
      top: 15%;
      // margin-top: 3px;
      // height: 30px;
    }

    .title {
      // width: 120%;
      font-weight: 700;
      font-size: 16px;
      line-height: 30px;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      opacity: 1;
      text-align: center;
      // left: 70px;
      // right: 70px;
      // min-width: 0;
      // margin-right: 155px;
    }


  }

  .tab {
    margin-top: 45px;
    padding-top: 5px;
    // padding-bottom: 100px;

    .tabs {
      /deep/.van-tab--active {
        font-size: 16px;
        font-weight: 600;
        color: #000;
      }

      /deep/ .van-tabs__line {
        position: absolute;
        bottom: 20px;
        left: 0;
        z-index: 1;
        height: 3px;
        background-color: #ed1c24;
        border-radius: 30px;
        transform: translateX(312.5px) translateX(-50%);
        transition-duration: 0.3s;
      }

      .my {
        padding-top: 3px;
        // height: 1000px;
        padding-bottom: 120px;
        background-color: #f7f7f7;

        .btn {
          width: 70%;
          display: flex;
          margin: 0 auto;
          justify-content: space-between;
          margin-top: 10px;
          background-color: #e0e0e0;
          border-radius: 30px;

          .mybtn {
            width: 50%;
            text-align: center;
            line-height: 39px;
            font-size: 14px;
            border-radius: 30px;
            color: #666;
          }

          .sctop {
            background-color: #ff6a6f;
            color: #fff;
          }
        }



        .detail {
          width: 90%;
          margin: 0 auto;
          padding-top: 10px;
          // background-color: pink;

          .taozhuang {
            background-color: #fff;
            border-radius: 10px;
            margin-bottom: 1px;
            padding: 10px;
            padding-bottom: 38px;

            .top {
              display: flex;
              align-items: center;
              justify-content: space-between;

              .tleft {
                font-size: 15px;
                color: #ed1c24;
                padding-top: 5px;
              }

              /deep/.tright {
                width: 28%;
                line-height: 30px;
                text-align: center;
                font-size: 12px;
                color: #fff;
                border-radius: 30px;
                background-color: #ed1c24;
              }
            }
          }

          .bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 10px;
            position: relative;

            .delits {
              display: flex;
              align-items: center;
              justify-content: space-between;


              // position: relative;
              .name {
                width: 73px;
                height: 16px;
                color: #666;
                font-size: 12px;
              }

              .titlel {
                width: 235px;
                height: 16px;
                margin: 0 0 0 7px;
                color: #666;
                font-size: 12px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }

            .biosx {
              position: absolute;
              width: 17px;
              height: 17px;
              bottom: -21px;
              right: 10px;
            }
          }
        }

        .sccdetail {
          width: 90%;
          margin: 0 auto;
          // padding: 10px 0;
          padding-top: 10px;

          .scctaozhuang {
            background-color: #fff;
            border-radius: 10px;
            // margin-bottom: 10px;
            padding: 10px;
            padding-bottom: 30px;

            .scctop {
              display: flex;
              align-items: center;
              justify-content: space-between;

              .scctleft {
                width: 68%;

                .scctlefta {
                  width: 100%;
                  font-size: 14px;
                }

                .scctleftb {
                  font-size: 15px;
                  color: #ed1c24;
                  padding-top: 5px;
                }
              }

              .scctrightbtn {
                width: 28%;
                line-height: 30px;
                text-align: center;
                font-size: 12px;
                color: #fff;
                border-radius: 30px;
                background-color: #ed1c24;
                border: 0px;
              }
            }

            .sccbottom {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: 10px;
              position: relative;

              .sccbright {
                width: 68%;

                .sccbblisyc {
                  padding: 5px 0;
                  font-size: 12px;
                  display: flex;
                  align-items: center;

                  .sccbblname {
                    width: 50px;
                    font-size: 12px;
                  }

                  .sccbbldelit {
                    width: 160px;
                    font-size: 12px;
                    margin-left: 7px;
                    color: #666;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }
                }
              }

              .sccbiosx {
                position: absolute;
                width: 17px;
                height: 17px;
                bottom: -10px;
                right: 10px;
              }
            }
          }

        }

        .none {
          padding: 10px;
          font-size: 14px;
          text-align: center;
          // height: 1000px;
          height: 380px
        }
      }
    }


  }

  .bottom_pages {
    width: 94%;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 3% 20px 3%;

    .dbtn {
      font-size: 16px;
      width: 106px;
      height: 38px;
      line-height: 36px;
      text-align: center;
      border: 1px solid #979797;
      border-radius: 30px;
      background-color: transparent;
    }
  }
}
</style>
