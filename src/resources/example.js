import Api from './api/example-api'

const path = '/task'

const Example = {
  all () {
    return Api.request(path)
  },

  delete (id) {
    return Api.request(`${path}/${id}`, { method: 'DELETE' })
  },

  create (data) {
    return Api.request(path, { data, method: 'POST' })
  },

  update (data) {
    return Api.request(`${path}/${data.id}`, { data, method: 'PUT' })
  },

  save (data) {
    return data.id ? Example.update(data) : Example.create(data)
  }
}

export default Example
