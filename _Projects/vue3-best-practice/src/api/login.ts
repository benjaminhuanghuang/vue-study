import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.common['Authorization'] = 'XMLHttpRequest';


export async function login(email: string, password: string) {
  const response = await axios.post('/api/auth/login', { email, password });
  return response.data;
}