import {createApp} from "vue";
import RoutePageApp from "@/RoutePageApp.vue";
import {route} from "@/route";

const app = createApp(RoutePageApp)
app.use(route)
app.mount("#app2")