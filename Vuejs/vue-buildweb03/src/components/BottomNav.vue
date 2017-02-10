<template>
    <div class="btm-nav">
        <div class="nav-bar-b">
            <router-link class="nav-list-b" to='/home/tongji'>
                <div class="nav-img-b"></div>
                <div class="nav-text-b">统计</div>
            </router-link>
            <router-link class="nav-list-b" to='/home/order'>
                <div class="nav-img-b"></div>
                <div class="nav-text-b">订单</div>
            </router-link>
            <router-link class="nav-list-b" to='/home/cy'>
                <div class="nav-img-b"></div>
                <div class="nav-text-b">成员</div>
            </router-link>
            <router-link class="nav-list-b" to='/home/my'>
                <div class="nav-img-b"></div>
                <div class="nav-text-b">我的</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    // const tabMap = {
    //     'TJ': '/home/tongji',
    //     'DD': '/home/order',
    //     'CY': '/home/cy',
    //     'WD': '/home/my'
    // };
    // export default {
    //     computed: {
    //         ...mapGetters({
    //             tabIsTJ: 'tabIsTJ',
    //             tabIsDD: 'tabIsDD',
    //             tabIsCY: 'tabIsCY',
    //             tabIsWD: 'tabIsWD',
    //             showBottomNav: 'getShowBottomNav'
    //         })
    //     },
    //     methods: {
    //         onTabChange (tabname) {
    //             let path = tabMap[tabname];
    //             this.$router.push({
    //                 path: path
    //             })
    //         }
    //     }
    // }
    export default {
        data(){
          return{}
        },
        computed: {

        },
        methods: {
        }
    }
</script>

<style lang="less">
    @import "../assets/less/btm-nav.less";
</style>
