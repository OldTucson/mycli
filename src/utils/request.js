import axios from 'axios'

export const request = (url = '', data = {}, type = 'GET') => {
  return new Promise(function (resolve, reject) {
    // eslint-disable-next-line no-unused-expressions
    axios(url, data, type).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
