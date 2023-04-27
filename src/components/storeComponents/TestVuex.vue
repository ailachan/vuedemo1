<template>
	<div style="border: 2px solid red;">
		<h1>{{msg}}</h1>
		<!-- 直接在插值表达式中取vuex中的数据 -->
		<h1>{{$store.state.msg}}</h1>
		
		<!-- 本身组件自己的计算属性 -->
		<h1>{{test}}</h1>
		<!-- mapState辅助函数 -->
		<h1>{{myCount}}</h1>
		<h1>{{comCount}}</h1>
		<h1>{{addCount}}</h1>
		
		<!-- 直接使用vues中getters中定义的属性 -->
		<h1>{{$store.getters.doneTodos}}</h1>
		<h1>{{$store.getters.doneTodosCount}}</h1>
		
		<!-- mapGetters辅助函数 -->
		<h1>{{myTodos}}</h1>
		<h1>{{myTodosCount}}</h1>
		
		<!-- 调用vuex中的mutations修改状态 -->
		<button @click="chCount">修改vuex中的count</button>
		<!-- 提交载荷（Payload） 传参修改状态 -->
		<button @click="chCountPayload">修改vuex中的count，传递参数</button>
		<br />
		<!-- mapMutations辅助函数 -->
		<button @click="myincre">mapMutations修改vuex中的count</button>
		<button @click="myIncreNum(10)">mapMutations修改vuex中的count，传递参数</button>
	
		<!-- 
			通过actions修改vuex中的状态
		 -->
		 <p>{{comCount}}</p>
		 <button @click="actionCh">通过acton修改vuex状态</button>
		  <button @click="actionChAsync">通过acton异步修改vuex状态</button>
		  <br />
		<!-- mapActions 辅助函数-->
		<button @click="ac">mapActions通过acton异步修改vuex状态</button>
	</div>
</template>

<script>
	import { mapState,mapGetters,mapMutations,mapActions   } from 'vuex'
	
	export default{
		data(){
			return{
				msg:this.$store.state.msg, //从vuex中拿数据
				localCount:20
			}
		},
		computed:{
			...mapState({
				myCount:'count', //myCount本组件的属性，'count'代表vuex中的count属性
				comCount:(state)=>{
					return state.count+100
				},
				addCount(state){
					return state.count+this.localCount //访问组件数据，要用常规函数
				}
			}),
			...mapGetters({
				myTodos:"doneTodos",
				myTodosCount:"doneTodosCount"
			}),
			test(){
				return "test"
			}
			
			
		},
		methods:{
			...mapMutations({
				myincre:"increment",
				myIncreNum:"incrementNum"
			}),
			...mapActions({
				ac:"incrementAsyc"
			}),
			chCount(){
				//修改vuex状态
				this.$store.commit("increment")
			},
			chCountPayload(){
				this.$store.commit("incrementNum",10)
			},
			actionCh(){
				//调用action修改状态
				this.$store.dispatch("increment")
			},
			actionChAsync(){
				this.$store.dispatch("incrementAsyc")
			}
			
		}
	}
	
</script>

<style>
</style>