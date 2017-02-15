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
  infinite-scroll-distance="5">
            <!-- <div class="order-list-refund">
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
            </div> -->
            <div v-for="(item, idx) in listData" :class="{ 'order-list-end': item.isfinish ,'order-list-refund': !item.isfinish }" :orderstatus="item.orderStatus">
                <div class="order-title">
                    <span class="title-type">{{ item.orderStatusText }}</span>
                    <span class="money-num-o">{{ item.subsidy }}</span>
                </div>
                <div class="order-info">
                    <a class="or-cell"><i>{{ item.orderType | orderTypeToName }}：</i><em>{{ item.orderAmount }}元</em></a>
                    <a class="or-cell"><i>分润时间：</i><em>{{ item.subsidyTime }}</em></a>
                    <a class="or-cell"><i>手机号码：</i><em>{{ item.mobile }}</em></a>
                    <a class="or-cell"><i>订&nbsp;单&nbsp;&nbsp;号：</i><em>{{ item.orderNum }}</em></a>
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
        ],
        listData: [
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+1' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+2' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+3' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+4' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+5' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+6' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+7' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+8' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+9' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+10' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+11' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+12' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+13' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+14' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+15' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+16' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+17' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+18' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+19' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+20' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+21' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+22' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+23' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+24' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+25' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+26' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+27' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+28' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+29' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+30' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+31' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+32' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+33' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+34' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+35' , isfinish: true},
          { orderType: '在线升级', orderAmount: '1233', subsidyTime: '12321', mobile: '12321', orderNum: '123123', orderStatusText: '退款', subsidy: '+36' , isfinish: true},
        ]
      }
    },

    // filters: {
    //   orderTypeToName(val){
    //     return orderTypeArr[val];
    //   }
    // },

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
      },

      loadMore(){
        this.loading = true;
  setTimeout(() => {
    let last = this.listData[this.listData.length - 1];
    for (let i = 1; i <= 10; i++) {
      this.listData.push(last + i);
    }
    this.loading = false;
  }, 2500);
        // console.log('loadMore', Date.now());
      }
    }
  }
</script>
<style lang="less">
  @import "../../assets/less/already-fenyun.less";
</style>
