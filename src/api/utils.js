// 放置 axios 在 api 錯誤時的處理
import router from '@/router'
import store from '@/store'

const toError = () => {
  router.replace({
    name: 'Error'
  })
}

export const errorHandler = (status, msg) => {
  store.commit('setAlert', true)
  store.commit('setAlertMsg', msg)
  switch (status) {
    case 401:
      toError()
      break
    default:
      break
  }
}
