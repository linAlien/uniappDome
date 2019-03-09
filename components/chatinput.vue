<template>
	<view class="footer">
		<!--录音 -->
		<view class="footer-left" @touchstart="startRecord" @touchend="endRecord">
				
				<uni-icon type="mic" size="31" color="#4e4e4e"></uni-icon>
				
			
		</view>
		<view class="footer-center">
			<!-- 绑定输入的数据 -->
			<input class="input-text" type="text" v-model="inputValue"></input>
		</view>
		<!-- 触发事件将数据发送给父组件 -->
		<view class="footer-right" @click="sendMessge">
			<uni-icon type="paperplane" size="33" color="#4e4e4e"></uni-icon>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/uni-icon.vue";
// 	const recorderManager = uni.getRecorderManager();
// 	const innerAudioContext = uni.createInnerAudioContext();
	
	// innerAudioContext.autoplay = true;
	export default {
		components: {
			uniIcon
		},
		data() {
			return {
				inputValue: '',
				click_time: 0,
				my_time: null,
				voice: null
			}
		},
		onLoad(){
// 			let self = this;
// 			recorderManager.onStop(function(res){
// 				self.voice = res.tempFilePath;
// 			});
		},
		methods: {
			sendMessge:function() {
				if(this.inputValue.trim()==''){
					this.inputValue = '';
					
				}
				else{
					this.$emit("send-message",{
						type:'text',
						content: this.inputValue
					});
					this.inputValue = '';
				}
			},
			startRecord:function(){
				console.log('录音开始');
				this.my_time = setInterval(()=>{this.click_time++},1000);
				// recorderManager.start();
				
			},
			endRecord:function(){
				clearInterval(this.my_time);
				// recorderManager.stop();
				// 判断录音时长,不能小于1秒
				if (this.click_time <=1){
					// 使用默认的提示来提示用户、
					console.log("语音时长太短了");
					
				}else{
					// 将语音传到主组件
					
				};
				this.click_time = 0;
				
				console.log('录音结束');
			}
		}
	}
</script>


<style>
	
    @import "../common/uni.css";
	.footer {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 41px;
		min-height: 34px;
		border-top: solid 1px #bbb;
		overflow: hidden;
		padding-top: 5px;
		background-color: #fafafa;
	}
	.footer-left {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		}
	
	.footer-right {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		/* border: 1px solid #CCCCCC; */
	}
	.footer-center {
		flex: 5;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
</style>
