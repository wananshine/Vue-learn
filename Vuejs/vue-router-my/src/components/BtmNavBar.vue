<template>
    <div class="group group-nav">
        <div class="nav-bar">
            <router-link class="col-sm-3 cell" to='/total'><img src="../assets/img/icon-05.png">统计</router-link>
            <router-link class="col-sm-3 cell" to='/order'><img src="../assets/img/icon-06.png">订单</router-link>
            <router-link class="col-sm-3 cell" to='/member'><img src="../assets/img/icon-08.png">成员</router-link>
            <router-link class="col-sm-3 cell" to='/our'><img src="../assets/img/icon-07.png">我的</router-link>
        </div>
      </div>
</template>


<script type="text/javascript">
    import { mapGetters } from 'vuex'

    export default {
        name: 'BtmNavbar',
        data(){
            return{}
        }
    }
</script>

<style type="text/css">
    .group-nav{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
    }
    .nav-bar{
        display: flex;
    }
    .cell{
        height: 1rem;
        line-height: 1rem;
        flex: 1;
        display: block;
        text-align: center;
        color: #333 !important;
    }
</style>