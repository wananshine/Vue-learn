<template>
  <div>
    <router-link class="col-sm-3 cell" to='/one'>1</router-link>
    <router-link class="col-sm-3 cell" to='/two'>2</router-link>
    <router-link class="col-sm-3 cell" to='/three'>3</router-link>
    <router-link class="col-sm-3 cell" to='/four'>4</router-link>
  </div>
</template>

<script>
    export default {
      name: 'Btmnav',
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
