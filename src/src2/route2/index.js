import {createRouter,createWebHashHistory} from "vue-router"

//导入组件
import Home from "../components2/Home.vue"
import News from "../components2/News.vue"
import NewTail from "../components2/NewTail.vue"
import List from "../components2/List.vue"
import Child from "../components2/Child.vue"

export const router = createRouter({
	history: createWebHashHistory(),//配置路由的历史模式，具体可以查看官网不同模式区别
	//配置路由映射信息
	routes:[  
		{
			path:"", //默认组件渲染
			component:Home
		},
		//每一个路由信息配置一个对象
		{
			path:"/home", //路由链接
			name:"home",
			component:Home //组件
		},
		{
			path:"/news",
			component:News,
			children:[
				{
					path:"/detail/:id", //id是路由参数，可以传参
					component:NewTail,
				},
			]
		},
		
		{
			path:"/detail", //id是路由参数，可以传参
			component:NewTail
		},
		// /user/100
		{
			path:"/user/:orderId(\\d+)", //加正则来限定匹配
			component:Home
		},
		{
			path:"/user/:userName",
			name:"nameNews",
			component:News
		},
		//可重复的参数匹配
		{ 
			// 匹配/mult1/one、/mult1/one/two  /mult1/one/two/....
			 path: '/mult1/:chapters+', //+号代表的意思是匹配一个或者多个,chapters将会是一个数组
			 component:Home
		},
		{
			// 匹配/mult2,/mult2/one、/mult2/one/two  /mult2/one/two/....
			 path: '/mult2/:chapters*', //*号代表的意思是匹配0个或者多个，chapters将会是一个数组
			 component:News
		},
		{
			path:"/list",
			component:List,
			children:[
				{
					path:"", // 这个代表默认渲染，可以理解为首页
					component:Child,
					
				},
				{
					//path:"/list/child", // 前面加斜杠相当于绝对路径
					path:"child", // 嵌套路由推荐这样写路径，相当于是：/list/child
					component:Child,
					
				}
				
			]
		},
		
		
	]
})