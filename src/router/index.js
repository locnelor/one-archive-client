import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "../layout"
Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Layout,
        children: [{
            path: "",
            component: () =>
                import ("../views/index"),
            name: "index"
        }, {
            path: "/demo",
            component: () =>
                import ("../views/demo"),
            name: "demo",
            meta: { rule: 1, message: "必须登录才能查看" }
        }]
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ("../views/login"),
    },
    {
        path: "/register",
        name: "register",
        component: () =>
            import ("../views/register.vue")
    }
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router