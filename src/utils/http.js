import axios from "axios";
import { stringify } from "qs";
import { Notify } from "vant"

// 允许携带凭证请求
axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_BASE_API

//请求拦截器
axios.interceptors.request.use((config) => config, err => Promise.reject(err));
//响应拦截器
axios.interceptors.response.use(({ data }) => data, ({
    response: {
        status,
        data
    }
}) => {
    const { message } = data
    const msg = typeof message === "object" ? message[0] : message
    Notify({
        type: "danger",
        message: `status:${status} ${msg}`
    })
    return Promise.reject(err)
});


const http = {
    auth: {
        //登录
        login: (account, password, code) => axios.post("/auth/login", stringify({ account, password, code })),
        //自动登录
        getInfo: () => axios.get("/auth/getInfo"),
        //获取验证码
        getSrc: () => axios.get("/auth/getSrc?d=" + Date.now()),
        //获取注册验证码
        getEmail: (email) => axios.post("/auth/getCode", stringify({ email })),
        //注册功能
        toRegister: (user_name, user_email, email_code, password, confirmPassword) =>
            axios.post("/auth/register", stringify({ user_name, user_email, email_code, password, confirmPassword }))
    },
    archive: {
        //获取我的项目
        getMyprojects: () => axios.get("/archive/getMyProjects"),
        //添加项目
        add: (data) => axios.post("/archive/add", data),
        //执行项目
        run: (id) => axios.get(`/archive/run/${id}`)
    }
}
export default http