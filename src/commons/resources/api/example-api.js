import api from './base'

const baseApi = api('http://5ba128a58c533d0014ea0fc2.mockapi.io/todo/v1')

const Api = {
  request (path, options) {
    return baseApi.request(path, options)
  }
}

export default Api
