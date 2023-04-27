<template>
	<div style="border: 2px solid black;">
		<Inj></Inj>
	</div>
</template>

<script>
	import Inj from "./Inj.vue"
	
	export default{
		components:{
			Inj
		},
		data(){
			return{
				msg:"我是祖先组件的数据"
			}
		},
		provide(){
			return{
				data:this.msg
			}
		}
	}
	
</script>

<style>
</style>