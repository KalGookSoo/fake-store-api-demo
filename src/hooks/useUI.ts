// UI 상태 관련 커스텀 훅
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import {
  toggleCart,
  showNotification,
  clearNotification,
  setLoading
} from '@/store/slices/uiSlice';

interface NotificationData {
  status: 'success' | 'error' | 'pending';
  title: string;
  message: string;
}

export const useUI = () => {
  const dispatch = useDispatch();
  const ui = useSelector((state: RootState) => state.ui);

  const toggleCartHandler = () => {
    dispatch(toggleCart());
  };

  const showNotificationHandler = (notificationData: NotificationData) => {
    dispatch(showNotification(notificationData));
  };

  const clearNotificationHandler = () => {
    dispatch(clearNotification());
  };

  const setLoadingHandler = (isLoading: boolean) => {
    dispatch(setLoading(isLoading));
  };

  return {
    ui,
    toggleCart: toggleCartHandler,
    showNotification: showNotificationHandler,
    clearNotification: clearNotificationHandler,
    setLoading: setLoadingHandler,
  };
};
