import API from '../api'

export default async function createUser (id) {
  let data = {}
  try {
    data = await API.getUser(id)
  } catch (err) {
    console.log(err)
  }
  return data
}
