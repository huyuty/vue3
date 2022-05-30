import {createRouter, createWebHashHistory} from "vue-router";
import MyLogin from "@/components/MyLogin.vue";
import MyTables from "@/components/MyTables.vue";
import MyHeader from "@/components/MyHeader.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/home', component:MyHeader},
        {path: '/log', component:MyLogin},
        {path: '/table', component:MyTables}
    ]
})
