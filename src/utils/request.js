/**
 * 封装接口返回 promise对象
 */
// import { getCookie } from '@/utils/common.js';
// import axios from 'axios';
import qs from 'qs'
const axios = require('axios')
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
export const request = (url, data = {}, type = 'GET', config = {}) => {
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      // 拼接请求地址
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        url = url + '?' + dataStr.substring(0, dataStr.length - 1)
      };
      // 发送get请求
      promise = axios.get(url, config)
    } else {
      if (Object.prototype.toString.call(data) !== '[object FormData]') {
        // 发送post请求 //qs.stringify
        promise = axios.post(url, qs.stringify(data), config)
      } else {
        promise = axios.post(url, data, config)
      }
    }

    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}
