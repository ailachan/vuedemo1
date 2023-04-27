<template>
	<div>
		<h1>新闻页</h1>
		<ul>
			<li>
				<router-link to="/detail/100">新闻1</router-link>
			</li>
			<li>
				<router-link to="/detail/101">新闻2</router-link>
			</li>
			<li>
				<router-link to="/detail/102">新闻3</router-link>
			</li>
			
		</ul>
		<ul>
			<li>
				<router-link to="/detail?name=张三&age=10">query传参</router-link>
			</li>
		</ul>
		
		<router-view></router-view>
		
	</div>
</template>

<script>
</script>

<style>
</style>