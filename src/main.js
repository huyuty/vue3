import { createApp } from 'vue'
import App from './App.vue'
import Router from "@/Router";
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap"


const app = createApp(App)
app.use(Router);
app.mount('#app')
