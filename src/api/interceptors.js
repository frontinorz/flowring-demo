import axios from 'axios'

axios.interceptors.response.use(
  async res => {
    console.log(res.config.url, res.data)

    return res
  },
  async error => {
    window.alert('Fail to access', error.config.url)

    return Promise.reject(error)
  }
)
