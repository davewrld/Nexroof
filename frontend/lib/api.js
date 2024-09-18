import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProducts = async () => {
    const response = await apiClient.get('/products');
    return response.data;
  };


export const fetchProductById = async (id) => {
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
};