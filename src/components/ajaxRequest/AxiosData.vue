<template>
	<div style="border:2px solid green">
		<!-- 
			表格显示数据
		 -->
		 <ul>
			<li v-for="user in userData">
				<p>{{user.id}}</p>
				<p>{{user.name}}</p>
				<p>{{user.pwd}}</p>
				<p>{{user.age}}</p>
				<p>{{user.sex}}</p>
				<p v-for="order in user.orders">
					订单日期：{{order.date}}
				</p>
			</li> 
		 </ul>
		
		<!-- 
		 点击发送请求拉取数据
		-->
		<button @click="getData">点击拉取数据</button>
		
		
		
		<!-- 
			axios不同参数的测试
		 -->
		 <p>
			 用户名：{{user.name}}
			 id：{{user.id}}
			 年龄：{{user.age}}
			 性别：{{user.sex}}
			 密码：{{user.pwd}}
		 </p>
		<button @click="getDataUrl">get请求url参数</button>
		
		
		<p>
			删除结果：{{delNum}}
		</p>
		<button @click="getDataParam">get请求param参数</button>
		
		
		<p>
			插入：{{insertNum}}
		</p>
		<button @click="postDataJson">post请求json参数</button>
		
		<p>
			插入：{{insertNum}}
		</p>
		<button @click="postDataForm">post请求form参数</button>
		
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				userData:[],
				user:{},
				delNum:0,
				insertNum:0
			}
		},
		methods:{
			getData(){
				//发送http请求拉取数据
				this.$axios.get("/api/selectUserAll")
					.then(res=>{ //请求成功
						console.log(res)
						console.log(res.data)
						this.userData = res.data
					})
					.catch(err=>{//请求失败
						console.log(err)
					})
				
			},
			getDataUrl(){
				/* 
				 get请求中，可以将参数直接附加到url中，以key-value形式添加：
				  url?key=value&key=value&key=value
				 */
				this.$axios.get("/api/selectById?id=4")
				.then(res=>{
					this.user = res.data
				})
				.catch(err=>{
					console.log(err)
				})
			},
			getDataParam(){
				// get参数添加到params中
				this.$axios.get("/api/delete",{
					params:{
						id:5,
						name:"刘德华"
					}
				}).then(res=>{
					console.log(res.data)
					this.delNum = res.data.other
				}).catch(err=>{
					console.log(err)
				})
			},
			postDataJson(){
				/* 
				 post的json格式传参
				 */
				this.$axios.post("/api/insertUser",{
					name:"测试测试",
					age:30,
					sex:"男",
					pwd:"123456"
				}).then(res=>{
					console.log(res.data)
					this.insertNum = res.data.other
				}).catch(err=>{
					console.log(err)
				})
			},
			postDataForm(){
				/* 
				 post
				 的标准form格式传参
				 */
				this.$axios.post("/api/insertUser",this.$qs.stringify({
					name:"刘德华",
					age:30,
					sex:"男",
					pwd:"123456"
				})).then(res=>{
					console.log(res.data)
					this.insertNum = res.data.other
				}).catch(err=>{
					console.log(err)
				})
				
			}
		}
	}
</script>

<style>
</style>