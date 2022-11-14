import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/font/fonts.css"
// import {gsap,ScrollTrigger,Draggable,MotionPathPlugin,TextPlugin} from 'gsap/all'


// gsap.registerPlugin(gsap,ScrollTrigger,Draggable,MotionPathPlugin,TextPlugin)



createApp(App).use(store).use(router).mount("#app");
