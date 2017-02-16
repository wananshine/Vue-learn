<template>
    <div class="main flexbox flexcolumn">
        <header>
            <div class="btl-head">
                <div class="btl-top-nav">
                    <top-back-image></top-back-image>
                    订单详情
                </div>
            </div>
        </header>
        <section class="main">
            <div class="de-box">
                <div class="title">订单详情</div>
                <div class="con-1">
                    <p><span>订单号：{{orderCode}}</span></p>
                    <p><span>下单时间：{{createTime}}</span></p>
                </div>
            </div>
            <div class="de-box">
                <div class="title">商品详情</div>
                <div v-for="(item, idx) in orderDetailDTOList" class="con-2">
                    <div class="item">
                        <div class="img">
                            <img :src="item.picturePath" alt="">
                        </div>
                        <div class="con-main">
                            <p class="tit">{{item.productName}}</p>
                            <div class="detail">
                                {{item.specifications}}
                            </div>
                            <div class="price">
                                <label><i class="yen">&yen;</i>{{item.sharePrice}}</label><span>x{{item.quantity}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="totalprice">实付款：<i class="yen">&yen;</i>{{orderTotalAmount}}</p>
            </div>
        </section>
        <!-- <div class="tixian">
            {{$route.params.ordernum}}
        </div> -->
    </div>
</template>

<script>
    import Vue from 'vue'
    import * as types from '../../store/mutation-types'
    // import { mapGetters } from 'vuex'
    import { Toast, MessageBox } from 'mint-ui'
    import apiButielan from '../../api/butielan'

    export default {
        data () {
            return {
                orderCode: this.$route.params.ordernum, // 订单编号
                orderTotalAmount: '', // 实付款
                createTime: '', // 下单时间
                orderDetailDTOList: []
            }
        },
        beforeRouteEnter (to, from, next) {
            next((vm) => {
                vm.$store.commit('changeAnimate', {
                    mode: 'normal'
                });
                vm.$store.commit('changeShowBottomNav', false);
            })
        },
        beforeRouteLeave (to, from, next) {
            this.$store.commit('changeShowBottomNav', true);
            next()
        },
        computed: {
            // ...mapGetters({
            //     loginInfo: 'getLoginInfo'
            // })
        },
        created () {
            this.getOrderInfo();
        },
        filters: {
            orderTypeToName (val) {
                return orderTypeArr[val];
            }
        },
        methods: {
            getOrderInfo () {
                let me = this;
                console.log('getOrderInfo', Date.now());
                apiButielan.get_order_info({
                    params: {
                        orderCode: me.orderCode, // 订单编号
                    }
                }).then(function (ret) {
                    console.log(ret.data.orderDetailDTOList)
                    if (ret.data && ret.data.orderDetailDTOList) {
                        me.orderTotalAmount = ret.data.orderTotalAmount;
                        me.createTime = ret.data.createTime;
                        me.orderDetailDTOList = ret.data.orderDetailDTOList;
                    }

                }, function () {
                    Toast({
                        message: '系统错误，请重试',
                        duration: 1000
                    });
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import '../../assets/less/order-detail.less';

</style>
