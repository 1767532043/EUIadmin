/****   config.js   ****/
// 导入axios
import axios from 'axios'
import qs from 'qs'
// 使用element-ui Message做消息提醒
import {
    Message
} from 'element-ui';
//1. 创建新的axios实例，
const axios_timeout = 3 * 1000//请求超时限制
const service = axios.create({
    // 公共接口
    baseURL: 'http://api.euiadmin.com',
    // baseURL: 'http://localhost',
    // 超时时间
    timeout: axios_timeout
})
// 2.请求拦截器
service.interceptors.request.use(config => {
    //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
    config.data = qs.stringify(config.data); //数据转化,也可以使用qs转换
    // console.log(config.data);
    config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded', //配置请求头
    }
    //注意使用token的时候需要引入cookie方法或者用本地localStorage等方法，推荐js-cookie
    // const token = getCookie('名称'); //这里取token之前，你肯定需要先拿到token,存一下
    // if (token) {
    //     config.params = {
    //         'token': token
    //     } //如果要求携带在参数中
    //     config.headers.token = token; //如果要求携带在请求头中
    // }
    return config
})

// 3.响应拦截器
service.interceptors.response.use(response => {
    //接收到响应数据并成功后的一些共有的处理，关闭loading等
    // console.log(response);
    return response
}, err => {
    // console.log(err);
    if (err.config.timeout <= axios_timeout) {
        const stutas_code = err.message.substring(err.message.length - 3, err.message.length)
        switch (Number(stutas_code)) {
            case 400:
                Message.error('错误请求')
                break;
            case 401:
                Message.error('未授权，请重新登录')
                break;
            case 403:
                Message.error('拒绝访问')
                break;
            case 404:
                Message.error('请求错误,未找到该资源')
                break;
            case 405:
                Message.error('请求方法未允许')
                break;
            case 408:
                Message.error('请求超时')
                break;
            case 500:
                Message.error('服务器端出错')
                break;
            case 501:
                Message.error('网络未实现')
                break;
            case 502:
                Message.error('网络错误')
                break;
            case 503:
                Message.error('服务不可用')
                break;
            case 504:
                Message.error('网络超时')
                break;
            case 505:
                Message.error('http版本不支持该请求')
                break;
            default:
                Message.error('其他未知错误')
        }
    } else {
        Message.error('请求超时')
    }
})
//4.导出文件
export default service