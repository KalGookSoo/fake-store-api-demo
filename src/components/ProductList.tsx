'use client';

import { useQuery } from '@tanstack/react-query';
import productService from '@/services/product-service';
import ProductCard from './ProductCard';
import { useState } from 'react';

export default function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 모든 카테고리 가져오기
  const categoriesQuery = useQuery({
    queryKey: ['categories'],
    queryFn: productService.getCategories
  });

  // 선택된 카테고리에 따라 상품 가져오기
  const productsQuery = useQuery({
    queryKey: ['products', selectedCategory],
    queryFn: () =>
      selectedCategory ? productService.getProductsByCategory(selectedCategory) : productService.getAllProducts()
  });

  // 로딩 상태 처리
  if (categoriesQuery.isLoading) {
    return <div className="text-center py-10">카테고리 로딩 중...</div>;
  }

  if (categoriesQuery.isError) {
    return <div className="text-center py-10 text-red-500">카테고리 로딩 오류</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">가짜 스토어 상품</h1>

      {/* 카테고리 필터 */}
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-2">카테고리</h2>
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-3 py-1 rounded-full text-sm ${
              selectedCategory === null ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            전체
          </button>
          {categoriesQuery.data?.map((category) => (
            <button
              key={category}
              className={`px-3 py-1 rounded-full text-sm capitalize ${
                selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 상품 그리드 */}
      {productsQuery.isLoading ? (
        <div className="text-center py-10">상품 로딩 중...</div>
      ) : productsQuery.isError ? (
        <div className="text-center py-10 text-red-500">상품 로딩 오류</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsQuery.data?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
