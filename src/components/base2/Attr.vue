<template>
	<!-- 
	 v-bind="$attrs"
	 如果有多个根节点，可以设置这个属性，来告诉vue透传给谁
	 
	 -->
	<div @click="onClick" v-bind="$attrs">
		<h1>属性透传</h1>
	</div>
	<h1>多了一个标签</h1>
</template>

<script>
	export default{
		methods:{
			onClick(){
				alert("选项式子组件点击")
			}
		},
		//inheritAttrs: false //禁用透传
	}
	
	
</script>

<style>
</style>