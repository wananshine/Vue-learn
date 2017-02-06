<template>
	<div>
		<header>
		<div class="btl-head-nav">
			<div class="top-nav-bar">
			    <router-link class="nbar-cell active" to='/member/member01'>会员</router-link>
				<router-link class="nbar-cell" to='/member/maker'>创客</router-link>
				<router-link class="nbar-cell" to=''>商户</router-link>
			</div>
		</div>
	</header>
	<section class="main">
    <div class="btl-content">
        <div class="fr-container">
            <div class="order-title">
                <span class="title-type">共<i>123</i>个</span>
            </div>
            <ul class="navlist">
                    <li>
                        <div class="time-list time-list-w">
                            <div class="month-income">
                                <label>手机号码：</label>
                                <span>138****8000</span>
                            </div>
                        </div>
                        <div class="earnings">
                            <div class="income-amount">付费会员</div>
                            <div class="amount-data">2016.04.05 18:12:33</div>
                        </div>
                    </li>
                    <li>
                        <div class="time-list time-list-w">
                            <div class="month-income">
                                <label>手机号码：</label>
                                <span>138****8000</span>
                            </div>
                        </div>
                        <div class="earnings">
                            <div class="income-amount">付费会员</div>
                            <div class="amount-data">2016.04.05 18:12:33</div>
                        </div>
                    </li>
                    <li class="ex-members">
                        <div class="time-list time-list-w">
                            <div class="month-income">
                                <label>手机号码：</label>
                                <span>138****8000</span>
                            </div>
                        </div>
                        <div class="earnings">
                            <div class="income-amount">体验会员</div>
                            <div class="amount-data">2016.04.05 18:12:33</div>
                        </div>
                    </li>
            </ul>
        </div>
    </div>
</section>
	</div>
</template>

<script type="text/javascript">
    require('../../assets/less/member01.less')
	export default {
		name: 'member01',
		data(){
			return{}
		}
	}
</script>

<style scoped lang="less">
   // @import '../../assets/less/member01.less';
</style>

