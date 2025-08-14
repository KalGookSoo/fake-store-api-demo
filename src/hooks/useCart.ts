// 장바구니 관련 커스텀 훅
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { addItemToCart, removeItemFromCart, clearCart } from '@/store/slices/cartSlice';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const addItem = (product: Product) => {
    dispatch(addItemToCart(product));
  };

  const removeItem = (id: number) => {
    dispatch(removeItemFromCart(id));
  };

  const clear = () => {
    dispatch(clearCart());
  };

  return {
    cart,
    addItem,
    removeItem,
    clear,
  };
};
