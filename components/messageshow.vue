<template>
	<view class="m-item" :id="'message'+id">
		<view class="m-left">
			<image class="head_icon" :src="abosultPaht+user.home.img" v-if="message.user=='home'"></image>
		</view>
		<view class="m-content">
			<view class="m-content-head" :class="{'m-content-head-right':message.user=='customer'}">
				<view :class="'m-content-head-'+message.user">{{message.content}} </view>
			</view>
		</view>
		<view class="m-right">
			<image class="head_icon" :src="abosultPaht+user.customer.img" v-if="message.user=='customer'"></image>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	export default {
		data() {
			return {
				abosultPaht: "../../"
			}
		},
		props: ['message', 'id'],
		computed: mapState(['user'])
	}
</script>

<style>
	.m-item {
		display: flex;
		flex-direction: row;
		padding-top: 35px;
	}
	.m-left {
		display: flex;
		width: 100px;
		justify-content: center;
		align-items: flex-start;
	}
	.m-content {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		word-break: break-all;
		font-size: 14px;
	}
	.m-right {
		display: flex;
		width: 100px;
		justify-content: center;
		align-items: flex-start;
	}
	.head_icon {
		width: 50px;
		height: 50px;
	}
	.m-content-head {
		position: relative;
	}
	.m-content-head-right {
		display: flex;
		justify-content: flex-end;
	}
	.m-content-head-home {
		text-align: left;
		background: #afe5ff;
		border: 1px #afe5ff solid;
		border-radius: 20px;
		padding: 20px;
		box-shadow:#afe5ff 0px 0px 10px;
	}
	.m-content-head-customer {
		border: 1px #ffffff solid;
		background: #ffffff;
		border-radius: 20px;
		padding: 20px;
		box-shadow:#afe5ff 0px 0px 40px;
		
	}
</style>
