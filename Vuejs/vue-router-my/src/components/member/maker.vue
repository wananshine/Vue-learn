<template>
	<div v-if='btndefault'>
		<header>
		<div class="btl-head-nav">
			<div class="top-nav-bar">
			    <router-link class="nbar-cell" to='/member/member01' @click="btndefault">会员</router-link>
				<router-link class="nbar-cell active" to='/member/maker'>创客</router-link>
				<router-link class="nbar-cell" to=''>商户</router-link>
			</div>
		</div>
	</header>
	<section class="main">
		<div class="btl-content">
			<div class="fr-container">
				<div class="main-list">
					<div class="order-title">
						<span class="title-type"><i>等待审核</i></span>
					</div>
					<ul class="navlist">
						<li>
							<div class="time-list time-list-w">
								<div class="month-income">
									<label><img src="../../assets/img/icon-13.png">创&nbsp;&nbsp;客:</label>
									<span>54682468</span>
								</div>
								<div class="month-income">
									<label><img src="../../assets/img/icon-14.png">受邀者:</label>
									<span>138****8000</span>
								</div>
							</div>
							<button class="btn-pass-audit">通过审核</button>
						</li>
						<li>
							<div class="time-list time-list-w">
								<div class="month-income">
									<label><img src="../../assets/img/icon-13.png">创&nbsp;&nbsp;客:</label>
									<span>54682468</span>
								</div>
								<div class="month-income">
									<label><img src="../../assets/img/icon-14.png">受邀者:</label>
									<span>138****8000</span>
								</div>
							</div>
							<button class="btn-pass-audit">通过审核</button>
						</li>
					</ul>
				</div>

				<div class="main-list main-earn">
					<div class="order-title">
						<span class="title-type"><i>收益中</i></span>
					</div>
					<ul class="navlist">
						<li>
							<div class="time-list time-list-w">
								<div class="month-income">
									<label><img src="../../assets/img/icon-13.png">创&nbsp;&nbsp;客:</label>
									<span>54682468</span>
								</div>
								<div class="month-income">
									<label><img src="../../assets/img/icon-14.png">受邀者:</label>
									<span>138****8000</span>
								</div>
							</div>
							<button class="btn-pass-audit">月结收益</button>
							<button class="btn-pass-memlist">会员列表</button>
						</li>
						<li>
							<div class="time-list time-list-w">
								<div class="month-income">
									<label><img src="../../assets/img/icon-13.png">创&nbsp;&nbsp;客:</label>
									<span>54682468</span>
								</div>
								<div class="month-income">
									<label><img src="../../assets/img/icon-14.png">受邀者:</label>
									<span>138****8000</span>
								</div>
							</div>
							<button class="btn-pass-audit">月结收益</button>
							<button class="btn-pass-memlist">会员列表</button>
						</li>
						<li>
							<div class="time-list time-list-w">
								<div class="month-income">
									<label><img src="../../assets/img/icon-13.png">创&nbsp;&nbsp;客:</label>
									<span>54682468</span>
								</div>
								<div class="month-income">
									<label><img src="../../assets/img/icon-14.png">受邀者:</label>
									<span>138****8000</span>
								</div>
							</div>
							<button class="btn-pass-audit">月结收益</button>
							<button class="btn-pass-memlist">会员列表</button>
						</li>
						<li>
							<div class="time-list time-list-w">
								<div class="month-income">
									<label><img src="../../assets/img/icon-13.png">创&nbsp;&nbsp;客:</label>
									<span>54682468</span>
								</div>
								<div class="month-income">
									<label><img src="../../assets/img/icon-14.png">受邀者:</label>
									<span>138****8000</span>
								</div>
							</div>
							<button class="btn-pass-audit">月结收益</button>
							<button class="btn-pass-memlist">会员列表</button>
						</li>
						<li>
							<div class="time-list time-list-w">
								<div class="month-income">
									<label><img src="../../assets/img/icon-13.png">创&nbsp;&nbsp;客:</label>
									<span>54682468</span>
								</div>
								<div class="month-income">
									<label><img src="../../assets/img/icon-14.png">受邀者:</label>
									<span>138****8000</span>
								</div>
							</div>
							<button class="btn-pass-audit">月结收益</button>
							<button class="btn-pass-memlist">会员列表</button>
						</li>
						<li>
							<div class="time-list time-list-w">
								<div class="month-income">
									<label><img src="../../assets/img/icon-13.png">创&nbsp;&nbsp;客:</label>
									<span>54682468</span>
								</div>
								<div class="month-income">
									<label><img src="../../assets/img/icon-14.png">受邀者:</label>
									<span>138****8000</span>
								</div>
							</div>
							<button class="btn-pass-audit">月结收益</button>
							<button class="btn-pass-memlist">会员列表</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	</div>
</template>

<script type="text/javascript">
	// require('../../assets/less/maker.less')
	export default {
		name: 'maker',
		data(){
			return{
				btndefault: false
			}
		}
	}
</script>
<style type="text/css">
	@import '../../assets/less/maker.less';
</style>
