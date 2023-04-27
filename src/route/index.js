import {createRouter,createWebHashHistory} from "vue-router";
import Page1 from "@/components/routePage/Page1.vue";
import Page2 from "@/components/routePage/Page2.vue";
import View1 from "@/components/routePage/view1.vue";
import View2 from "@/components/routePage/view2.vue";
import View3 from "@/components/routePage/view3.vue";
export const route = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"",//一个路由渲染多个view标签
            components:{
                View1,View2,View3
            }
        },
        {path:'/page1',component:Page1},
        {path:'/page2',component:Page2}
    ]
})