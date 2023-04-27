import {createRouter,createWebHashHistory} from "vue-router"

//导入组件
import Home from "../components/Home.vue"
import News from "../components/News.vue"
import NewTail from "../components/NewTail.vue"

export const router = createRouter({
	history: createWebHashHistory(),//配置路由的历史模式，具体可以查看官网不同模式区别
	//配置路由映射信息
	routes:[   
		//每一个路由信息配置一个对象
		{
			path:"/home", //路由链接
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
		}
		
		
	]
})