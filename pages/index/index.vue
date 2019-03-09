<template>
	<view class="index">
		<!-- 导航  -->
		<view>
			<uni-nav-bar left-icon="list" fixed="true" right-icon="search" title="消息" @click-left="showleftDrawer">
			</uni-nav-bar>
		</view>
		<!-- 抽屉插件 -->
		<uni-drawer :visible="leftDrawerVisible" @close="closeDrawer">
			<view  class="drawer-box">
				<!-- 个人页头部 -->
				<view class="drawer_title">

					<view class="my_icon">
						<img src="../../static/img/customerHL.png" width="60px" height="60px"></img>
					</view>

					<view class="my_name">
						<view class="my_name_box">
							<view >name</view>
							<view>等级</view>
						</view>
					</view>
					<view class="copyreader"></view>
				</view>

				<!-- 个人页list -->
				<view class="drawer_list">
					 
				</view>
			</view>
		</uni-drawer>
		<!-- 消息列表 -->
		<view class="list_content" v-for="name in names" :key="name.id" @click="msgPage">
			<view class="M_list">

				<view class="M_icon">
					<img src="../../static/icon-1.jpg"></img>
				</view>

				<view class="M_name">
					<p class="user_name">{{name.name}}</p>
					<p class="M_last">233333333333333333333333333333333333333333333333</p>
				</view>

				<view class="M_num" v-if="num!=0">

					<p v-if="num<100">{{num}}</p>
					<p v-else="num>100">99+</p>
				</view>
			</view>
		</view>
		<view class="list_content">
			<view class="M_list">
			</view>
		</view>
	</view>

</template>

<script>
	import {
		uniBadge
	} from '@dcloudio/uni-ui'
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import uniDrawer from "@/components/uni-drawer/uni-drawer.vue"

	export default {
		components: {
			uniBadge,
			uniNavBar,
			uniDrawer
		},
		data() {
			return {
				leftDrawerVisible: true,
				num: 50,
				names: [{
						"name": "lin",
						"id": 1
					},
					{
						"name": "ting",
						"id": 2
					},
					{
						"name": "ting",
						"id": 3
					},
					{
						"name": "t",
						"id": 4
					},
					{
						"name": "tin",
						"id": 5
					},
					{
						"name": "g",
						"id": 6
					},
					{
						"name": "ting",
						"id": 7
					},
					{
						"name": "ting",
						"id": 8
					},
					{
						"name": "ting",
						"id": 9
					},
				]
			}
		},
		methods: {
			showleftDrawer() {
				this.leftDrawerVisible = true
			},
			closeDrawer() {
				this.leftDrawerVisible = false
			},
			msgPage: function() {

				uni.navigateTo({
					url: '../callInterface/callInterface'
				})
			}

		}
	}
</script>

<style>
	.index {
		flex: 1;
		flex-direction: column;
	}

	.list_content {
		position: relative;
		top: 45px;
	}

	/* drawer */
	.drawer-box{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}
	
	.drawer_title {
		flex: 1;
		/* border: 1px solid #CCCCCC; */
		display: flex;
		flex-direction: row;
		
	}
	
	.drawer_title>.my_icon {
		flex: 3;
		/* border: 1px solid #CCCCCC; */
		position: relative;
	}
	.drawer_title>.my_icon>img{
		/* border: 1px solid #cccccc; */
		border-radius: 30px;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto auto;
	}

	.drawer_title>.my_name {
		flex: 4;
		position: relative;
	}
	.my_name_box{
		width: 100%;
		height: 55px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto auto;
	}

	/* 编辑 */
	.drawer_title>.copyreader {
		flex: 1;
		/* border: 1px solid #CCCCCC; */
		position: relative;
	}
	.drawer_list{
		flex: 2;
		border: 1px solid #cccccc;
		
	}


	/* 消息列表 */
	.M_list {
		height: 150upx;
		border-bottom: 1px solid #CCCCCC;
		background-color: rgba(255, 255, 255, 0.5);
		display: flex;
		flex-direction: row;
	}

	.M_icon>img {
		border-radius: 50px;
		flex: 2;
		padding-top: 40upx;
		padding-left: 25px;
		width: 50px;
		height: 50px;
	}

	.M_name {
		flex: 3;
		padding-top: 40upx;
		padding-left: 25px;
	}

	.M_name>.user_name {
		font-size: 18px;
	}

	.M_name>.M_last {
		margin-top: 10px;
		font-size: 16px;
		color: #6a625e;
		width: 100px;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.M_num {
		padding: 0px;
	}

	.M_num>p {
		background-color: #f00;
		display: table-cell;
		width: 30px;
		height: 30px;
		border-radius: 40px;
		text-align: center;
		margin-right: 0;
		color: #FFFFFF;
		font-size: 14px;
		padding-top: 0upx;
		vertical-align: middle;

	}
</style>
