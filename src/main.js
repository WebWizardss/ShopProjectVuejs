import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/offcanvas";
import "bootstrap/js/dist/alert";
import "bootstrap/js/dist/modal";
//import "bootstrap/js/dist/backdrop";
import "aos/dist/aos.css";
import "bootstrap/js/dist/dropdown";
//create instance
import { createPinia } from "pinia";
const pinia = createPinia();
import VueConfetti from "vue-confetti";

createApp(App).use(pinia).use(VueConfetti).use(router).mount("#app");
