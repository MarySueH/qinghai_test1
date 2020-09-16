import axios from 'axios'
import qs from 'qs'  //序列化参数
import store from '../store'
import {Message, MessageBox} from 'element-ui'
import router from '../router'
axios.defaults.withCredentials = true; //允许存cookie
axios.defaults.baseURL = '/api';

// 添加http请求拦截器，在请求头中加token
axios.interceptors.request.use(
  config => {
    if (sessionStorage.getItem('Authorization')) {
      config.headers.Authorization = store.state.Authorization;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  });

//添加http响应拦截器  response interceptor
axios.interceptors.response.use(
  // 可以请求但是返回的状态码然后判断请求失败原因
  response => {
    //多了一层data 打印返回json对象 console.log(response)
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 0) {
      // 请求失败返回
      Message.error(res.msg)
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 301) {
        // to re-login 判断需要返回登录界面的状态码
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('loginOut').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      // 请求成功返回
      return response
    }
  },
  // 请求未进返回错误提示
  error => {
    console.log('err' + error) // for debug
    Message({
      message: '网络开小差了,请稍后再试！',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

/**GET的提交方式 */
export const getRequest = (url, params) => {
  return axios({
    method: "get",
    url: `${url}`,
    params: params,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "Accept": "*/*"
    }
  });
};
/**POST的提交方式 */
export const postRequestJSON = (url, data) => {
  return axios({
    method: "post",
    url: `${url}`,
    data: data,
    headers: {
      "Content-Type": "application/json",
      "Accept": "*/*"
    }
  });
};
/**POST请求分两种一个是form表单提交，参数会跟在请求地址后面，另外一个是Playload 就是json报文提交这两种 */
export const postRequestForm = (url, params) => {
  return axios({
    method: "post",
    url: `${url}`,
    data: qs.stringify(params),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "*/*"
    }

  });
};

export const http = axios.create({
  timeout: 1000 * 30,
  withCredentials: true,
  baseURL: process.env.API,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

