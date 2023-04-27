<template>
	<div style="border: 1px solid red;">
		<!-- 计算属性 -->
		<p>Has published books:</p>
		<!-- 可以使用表达式计算：
				表达式计算的缺点：不能太复杂，无法复用
		 -->
		<!-- <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span> -->
		<!-- 计算属性使用 -->
		<span>{{publishedBooksMessage}}</span>
		
		<!-- 可以复用 -->
		<span>{{publishedBooksMessage}}</span>
		<span>{{publishedBooksMessage}}</span>
		<span>{{publishedBooksMessage}}</span>
		
		<!-- 使用methods方法 -->
		<span>{{publishedBooksMessageMethods()}}</span>
		<!-- 
			计算属性和methods的区别：
				计算属性，结果会保存在缓存中，多次渲染，不会重复计算，而是
				直接从缓存中获取结果。
				methods，没有缓存，每一次渲染，都是重新执行函数计算。
		 -->
		
		<!-- 
			计算属性的set方法
		 -->
		 <p>{{firstName}}-{{lastName}}</p>
		 <button @click="chCom()">点击修改计算属性</button>
		
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				author: {
					name: 'John Doe',
					books: [
					  'Vue 2 - Advanced Guide',
					  'Vue 3 - Basic Guide',
					  'Vue 4 - The Mystery'
					]
				},
				firstName: 'John',
				lastName: 'Doe'
			}
		},
		methods:{
			publishedBooksMessageMethods() {
			  return this.author.books.length > 0 ? 'Yes' : 'No'
			},
			chCom(){
				this.fullName = "wu fachun";
			}
		},
		computed:{ //计算属性
			publishedBooksMessage() {
			  // this指向当前组件实例,this.的方式直接访问数据
			  return this.author.books.length > 0 ? 'Yes' : 'No'
			},
			fullName: {
			  // getter
			  get() {
				return this.firstName + ' ' + this.lastName
			  },
			  // setter
			  set(newValue) {
				// 注意：我们这里使用的是解构赋值语法
				[this.firstName, this.lastName] = newValue.split(' ')
			  }
			}
		}
	}

</script>

<style>
</style>