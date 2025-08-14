# Fake Store API 데모

이 프로젝트는 Next.js 애플리케이션에서 TanStack React Query와 Axios를 사용하여 [Fake Store API](https://fakestoreapi.com/)와 상호작용하는 방법을 보여줍니다.

## 기능

- 데이터 페칭, 캐싱 및 상태 관리를 위한 **TanStack React Query**
- HTTP 요청을 위한 **Axios**
- 타입 안전성을 위한 **TypeScript**
- App Router를 사용한 **Next.js 15**
- 카테고리 필터링이 있는 상품 목록
- 반응형 디자인

## 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx    # React Query Provider가 있는 루트 레이아웃
│   ├── page.tsx      # 메인 페이지 컴포넌트
│   └── providers.tsx # React Query 프로바이더 설정
├── components/
│   ├── ProductCard.tsx # 개별 상품 표시
│   └── ProductList.tsx # 필터링이 있는 상품 목록
├── hooks/
│   ├── useCart.ts       # 장바구니 기능을 위한 커스텀 훅
│   ├── useProducts.ts   # 상품 데이터를 위한 커스텀 훅
│   └── useUI.ts         # UI 상태를 위한 커스텀 훅
├── services/
│   ├── api-client.ts    # Axios 인스턴스 구성
│   └── product-service.ts # 상품 관련 API 서비스
└── store/
    ├── index.ts         # Redux 스토어 구성
    └── slices/          # Redux 슬라이스
        ├── cartSlice.ts # 장바구니 상태 슬라이스
        └── uiSlice.ts   # UI 상태 슬라이스
```

## 시작하기

먼저, 의존성을 설치하세요:

```bash
npm install
```

그런 다음, 개발 서버를 실행하세요:

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

## API 통합

이 애플리케이션은 다음 Fake Store API 엔드포인트를 사용합니다:

- `GET /products` - 모든 상품 가져오기
- `GET /products/{id}` - 단일 상품 가져오기
- `GET /products/categories` - 모든 카테고리 가져오기
- `GET /products/category/{category}` - 특정 카테고리의 상품 가져오기

## 더 알아보기

- [TanStack React Query 문서](https://tanstack.com/query/latest/docs/react/overview)
- [Axios 문서](https://axios-http.com/docs/intro)
- [Fake Store API 문서](https://fakestoreapi.com/docs)
- [Next.js 문서](https://nextjs.org/docs)
