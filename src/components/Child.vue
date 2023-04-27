<template>
	<h1>{{msg}}</h1>
</template>

<script>
	export default{
		expose:["msg","test1"], //通过模板一个引用，父组件可以调用的内容
		data(){
			return{
				msg:"hello world"
			}
		},
		methods:{
			test1(){
				console.log("test1")
			},
			test2(){
				console.log("test2")
			},
		}
		
	}
</script>

<style>
</style>