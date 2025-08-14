// 상품 데이터 관련 커스텀 훅
import { useQuery } from '@tanstack/react-query';
import productService from '../services/product-service';

export const useProducts = () => {
  const {
    data: products = [],
    isLoading: productsLoading,
    error: productsError
  } = useQuery({
    queryKey: ['products'],
    queryFn: productService.getAllProducts,
  });

  const {
    data: categories = [],
    isLoading: categoriesLoading,
    error: categoriesError
  } = useQuery({
    queryKey: ['categories'],
    queryFn: productService.getCategories,
  });

  return {
    products,
    productsLoading,
    productsError,
    categories,
    categoriesLoading,
    categoriesError,
  };
};

// 특정 상품 정보를 가져오는 커스텀 훅
export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => productService.getProduct(id),
  });
};

// 특정 카테고리의 상품들을 가져오는 커스텀 훅
export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ['products', category],
    queryFn: () => productService.getProductsByCategory(category),
    enabled: !!category && category !== 'all',
  });
};
