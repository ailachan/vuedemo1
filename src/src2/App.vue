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
	<router-link to="/mult2">测试3</router-link> |
	<router-link to="/list">列表</router-link>
	
	<br />
	<!-- 
		编程的方式去切换路由
	 -->
	<button @click="goHome">首页</button> 
	<button @click="sendParam">传参</button>
	<button @click="replaceRouter">测试1</button>
	<button @click="$router.go(1)">前进</button>
	<button @click="$router.go(-1)">后退</button>
	
	<!-- 
		路由切换的组件显示区域，router-view
	 -->
	<router-view style="border: 2px solid red;"></router-view>
	
</template>


<script>
	export default{
		methods:{
			goHome(){
				//this.$router.push("/home") // 字符串路径
				// 带有路径的对象
				//this.$router.push({ path: '/home' })
				
				// 带查询参数，结果是 /register?plan=private
				this.$router.push({ path: '/home', query: { plan: '我是query参数' } })
				
			},
			sendParam(){
				// 命名的路由，并加上参数，让路由建立 url
				this.$router.push({ name: 'nameNews', params: { userName: 'eduardo' } })
			},
			replaceRouter(){
				this.$router.replace("/home")
			}
			
			
		}
	}
	

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
