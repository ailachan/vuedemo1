<template>
	<h1>我是子组件</h1>
	<button @click="sendEvent">点击触发事件</button>
	<button @click="sendParam">点击向父组件发送参数</button>
	
	<button @click="sendParamCheck">点击向父组件发送参数并校验</button>
</template>

<script>
	export default{
		/* 
		 触发事件的统一声明及校验
		 */
		emits:{
			submit({name,age}){
				if (name && age) {
					return true
				} else {
					console.error('传参异常，不能为空')
					return false
				}
			}
		},
		methods:{
			sendEvent(){
				//主动发送事件到，父组件
				this.$emit("child-event")
				
			},
			sendParam(){
				this.$emit("child-param",{
					name:"张三",
					age:20
				})
			},
			sendParamCheck(){
				this.$emit("submit",{
					name:null,
					age:20
				})
			}
			
		}
		
	}
	
</script>

<style>
</style>