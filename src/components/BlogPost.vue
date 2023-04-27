<template>
	<h1>{{title}}</h1>
	<h1>{{id}}</h1>
	<h1>{{typeof flag}}</h1>
	<button @click="largeWord">点击增大字体</button>
</template>

<script>
	export default{
		//声明接收父组件的传参，并且可以在当前组件中，当成普通属性使用
		props:["title","id","flag"],
		methods:{
			largeWord(){
				//触发一个组件事件，父组件可以通过监听此事件，来完成相应的功能
				this.$emit("large-word")
			}
		}
	}
</script>

<style>
</style>