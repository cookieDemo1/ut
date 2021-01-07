import Axios from 'axios'

Axios.defaults.timeout = 3000
Axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const service = Axios.create({})

service.interceptors.request.use(
  (config) => {
    const token = 'hello'
    if (token) {
      config.headers.token = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      // 移除token
      this.router.push('/login')
      return
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
