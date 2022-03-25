import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";

/*Slick*/
import "./assets/css/slick.css";
import "./assets/css/js/slick";
/*CSS*/
import "./assets/css/style.css";
import "./assets/css/media.css";

import "./assets/css/js/seletivo";

createApp(App).use(store).use(router).mount("#mpxBrasilSelecao");
