import axios from 'axios';
import { netConfig } from "@/config/net.config";
const { baseURL, contentType, requestTimeout, successCode } = netConfig;

// 判断token是否过期
let tokenLose = true;

// 创建一个axios实例
const instance = axios.create({
    baseURL,
    timeout: requestTimeout,
    headers: {
        'Content-Type': contentType,
    },
});

// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        // 可以在此处添加 token 或其他请求头
        return config;
    },
    (error) => {
        // 请求错误处理
        return Promise.reject(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    (response) => {
        const res = response.data;
        // 请求出错处理
        // -1 超时、token过期或者没有获得授权
        if (res.status === -1 && tokenLose) {
            tokenLose = false;
            alert('服务器异常'); 
            return Promise.reject(res);
        }
        // 判断返回的状态码是否在successCode数组中
        if (successCode.indexOf(res.status) !== -1) {
            return Promise.reject(res);
        }
        return res;
    },
    (error) => {
        // 响应错误处理
        return Promise.reject(error);
    }
);

// 导出axios实例
export default instance;