import LoginView from "../views/auth/LoginView.vue";
import { createRouter ,createWebHistory} from 'vue-router'

const routes =[        
    {
        path:'/login',
        name:'LoginView',
        component:LoginView,
        meta: { authOnly: false }
    },
    {
        path:'/register',
        name:'RegisterView',
        component:import(
            /* webpackChunkName: "register" */ "../views/auth/RegisterView.vue"
        ),
        meta: { authOnly: false }
    },
    {
        path:'/forgotpassword',
        name:'ForgotView',
        component:import(
            /* webpackChunkName: "register" */ "../views/auth/ForgotView.vue"
        ),
        meta: { authOnly: false }
    },
    {
      path: "/otp",
      name: "otp",
      component: () =>
        import(/* webpackChunkName: "otp" */ "../views/auth/OTPVerification.vue"),
        meta: { authOnly: false }
    },
    {
        path:'/about',
        name:'AboutView',
        component: () =>
        import(/* webpackChunkName: "otp" */ "../views/AboutView.vue"),
        meta: { authOnly: true }
    }, 
    {
        path:'/dashboard',
        name:'DashboardView',
        component: () =>
        import(/* webpackChunkName: "otp" */ "../views/DashboardView.vue"),
        meta: { authOnly: true }
    }, 
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
  
router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem("token");
    const isAuth = to.matched.some((record) => record.meta.authOnly);
    if (isAuth && !loggedIn) {
        return next({ path: "/login" });
    } else if (!isAuth && loggedIn) {
        return next({ path: "/dashboard" });
    } else if (!isAuth && !loggedIn) {
        return next();
    }
    next();
});
  
export default router;
  