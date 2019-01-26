import API from '../services/api'

export default async function createUser (id) {
  let data = {}
  try {
    data = await API.getUser(id)
  } catch (err) {
    console.error(err)
  }
  return data
}
