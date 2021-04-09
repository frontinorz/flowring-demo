import axios from 'axios'
import { API_URL, API_KEY } from './settings'

export async function apiGetDiscover (query) {
  const res = await axios.get(API_URL + '/discover/movie?api_key=' + API_KEY + query)
  return res
}
