import axios from 'axios'
import { API_URL, API_KEY } from './settings'

export async function apiGetDiscover (query) {
  const res = await axios.get(API_URL + '/discover/movie?api_key=' + API_KEY + query)
  return res
}

export const apiGetGeneresList = async () => {
  const res = await axios.get(API_URL + '/genre/movie/list?api_key=' + API_KEY + '&language=zh-TW')
  return res
}
