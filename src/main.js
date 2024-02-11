import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { library } from "@fortawesome/fontawesome-svg-core";
import {  faBarsStaggered, faDashboard, faHome, faImage, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faDashboard,faHome,faImage,faSquarePlus,faBarsStaggered);
createApp(App).use(router).component("FontAwesomeIcon", FontAwesomeIcon).mount('#app')

// gud
// latti
// ganti
// rassi
// tasla
// suit
//balti
