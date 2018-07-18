import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

import createUser from '../app/utils/createUser'
import { API_HOST } from '../app/config/index.js'

test('createUser should get data from the server', (done) => {
  let mock = new MockAdapter(axios)
  let userId = 'zaporozhetsAnton'
  let data = { id: 1, name: 'Zaporozhets Anton' }
  mock.onGet(`${API_HOST}/${userId}`).reply(200, data)
  createUser(userId)
    .then(response => {
      expect(response.data).toEqual(data)
      done()
    })
    .catch(err => {
      console.log('oops', err)
      done()
    })
})
