import {request} from './request'

export const GET_TOP_SONGS = (data) => {
  return request('/v1/top/songs', data, 'GET')
}
