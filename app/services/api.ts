import axios from 'axios';
import { API_HOST } from '../config';

axios.defaults.baseURL = API_HOST;

const API = {
  async postRequest(id: number) {
    try {
      const response = axios.post(
        `/some/${id}`,
        {
          firstName: 'Fred',
          lastName: 'Flintstone'
        },
        {
          headers: {
            header: 'value'
          }
        }
      );
      console.log(response);
      return response;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.error(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error', error.message);
      }
      console.error(error.config);
      throw new Error(error);
    }
  },

  async getUser(user: number) {
    try {
      const response = await axios.get(`/${user}`);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
};

export default API;
