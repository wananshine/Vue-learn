<template>
  <div class="checkout">
    <div id="wrapper">
      <div class="container">
        <div class="cart">
          <div class="checkout-title">
            <span>购物车</span>
          </div>

          <!-- table -->
          <div class="item-list-wrap">
            <div class="cart-item">
              <div class="cart-item-head">
                <ul>
                  <li>商品信息</li>
                  <li>商品金额</li>
                  <li>商品数量</li>
                  <li>总金额</li>
                  <li>编辑</li>
                </ul>
              </div>
              <ul class="cart-item-list">
                <li v-for="(item, key) in productList">
                  <div class="cart-tab-1">
                    <div class="cart-item-check">
                      <a href="javascript:void 0" class="item-check-btn" :class="{ 'check': item.checked }" @click="selectedProduct(item)" >
                        <svg class="icon icon-ok"><use xlink:href="#icon-ok"></use></svg>
                      </a>
                    </div>
                    <div class="cart-item-pic">
                      <img :src="item.productImage" alt="烟">
                    </div>
                    <div class="cart-item-title">
                      <div class="item-name">{{ item.productName }} </div>
                    </div>
                    <div class="item-include">
                      <dl>
                        <dt>赠送:</dt>
                        <dd v-for="part in item.parts" v-text="part.partsName"></dd>
                      </dl>
                    </div>
                  </div>
                  <div class="cart-tab-2">
                    <div class="item-price">{{ item.productPrice | formatMoney }}</div>
                  </div>
                  <div class="cart-tab-3">
                    <div class="item-quantity">
                      <div class="select-self select-self-open">
                        <div class="quantity">
                          <a href="javascript:void 0" @click="changeMOney(item, -1)">-</a>
                          <input type="text" v-model="item.productQuantity" disabled>
                          <a href="javascript:void 0" @click="changeMOney(item, 1)">+</a>
                        </div>
                      </div>
                      <div class="item-stock">有货</div>
                    </div>
                  </div>
                  <div class="cart-tab-4">
                    <div class="item-price-total">{{ item.productPrice * item.productQuantity | money("元") }}</div>
                  </div>
                  <div class="cart-tab-5">
                    <div class="cart-item-operation">
                      <a @click="delConfirm(item)" href="javascript:void 0" class="item-edit-btn" >
                        <svg class="icon icon-del"><use xlink:href="#icon-del" ></use></svg>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- footer -->
          <div class="cart-foot-wrap">
            <div class="cart-foot-l">
              <div class="item-all-check">
                <a href="javascript:void 0" >
                    <span class="item-check-btn" :class="{ check: checkAllFlag }" @click="checkAll(true)">
                      <svg class="icon icon-ok"><use xlink:href="#icon-ok"></use></svg>
                    </span>
                  <span>全选</span>
                </a>
              </div>
              <div class="item-all-del">
                <a href="javascript:void 0" class="item-del-btn" @click="checkAll(false)">
                  <span>取消全选</span>
                </a>
              </div>
            </div>
            <div class="cart-foot-r">
              <div class="item-total">
                Item total: <span class="total-price">{{ totalMoney | money("元") }}</span>
              </div>
              <div class="next-btn-wrap">
                <a href="javascrit:;" class="btn btn--red" style="width: 200px">结账</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-modal modal-msg md-modal-transition" id="showModel" :class="{ 'md-show': delflag }">
        <div class="md-modal-inner">
          <div class="md-top">
            <button class="md-close" @click="delflag=false">关闭</button>
          </div>
          <div class="md-content">
            <div class="confirm-tips">
              <p id="cusLanInfo">你确认删除此订单信息吗？</p>
            </div>
            <div class="btn-wrap col-2">
              <div class="btn-wrap col-2">
                <button @click="delProduct()" class="btn btn-m" id="btnModalConfirm">Yes</button>
                <button class="btn btn-m btn-red" id="btnNodalCancel" @click="delflag=false">No</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-if="delflag"></div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'demo',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        totalMoney: 0,
        totalPrice: 0,
        productList: [],
        checkAllFlag: false,
        delflag: false,
        curProduct:" ",
      }
    },
    filters:{
      formatMoney: function(value){
        return "￥" + value.toFixed(2);
      },
      money: function(value, type){
        return "￥" + value.toFixed(2) + type;
      }
    },
    mounted: function(){
      this.cartView();
    },
    // computed: {
    //   totalMoney: function(){
    //     var allmoney = 0;
    //     this.productList.forEach(function(item, index){
    //       if(item.checked){
    //         allmoney += item.productPrice * item.productQuantity;
    //       }
    //     })
    //     return allmoney;
    //   }
    // },
    methods: {
      cartView: function(){
        this.$http.get("http://localhost:3000/result", { "id": 123 }).then(res=>{
          // console.log(res.body)
          // this.productList = res.data.list;
          // this.totalMoney = res.data.totalMoney;
          this.productList = res.body.list;
          this.totalMoney = res.body.totalMoney;
        })
      },
      changeMOney: function(product, way){
        if (way>0) {
          product.productQuantity++;
        }else{
          product.productQuantity--;
          if (product.productQuantity<1) {
            product.productQuantity = 1;
          }
        };
        this.calcTotalPrice();
      },
      selectedProduct: function(item){
        if (typeof item.checked == "undefined") {
          // Vue.set(item, "checked", true);
          this.$set(item, "checked", true)
        }else{
          item.checked = !item.checked;
        };
        this.calcTotalPrice();
      },
      checkAll: function(flag){
        // this.checkAllFlag = !this.checkAllFlag;  //不需要参数的时候
        this.checkAllFlag = flag;
        let _this = this;
        this.productList.forEach(function(item, index){
             if (typeof item.checked == "undefined") {
                // Vue.set(item, "checked", true);
                _this.$set(item, "checked", _this.checkAllFlag)
              }else{
                item.checked = _this.checkAllFlag;
              }
          });
        this.calcTotalPrice();
      },
      calcTotalPrice: function(){
        var _this = this;
        this.totalMoney = 0;
        this.productList.forEach(function(item, index){
          if (item.checked) {
            _this.totalMoney += item.productPrice * item.productQuantity;
          }
        })
      },
      delConfirm: function(item){
        console.log(123)
        this.delflag = true;
        this.curProduct = item;

      },
      delProduct: function(){
        var index = this.productList.indexOf(this.curProduct);
        this.productList.splice(index, 1);
        this.delflag=false;
      }
    }
  }




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
 @import "../assets/css/base.css";
 @import "../assets/css/checkout.css";
 @import "../assets/css/modal.css";
</style>
