import { createApp } from 'vue'
import App from './App.vue'

import store from './store' 

// ADDED ROUTING
import router from './router/index.js'

// ADDED BOOTSTRAP 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

//  ADDED FONT AWESOME ICON
import { library } from "@fortawesome/fontawesome-svg-core";
import {  faBars, faDashboard, faHome, faImage, faSquarePlus,faCircleLeft,faUser,faSun,faBell,faEye,faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faDashboard,faHome,faImage,faSquarePlus,faBars,faCircleLeft,faUser,faSun,faBell,faEye,faEyeSlash);

// ADDED SWEETALERT 
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// ADDED PAGINATION
import Pagination from 'v-pagination-3'

//OTP
import VOtpInput from "vue3-otp-input";

import { onHandleKeyPress, onHandlePaste, onHandleKeyUp, onHandleKeyDown } from './api/inputText.js';


const mixins = {
    methods: {
        handleDragOver:function(event) {
        event.preventDefault();
        // Handle the drag over event here
        },
        onHandleKeyPress,
        onHandlePaste,
        onHandleKeyUp,
        onHandleKeyDown,

        success: function (message) {
            this.$swal({
            title: message,
            position: "top-end",
            icon: "success",
            toast: true,
            timer: "3000",
            showConfirmButton: false,
            });
        },
        failed: function (message) {
        this.$swal({
            title: message,
            position: "top-end",
            icon: "error",
            toast: true,
            timer: "3000",
            showConfirmButton: false,
        });
        },
        sleep: async function(ms){
        return await new Promise(r=>{
            setTimeout(r,ms)
        })
        },
        formatDate: function (date) {
        var u = new Date(date);

        const dd = String(u.getDate()).padStart(2, '0');
        const mm = String(u.getMonth() + 1).padStart(2, '0');
        const yyyy = u.getFullYear();
        const hh = String(u.getHours()).padStart(2, '0');
        const min = String(u.getMinutes()).padStart(2, '0');
        const ss = String(u.getSeconds()).padStart(2, '0');
        return (
            `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`
        );
        }
    }
}

// 1. Assign app to a variable
let app = createApp(App)

app.use(router).use(VueSweetalert2).use(store).mixin(mixins).component('pagination', Pagination).component('v-otp-input', VOtpInput).component("FontAwesomeIcon", FontAwesomeIcon).mount('#app')
  
// gud
// latti
// ganti
// rassi
// tasla
// suit
//balti
