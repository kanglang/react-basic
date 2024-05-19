
import axios, { AxiosResponse,AxiosRequestConfig } from "axios";
import { Modal, Toast } from 'antd-mobile';

import { useNavigate } from 'react-router-dom';

const Logout =()=>{
   const navigate = useNavigate()
  navigate('/login', {replace: true})
}
export default Logout
const host = "https://sd.qiaoyuly.com"

// 创建axios实例
let service = axios.create({
  baseURL: host,
  timeout: 15000, // 请求超时时间（毫秒）
  withCredentials: false, // 请求是否携带凭证
});

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const tokenId = window.localStorage.getItem('access_token');
  if (tokenId) {
    config.headers['Authorization'] = "Bearer "+ tokenId;
  }
  config.headers['Content-Type'] = "application/json; charset=utf-8";
  config.url = host + config.url;
  // console.log("========config==============>", config)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  
  response.headers['Content-Type'] = 'application/json; charset=utf-8'
  response.headers['Access-Control-Allow-Origin'] = '*'
  

  const resultStatus = response.status;
  if (resultStatus == 200) {
    if(response.data.status == 20000){

    } else if(response.data.status == 40600 || response.data.status == 40601) {

       // 成功创建订单后清空checked缓存，清空以数字为key存储的数据
       const checkedKeyCache = localStorage
       const checkedKeyList = Object.keys(checkedKeyCache)
       checkedKeyList.forEach(key => {
           if (typeof Number(key) == "number" && !isNaN(Number(key))) {
               localStorage.removeItem(key)
           }
       });
      Toast.show("登录失效，请重新登录")
      // 登录失效，重新登陆
      // Logout()
      // Modal.confirm({
      //   title: '登录过期',
      //   content: <div>登录已过期，请重新登录</div>,
      //   onConfirm:()=>{
         
      //   }
        
      // })
    }else{
      Toast.show(response.data.msg)
    }
  }
  // console.log("===返回结果==>", response.data)
  return response.data;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  console.log('featch|>请求错误', JSON.stringify(error));
  error.msg = error.message;
  return Promise.reject(error);
});




export const fetchPost = (url, params, config) => {
  // console.log("------请求参数-----",params);
  return new Promise((resolve, reject) => {
    service.post(url, params)
      .then(function (response) {
        console.log("------response请求-----",response);
        resolve(response)
      })
      .catch(function (error) {
        console.log("------error-----",error);
        reject(error)
      });
  })

  
}
export const fetchPostUrl=(url, params, config) =>{
  return new Promise((resolve, reject) => {
    let ret = '';
    for (let it in params) {
      ret +=
        `${encodeURIComponent(it)}=${encodeURIComponent(params[it])}&`;
    }
    ret = ret.slice(0, -1);
    url = `${url}?${ret}`;
    service
      .post(url, params, config)
      .then(
        (response) => {
          resolve(response);
        },
        (err) => {
          reject(err);
        },
      )
      .catch((error) => {
        reject(error);
      });
  });
}

// get请求
export const fetchGet = function (url, params, config) {
  // console.log("------请求参数-----",params);
  return service.get(url, { params: params, ...config })
}

// post请求
// export const fetchPost = function <t>(url: string, params?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<t>> {

 
//   return service.post(url, params, config)
// }

