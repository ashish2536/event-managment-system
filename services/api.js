import axios from 'axios';

const API_URL = 'https://your-backend-url/api';

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/users/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/users/login`, userData);
  return response.data;
};

export const createEvent = async (eventData, token) => {
  const response = await axios.post(`${API_URL}/events`, eventData, {
    headers: { Authorization: token }
  });
  return response.data;
};
