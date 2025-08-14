import axios from 'axios';

// 기본 설정으로 Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
