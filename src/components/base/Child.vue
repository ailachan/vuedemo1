<template>
	 <h1>{{greetingMessage}}</h1>
	<h1>{{greetCount}}</h1>
	<h1>{{title}}</h1>
	
<!--	<h1>{{typeof likes}}</h1>-->
<!--	<h1>{{typeof lks}}</h1>-->
<!--	<h1>{{isPublished}}</h1>-->
<!--	-->
<!--	<h1 v-for="id in commentIds">-->
<!--		{{id}}-->
<!--	</h1>-->
<!--	-->
<!--	<h1>{{author.name}}</h1>-->
<!--	<h1>{{author.company}}</h1>-->
<!--	-->
<!--	<h1>{{id}}</h1>-->
<!--	<h1>{{title2}}</h1>-->
</template>

<script>
	export default{
		// props:["greetingMessage"]
		props:{
			greetingMessage:String,
			//"greet-count":Number
			greetCount:Number, //如果对应的prop命名方式是杠间隔，如果不想加引号，可以直接用驼峰命名
			title:String,
			// 自定义类型校验函数
			proe: {
				validator(value) {
					// The value must match one of these strings
					return ['d', 'a', 'b'].includes(value)
				}
			},
		},
		//props:["likes","lks","isPublished","commentIds","author","id","title2"] //动静态传递过来的数据类型是不一样的
	}
	
</script>

<style>
</style>