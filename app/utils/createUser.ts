import API from '../services/api';

const createUser = async (id: number) => {
  let data;
  try {
    data = await API.getUser(id);
  } catch (err) {
    console.error(err);
  }
  return data;
};
export default createUser;
