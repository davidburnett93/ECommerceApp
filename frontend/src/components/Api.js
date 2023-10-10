import axios from 'axios';

const baseURL = 'https://ecommerce-app-backend-5suc.onrender.com/';

const instance = axios.create({
  baseURL: baseURL,
});

export default instance;
