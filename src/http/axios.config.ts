import axios from 'axios'
import { mockMapper } from './mockMapper'
import { Toast } from 'antd-mobile'

// axios.defaults.baseURL = 'http://127.0.0.1:8080'

axios.interceptors.request
.use(config => {
  Toast.loading('加载中...', 0)
  return config
}, err => {
  return Promise.reject(err)
})

axios.interceptors.response
.use(res => {
  setTimeout(() => Toast.hide(), 1000)
  return res
}, err => {
  // console.dir(err)
  setTimeout(() => Toast.hide(), 1000)
  let key:string = err.config.url.split('?')[0] as string
  // key = key.replace(axios.defaults.baseURL || '', '')
  return {
    // 响应信息错误则返回假数据
    data: mockMapper[key]
  }
})

export default axios