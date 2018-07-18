import axios from 'axios'
import { API_HOST } from '../config/index.js'

axios.defaults.baseURL = API_HOST

const API = {
  async postRequest (id) {
    try {
      const response = axios.post(`/some/${id}`, {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }, {
        headers: {
          'header': 'value'
        }
      })
      console.log(response)
      return response
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request)
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
      }
      console.log(error.config)
      throw new Error(error)
    }
  },

  async getUser (user) {
    try {
      const response = await axios.get(`/${user}`)
      return response
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default API
