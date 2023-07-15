import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import router from '../router/index'
const token = localStorage.getItem("token")
//18222634694，Liy1fan!
const service = axios.create({
    baseURL: 'http://3fska9.natappfree.cc',
    timeout: 50000,
    headers: {'Authorization': token}
})

// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
service.interceptors.request.use(config => {
    // config.headers['Content-Type'] = 'application/json;charset=utf-8';

    // config.headers['token'] = user.token;  // 设置请求头
    return config
}, error => {
    return Promise.reject(error)
});

// response 拦截器
// 可以在接口响应后统一处理结果
service.interceptors.response.use(
    response => {
        let res = response.data;
        // 兼容服务端返回的字符串数据
        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res
        }
        //判断response状态
        if (!res.code) Message.error('请求错误: ' + res.msg)

        if (res.code === 403) router.push("/403")
        return res;
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)


export default service