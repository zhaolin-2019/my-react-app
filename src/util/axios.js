import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:9000'

//请求拦截
axios.interceptors.request.use((config)=>{
    config.headers = {
        "Content-Type": "application/json",
      };
  console.log('config',config)
  return config
},(error)=>{
    return Promise.reject(error)
})
//响应拦截
axios.interceptors.response.use((response)=>{
  return response
},(error)=>{
    return Promise.reject(error)
})

/**
 * 封装get方法
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
export function get(url,params={}){
    return new Promise((resolve,reject)=>{
        axios.get(url,{params:params})
        .then((response)=>{
            resolve(response.data)
        })
        .catch((error)=>{
            reject(error)
        })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url,data){
    return new Promise((resolve,reject)=>{
        axios.post(url,data)
        .then((response)=>{
            resolve(response.data)
        })
        .catch((error)=>{
            reject(error)
        })
    })
}

//返回统一接口
export default function(fetch,url,param){
   return new Promise((resolve,reject)=>{
       switch (fetch){
           case "get":
                console.log("begin a get request,and url:",url);
                get(url,param)
                .then((response)=>{
                    resolve(response)
                })
                .catch(function(error){
                    console.log("get request GET failed",error)
                    reject(error)
                })
            break;
            case "post":
                console.log("begin a post request,and url:",url);
                post(url,param)
                .then((response)=>{
                    resolve(response)
                })
                .catch((error)=>{
                    console.log("post request GET failed",error)
                    reject(error)
                })
            break;
            default: break;
       }
   })
}

