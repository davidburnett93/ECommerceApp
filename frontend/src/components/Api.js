import axios from 'axios';

const baseURL = 'https://ecommerce-app-backend-5suc.onrender.com/api';

const instance = axios.create({
  baseURL: baseURL,
});

export default instance;
