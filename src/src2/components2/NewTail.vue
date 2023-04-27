<template>
	<!-- 路由参数获取 -->
	<h1>新闻详情的id：{{$route.params.id}}</h1> 
	<h1>query参数：{{$route.query}}</h1>
</template>

<script>
	export default{
		created() {
			//监听同一个组件切换，参数的变化
			this.$watch(
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