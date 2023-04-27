<template>
	<div style="border: 2px solid green;">
		<h1>Here is a child component!</h1>
		<!-- 3、使用 -->
		<ButtonCounter />
		<ButtonCounter />
		<ButtonCounter />
		
		<!-- 
			props传参：
				父组件中通过属性或者绑定属性直接给子组件传参
		 -->
		 <div :style="{fontSize:postFontSize+'em'}">
			 <BlogPost
				@large-word="this.postFontSize+=0.1"
			 	v-for="post in posts"
			 	:id="post.id"
			 	:title="post.title"
				:flag="boolValue"
			  />
		 </div>
		
		 
	</div>
</template>

<script>
	//1、导入
	import ButtonCounter from "./ButtonCounter.vue"
	import BlogPost from "./BlogPost.vue"
	
	//2、声明
	export default{
		components:{
			ButtonCounter,
			BlogPost
		},
		data(){
			return{
				posts: [
					{ id: 2, title: 'My journey with Vue' },
					{ id: 1, title: 'Blogging with Vue' },
					{ id: 3, title: 'Why Vue is so fun' }
				],
				postFontSize:1,
				boolValue:true
			}
		}
		
	}
	
</script>

<style>
</style>