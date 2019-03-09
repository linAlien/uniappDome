<template>
	<view class="uni-column">
		<view>
			<uni-nav-bar left-icon="arrowleft" fixed="true" right-icon="more" title="name" @click-left='backpage'>
			</uni-nav-bar>
		</view>
		<!-- 消息显示页 -->
		<view class="content">
			<scroll-view id="scrollview" scroll-y="true" :style="{height:'100%'}" :scroll-with-animation="true" @scroll="scroll"
			 v-bind:scroll-top="scrollTop">
				<!-- 子组键需要绑定数据才可以获取到父主键的数据，使用props来接收 -->
				<message-show v-for="(message,index) in messages" :key="index" v-bind:message="message" :id="index">

				</message-show>
				<view id="bottom"></view>
			</scroll-view>
		</view>
		<view class="foot">
			<!-- 获取子主键发来的数据 -->
			<chat-input @send-message="getInputMessage"></chat-input>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	//自定义组件
	import chatInput from '@/components/chatinput.vue';
	import messageShow from '@/components/messageshow.vue';
	export default {
		components: {
			uniNavBar,
			chatInput,
			messageShow
		},
		data() {
			return {
				style: {
					pageHeight: 0,
					contentViewHeight: 0,
					footViewHeight: 90,
					mitemHeight: 0,
				},
				scrollTop: 0,
				//显示的数据
				messages: [{
					user: 'home',
					type: 'head',
					content: 'hello!!!!!!'
				}],
				pageH: 0
			};
		},
		onLoad:function(){
			console.log(uni.getSystemInfoSync().windowHeight);
			this.pageH = uni.getSystemInfoSync().windowHeight;
			
		},
		methods: {
			getInputMessage: function(message) {
				console.log(message);
				// 将数据展示在页面上
				// 将数据push进messages的列表中
				this.addMessage("customer", message.content, false);
				console.log(this.messages.length);
				var MessagePageLen = this.pageH-44-47;
				var MessageNum = parseInt(MessagePageLen/100);
				console.log("MM"+MessageNum+","+MessagePageLen);
			},
			addMessage: function(user, content, hasSub, subcontent) {
				var that = this;
				that.messages.push({
					user: user,
					content: content,
					hasSub: hasSub,
					subcontent: subcontent
				});
			},
			backpage: function() {
				console.log("返回页面");
				uni.navigateBack();
			},
			scroll: function(e) {
				this.scrollTop = e.detail.scrollTop;
				console.log(this.scrollTop);
			}

		}
	}
</script>

<style>
	.uni-column {
		display: flex;
		flex-direction: column;
	}

	.content {
		display: flex;
		position: fixed;
		width: 100%;
		top: 48px;
		bottom: 55px;


	}

	.foot {
		position: fixed;
		width: 100%;
		height: 40px;
		min-height: 53px;
		left: 0px;
		bottom: 0px;
		overflow: hidden;
		border: 1px solid #CCCCCC;
	}
</style>
