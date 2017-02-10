<template>
  <div class="m-Container">
    <header>
    <div class="btl-head-fy">
        <div class="top-nav-bar">
          <router-link class="nbar-cell active" to="/home/order">已分润</router-link>
          <router-link class="nbar-cell" to="/home/order/nofenrun">待分润</router-link>
        </div>
    </div>
</header>
<div class="nav-container">
    <div class="nav-justified">
        <div class="nav-link">
            <div class="nav-link-all">
                <a v-for="(item, idx) in typeTabs" :class=" { active: item.active } " @click="onSetCurTab(idx)"  class="nav-cont">{{ item.title }}</a>
            </div>
        </div>
        <div class="nav-search"><img src="img/icon-12.png"></div>
    </div>
</div>
<section class="main">
    <div class="btl-content">
        <div class="order-container" v-infinite-scroll="loadMore"
                     infinite-scroll-disabled="loading"
                     infinite-scroll-distance="150">
            <div class="order-list-refund">
                <div class="order-title">
                    <span class="title-type">退款</span>
                    <span class="money-num-o">-8.00</span>
                </div>
                <div class="order-info">
                    <a class="or-cell"><i>在线升级：</i><em>99.00元</em></a>
                    <a class="or-cell"><i>分润时间：</i><em>2016.01.07 18:06:27</em></a>
                    <a class="or-cell"><i>手机号码：</i><em>13800138000</em></a>
                    <a class="or-cell"><i>订&nbsp;单&nbsp;&nbsp;号：</i><em>MDBHC06415348-1</em></a>
                </div>
            </div>
            <div class="order-list-end">
                <div class="order-title">
                    <span class="title-type">订单完成</span>
                    <span class="money-num-o">+8.00</span>
                </div>
                <div class="order-info">
                    <a class="or-cell"><i>在线升级：</i><em>99.00元</em></a>
                    <a class="or-cell"><i>分润时间：</i><em>2016.01.07 18:06:27</em></a>
                    <a class="or-cell"><i>手机号码：</i><em>13800138000</em></a>
                    <a class="or-cell"><i>订&nbsp;单&nbsp;&nbsp;号：</i><em>MDBHC06415348-1</em></a>
                </div>
            </div>
        </div>
    </div>
</section>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        typeTabs: [
          { title: "全部" ,active: true},
          { title: "商城" ,active: false},
          { title: "在线升级" ,active: false},
          { title: "激活创客" ,active: false},
          { title: "创客续费" ,active: false},
        ]
      }
    },

    methods: {
      onSetCurTab(idx){
        let me = this;
        let tab = this.typeTabs[idx];
        this.typeTabs.forEach(function(tt){
          tt.active = false;
        });
        tab.active = true;
        me.resetParams();
        me.loadMore();
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/already-fenyun.less";
</style>
