<template>
	<div style="border: 2px solid green;">
		<h1>{{store.count}}</h1>
	
		<!-- 
			解构pinia中的数据拥有相应性
		-->
		<h1>{{count}}</h1>
		<h1>{{double}}</h1>
		<button @click="chData">修改数据</button>
		<button @click="inc">修改数据</button>
		<br />
		
		<!-- 重置pinia的state状态 -->
		<button @click="resetState">重置</button>
		
		<!-- 
		// 直接修改pinia中的state状态 
		 -->
		 <br />
		 <button @click="store.count+=20">直接修改pinia的state</button>
		
		<!-- 
		 
		 $patch 方法，批量修改
		 -->
		 <h1>{{store.count}}</h1>
		<h1>{{store.name}}</h1>
		<h1>{{store.isAdmin}}</h1>
		<h1>{{store.items}}</h1>
		<h1>{{store.hasChanged}}</h1>
		<button @click="chBatch">批量修改</button>
		<button @click="chBatch2">批量修改2</button>
		
		
		<!-- getters 访问 -->
		<h1>{{store.doubleCount}}</h1>
		<h1>{{store.doublePlusOne}}</h1>
		
		<!-- 一个store依赖与另一个store的数据 -->
		<h1>{{store.otherGetter}}</h1>
		
		
		<!-- pinia中action中的函数可以直接调用 -->
		<p>{{store.count}}</p>
		<button @click="store.randomizeCounter">点击修改</button>
		
		<!-- pinia中action依赖与其他的store调用测试 -->
		<h1>{{store.fetchUserPreferences()}}</h1>
		
	</div>
</template>

<script setup>
	import { useTestStore } from "../../pinia/store.js"
	import { storeToRefs } from 'pinia'
	
	const store = useTestStore()
	
	/* 
	直接解构pinia中的数据，并要求继续保持绑定的响应性
	
	 */
	const {count,double}=storeToRefs(store)
	
	function chData(){
		store.increment()
	}
	
	/* 
	 pinia中actions里面的方法可以直接解构出来
	 
	 */
	const {increment:inc} = store
	
	// 你可以通过调用 store 的 $reset() 方法将 state 重置为初始值。
	function resetState(){
		store.$reset()
	}
	
	// 你还可以调用 $patch 方法。它允许你用一个 state 的补丁对象在同一时间更改多个属性
	function chBatch(){
		store.$patch({
			count:store.count+1000,
			name: '张三',
			isAdmin: false,
			items: ["hello","你好"],
			hasChanged: true,
		})
	}
	
	/* $patch也可以接收一个函数，修改 */
	function chBatch2(){
		store.$patch((state) => {
		  state.items.push({ name: 'shoes', quantity: 1 })
		  state.hasChanged = false
		  state.name = "李四"
		})
	}

</script>

<style>
</style>