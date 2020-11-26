import {request} from './request'

export const GET_TOP_SONGS = (data) => {
  return request('/v1/top/songs', data, 'GET')
}

export const LOGIN = (data) => {
  return request('/v1/login/cellphone', data, 'POST')
}
