<template>
	<div style="border: 2px solid red;">
		<SlotChild>
			<!-- Click Me！ -->
			<h1>{{msg}}</h1>
			<p>测试测试文本呢</p>
			<button @click="parentEvent">点击触发</button>
		</SlotChild>
		
		<!-- 使用带插槽的子组件，不传递内容，则显示插槽默认内容 -->
		<SlotChild></SlotChild>
		
		<!-- 使用具名插槽 -->
		<SlotChild>
			<!-- v-slot可以简写为# -->
			<template #header>
				<h1>头部的内容</h1>
			</template>
			<template v-slot:main>
				<h1>主体的内容</h1>
			</template>
			<template v-slot:footer>
				<h1>尾部的内容</h1>
			</template>
			<template #default>
				<h1>默认插入的内容</h1>
			</template>
			
		</SlotChild>
		
		
		<!-- 动态插槽名 -->
		<SlotChild>
			<template #[slotName]>
				<h1>main</h1>
			</template>
			
		</SlotChild>
		
		<!-- 接收子组件slot传递的参数 -->
		<SlotChild>
			<template v-slot="slotMsg">
				<h1>{{slotMsg.text}}</h1>
				<p>{{slotMsg.num}}</p>
			</template>
			
		</SlotChild>
		
		<!-- 接收子组件具名插槽slot传递的参数 -->
		<SlotChild>
			<template #test="slotMsg">
				<h1>{{slotMsg.text}}</h1>
				<p>{{slotMsg.num}}</p>
			</template>
		</SlotChild>
		
	</div>
</template>

<script>
	import SlotChild from "./SlotChild.vue"
	
	export default{
		components:{
			SlotChild
		},
		data(){
			return {
				msg:"父组件插入的内容",
				slotName:"main"
			}
		},
		methods:{
			parentEvent(){
				alert("父组件")
			}
		}
	}
	
</script>

<style>
</style>