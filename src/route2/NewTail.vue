<template>
	<!-- 路由参数获取 -->
	<h1>新闻详情的id：{{$route.params.id}}</h1> 
	<h1>query参数：{{$route.query}}</h1>
</template>

<script>
	export default{
		created() {
			//监听同一个组件切换，参数的变化
			console.log('切换')//切换到同一个组件这个只会执行一次
			this.$watch(//监听可以实现检查到变化
			  () => this.$route.params,
			  (toParams, previousParams) => {
				console.log(toParams)
				console.log(previousParams)
			  }
			)
		},
		
	}
	
</script>

<style>
</style>