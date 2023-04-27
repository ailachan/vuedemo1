<template>
	<div style="border: 2px solid green;">
		<!-- 
			组件事件的监听
		 -->
		<EventChild @child-event="execEvent()" @child-param="getData"
		 @submit="getDataCheck"></EventChild>
		
		
	</div>
	
</template>

<script>
	import EventChild from "./EventChild.vue"
	
	export default{
		components:{
			EventChild
		},
		methods:{
			execEvent(){
				alert("接收子组件事件")
			},
			getData(getd){
				console.log(getd)
				alert("接收到数据")
			},
			getDataCheck(getd){
				console.log(getd)
				alert("接收到数据")
			}
		}
		
		
	}
	
</script>

<style>
</style>