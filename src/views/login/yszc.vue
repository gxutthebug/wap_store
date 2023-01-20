<template>
  <div class="yszc">
    <div class="navbar">
      <span @click="tubiao" > 《 </span>
      <li>用户隐私协议</li>
    </div>
    <div class="text" v-html="xieyi.content"></div>

  </div>
</template>

<script>
  import Axios from "axios"
  export default {
    name: "yszc",
    data() {
      return {
        xieyi:{}
      }
    },
    methods:{
      tubiao(){
        this.$router.replace({path: '/login'});
      },
    },
    mounted(){
      Axios({
        method:'get',
      	url:"/api/getPrivacyAgreement",
      }).then(res=>{
        console.log(res.data.data);
      	this.xieyi = res.data.data;
      })
    }
  }
</script>

<style>
  body{
    background: white;
  }
.navbar{
				display: flex;
				list-style: none;
				line-height: 60px;
				position: sticky;
				top:0px;
        overflow: hidden;
				background-color: white;
			}
			.navbar>li{
				width:100%;
        font-weight: bold;
        text-align: center;
        font-size: 23px;
			}
      .text{
        height: calc(100% - 30px);
        font-size: 19px;
      }

</style>
