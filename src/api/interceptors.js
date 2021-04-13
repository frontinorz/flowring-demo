import axios from 'axios'
import { errorHandler } from './utils'

axios.interceptors.response.use(
  async res => {
    // console.log(res.config.url, res.data)
    return res
  },
  async error => {
    const { response } = error
    if (response) {
      // 成功發送請求並 response，但有 error
      errorHandler(response.status, response.data.status_message)
      return Promise.reject(error)
    } else {
      // 成功發送請求但沒有 response
      return Promise.reject(error)
    }
  }
)
