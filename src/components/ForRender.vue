<template>
	<div style="border: 2px solid red;">
		<!-- 
			vue在默认情况下，如果重新渲染前后的元素标签
			有相同的，vue会重用相同的标签
		 -->
		 
		 <!-- 如果不希望vue使用默认的优化重用策略，我们可以添加
		 不一样的一个key属性
			如v-for
		 -->
		 <div v-for="item in items" :key="item.id">
		   {{item.message}}
		 </div>
		 <template v-for="todo in todos" :key="todo.name">
		   <li>{{ todo.name }}</li>
		 </template>
		 
		 
		 <!-- v-for可以迭代组件(只能显示外部组件中template中的内容) -->
		<MyCom v-for="item in items" :key="item.id"></MyCom>
		<button @click="chData()">修改数据</button>
		<!-- 
			数组数据通过如下方法更新，可以触发重新渲染
		     push()
		     pop()
		     shift()
		     unshift()
		     splice()
		     sort()
		     reverse()
		 -->
		
		<!-- v-for结合计算属性 -->
		<li v-for="n in evenNumbers">{{ n }}</li>
		
	</div>
</template>

<script>
	
	import MyCom from "./MyCom.vue"
	export default{
		data(){
			return{
				seen:true,
				items: [
					{ message: 'Foo' ,id:1},
					{ message: 'Bar' ,id:2},
				],
				todos:[
					{isComplete:true,name:"张三"},
					{isComplete:false,name:"李四"},
					{isComplete:true,name:"王五"},
					{isComplete:false,name:"马六"}
				],
				numbers: [1, 2, 3, 4, 5]
			}
		},
		methods:{
			chData(){
				this.items.push({ message: 'AAA' ,id:3})
			}
		},
		components:{
			MyCom
		},
		computed: {
		  evenNumbers() {
		    return this.numbers.filter(n => n % 2 === 0)
		  }
		}
	}
</script>

<style>
</style>