import apiClient from './api-client';

// 상품 인터페이스 정의
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Fake Store API와 상호작용하는 메서드를 가진 상품 서비스
const productService = {
  // 모든 상품 가져오기
  getAllProducts: async (): Promise<Product[]> => {
    const response = await apiClient.get<Product[]>('/products');
    return response.data;
  },

  // ID로 단일 상품 가져오기
  getProduct: async (id: number): Promise<Product> => {
    const response = await apiClient.get<Product>(`/products/${id}`);
    return response.data;
  },

  // 특정 카테고리의 상품 가져오기
  getProductsByCategory: async (category: string): Promise<Product[]> => {
    const response = await apiClient.get<Product[]>(`/products/category/${category}`);
    return response.data;
  },

  // 모든 카테고리 가져오기
  getCategories: async (): Promise<string[]> => {
    const response = await apiClient.get<string[]>('/products/categories');
    return response.data;
  }
};

export default productService;
