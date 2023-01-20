<template>
<div>
    <div class="a" @click="tubiao"><</div>
    <div class="login-box">
      <h2>账号密码登录</h2>
      <h3>欢迎使用微星电子用户版</h3>
      <form>
        <div class="user-box">
          <input type="text" name="" required="" v-model="username">
          <label>请输入手机号</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required="" v-model="password">
          <label>请输入密码</label>
        </div>
        <div class="wjmm">忘记密码</div>
        <div class="b">
          <div class="login" @click="getAgreeShow()" :class="agreeShow ? 'tick' : ' '" ></div>
          <div class="gx">勾选即代表您已同意</div>
          <div class="two">
            <div class="c">
              <router-link :to="{ path: '/yszc'}">《隐私政策》</router-link>
            </div>
            <div class="d">
              <router-link :to="{ path: '/zcxy'}">《注册协议》</router-link>
            </div>
          </div>
        </div>
        <div class="e">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a @click="handleSubmit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            登录
          </a>
          <a @click="signUp_asd">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            暂不登录
          </a>
        </div>
        <div class="yzm" @click="yzm">手机验证码登录</div>
      </form>
    </div>
</div>
</template>

<script>
import axios from "axios";
import Vue from 'vue';
import { Dialog } from 'vant';
export default {

  name: "Login",
  data() {
    return {
       username: '',
       password: '',
       msg: '',
       agreeShow:false,
    };
  },
  methods: {
    // beforeCreate(){
    //   document.querySelector("body").classList.add("cat");
    // },
    // beforeDestroy(){
    //   document.querySelector("body").classList.remove("cat");
    // },
    getAgreeShow() {
        this.agreeShow = !this.agreeShow; // 控制点击
    },
    tubiao(){
      this.$router.replace({path: '/layout/home'});
    },
    signUp_asd(){
      this.$router.replace({path: '/layout/home'});
    },
    yzm(){
      this.$router.replace({path: '/yzmdl'});
    },
    open1() {
      this.$message({
        showClose: true,
        message: this.msg,
        type: 'warning'
      });
    },
    open2() {
      this.$message({
        showClose: true,
        message: this.msg,
        type: 'success'
      });
    },
    open3() {
      this.$message({
        showClose: true,
        message: this.msg,
        type: 'error'
      });
    },
    handleSubmit() {
      let _this = this
            if(this.username===""||this.password===""){
              this.msg = "请输入密码"
              this.open3()
            }else{
              window.console.log(this.username,this.password);
              if(this.username=="12345678901"&&this.password=="00000"){
                this.$router.replace({path: '/layout/my'})
              }else{
                //弹窗
                Dialog.alert({
                  title: '提示',
                  message: '手机号或密码输入错误，请重新输入',
                  theme: 'round-button',
                }).then(() => {
                  // on close
                });
              }
            }
    },
  }
}
</script>

<style scoped="scoped">
/* body {
   /* background-image: url(https://img-blog.csdnimg.cn/9cbef4a6f3ba493b969a73ee3f70e5d0.jpg); */
   /*background-color: #e64848;
   background-repeat: no-repeat;
   background-size: 100%;
   background-position: 0px -50px;
} */
/* .cat{ */
  /* background-image: url(https://img-blog.csdnimg.cn/9cbef4a6f3ba493b969a73ee3f70e5d0.jpg); */
  /* background-color: #e64848; */
  /* background-repeat: repeat-x;
   background-size: 100%;
   background-position: 0px -50px;
} */
.a{
  left: 0px;
  top: 0px;
  color: #fff;
  /* background-image: url(https://img-blog.csdnimg.cn/9cbef4a6f3ba493b969a73ee3f70e5d0.jpg); */
  background-color: #e64848;
  width: 100%;
  position: fixed;
}
.b{
  display: flex;
  width: 100%;
  height: 30px;
}
.login {
  display: flex;
  margin-left: 0px;
  margin-top: 0px;
    position: relative;
    width: 20px;
    height: 20px;
    margin: 0 6px;
    border: 1px solid #e64848 !important;
    border-radius: 2px;
  }
  .tick::after {
      content: " ";
      position: absolute;
      display: inline-block;
      width: 12px;
      height: 6px;
      border-width: 0 0 2px 2px;
      overflow: hidden;
      border-color: #e64848;
      border-style: solid;
      -webkit-transform: rotate(-50deg);
      transform: rotate(-50deg);
      left: 3px;
      top: 4px;
    }
    .login>li{
      direction: ltr;
        font-size: 60%;
        color: grey;
    }
    .gx{
      margin-left: 0px;
      margin-top: 0px;
      font-size: 16px;
      color: grey;
      width: 240px;
      /* border: 1px solid red; */
      display: inline-block;
      border-width: 0 0 0 0px;
      /* background-color:red; */
    }
    .two{
      margin-left: -50px;
      margin-top: 0px;
      width: 240px;
      height:100%;
      /* border: 1px solid red; */
      display: inline-block;
      border-width: 0 0 0 0px;
    }
    .c{
      margin-left: 13px;
      margin-top: -50px;
      font-size: 16px;
      width: 180px;
      height:25px;
    }
    .d{
      margin-left: 113px;
      margin-top: -25px;
      font-size: 16px;
      width: 180px;
      height:25px;
    }
    .e{
      margin-left: 20px;
      font-size:18px;
    }
.login-box {
  position: absolute;
  top: 60%;
  left: 50%;
  width: 400px;
  height: 100%;
  padding: 15px;
  transform: translate(-50%, -50%);
  background: white;
  box-sizing: border-box;
  /* box-shadow: 0 15px 25px rgba(0, 0, 0, .6); */
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: dimgrey;
  font-style: normal;
  font-weight:lighter;
  text-shadow:2px 3px 1px gainsboro;
  text-align: center;
}
.login-box h3{
  margin: 0 0 30px;
  font-size: 50%;
  padding: 0;
  color: dimgrey;
  text-shadow:2px 3px 1px gainsboro;
  font-weight:lighter;
  text-align: center;
}
.login-box .wjmm,.yzm{
  font-size: 50%;
  padding: 0;
  background-color: white;
  color:darkgrey;
}

.login-box .user-box {
  position: relative;
}
.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: gray;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid lightgrey;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: red;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: gray;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: royalblue;/*
  font-size: 16px; */
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.login-box a:hover {
  background: blueviolet;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px gray,
  0 0 25px gray,
  0 0 50px gray,
  0 0 100px gray;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent,blueviolet );
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, blueviolet);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, blueviolet);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, blueviolet);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
}
</style>
