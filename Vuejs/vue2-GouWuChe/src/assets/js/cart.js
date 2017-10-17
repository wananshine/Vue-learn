/**
 * Created by Administrator on 2017/5/7.
 */


export default {
    name: 'demo',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        totalMoney: 0,
        productList: [],
      }
    },
    filters:{

    },
    mounted: function(){
      this.cartView();
    },
    methods: {
      cartView: function(){
        this.$http.get("http://localhost:3000/result", { "id": 123 }).then(function(res){
          // console.log(res.body)
          // this.productList = res.data.list;
          // this.totalMoney = res.data.totalMoney;
          this.productList = res.body.list;
          this.totalMoney = res.body.totalMoney;
        })
      }
    }
  }

