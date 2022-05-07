import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "../layout"
Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: () => Layout,
        children: [{
            path: "",
            component: () =>
                import ("../views/index"),
            name: "index"
        }]
    }, {
        path: "/auth",
        name: "auth",
        component: () =>
            import ("../views/auth")
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ("../views/login")
    }
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router