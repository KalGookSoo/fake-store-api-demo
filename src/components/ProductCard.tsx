'use client';

import Image from 'next/image';
import { Product } from '@/services/product-service';
import { useState } from 'react';

// 상품 카드 컴포넌트 속성 인터페이스
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // 이미지 로딩 오류 상태 관리
  const [imageError, setImageError] = useState(false);

  // 대체 이미지 URL
  const fallbackImageUrl = '/placeholder-product.svg';

  return (
    <div className="flex flex-col border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 bg-white p-4 flex items-center justify-center">
        <Image
          src={imageError ? fallbackImageUrl : product.image}
          alt={product.title}
          width={120}
          height={120}
          style={{ objectFit: 'contain' }}
          className="max-h-40"
          onError={() => setImageError(true)}
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-medium text-sm mb-1 line-clamp-2 h-10" title={product.title}>
          {product.title}
        </h3>
        <p className="text-xs text-gray-500 mb-2 capitalize">{product.category}</p>
        <div className="flex items-center mt-auto">
          <span className="font-bold">${product.price.toFixed(2)}</span>
          <div className="ml-auto flex items-center">
            <span className="text-xs mr-1">★ {product.rating.rate}</span>
            <span className="text-xs text-gray-500">({product.rating.count})</span>
          </div>
        </div>
      </div>
    </div>
  );
}
