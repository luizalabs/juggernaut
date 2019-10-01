import axios from 'axios'
import qs from 'qs'
import defaultsDeep from 'lodash.defaultsdeep'
import { validateRequest, onResponseError } from './interceptors'

const getConfig = () => ({
  headers: {
    Accept: 'application/json',
    'Accept-Language': 'pt-BR'
  },
  paramsSerializer (params) {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  }
})

const api = (baseURL, config) => {
  const axiosApi = axios.create({
    mode: 'cors',
    baseURL,
    ...config
  })

  axiosApi.request = (path, options) => {
    const mergedOptions = defaultsDeep(options, getConfig())

    return axiosApi(path, mergedOptions).then(resp => resp.data)
  }

  axiosApi.interceptors.request.use(validateRequest)
  axiosApi.interceptors.response.use(null, onResponseError)

  return axiosApi
}

export default api
