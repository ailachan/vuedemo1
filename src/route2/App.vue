<template>
	<!-- 
		使用路由
	 -->
	 <!-- 
		路由链接router-link,本质上就是被渲染为a标签
	 -->
	<router-link to="/home">首页</router-link> | 
	<router-link to="/news">新闻页</router-link> |
	<router-link to="/user/abc">测试1</router-link> |
	<router-link to="/mult1/one">测试2</router-link> |
	<router-link to="/mult2">测试3</router-link>
	
	<!-- 
		路由切换的组件显示区域，router-view
	 -->
	<router-view></router-view>
	
</template>


<script setup>

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
