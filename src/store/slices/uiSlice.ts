// UI 상태 관리를 위한 슬라이스
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  isCartOpen: boolean;
  notification: {
    status: 'success' | 'error' | 'pending' | null;
    title: string;
    message: string;
  };
  isLoading: boolean;
}

const initialState: UIState = {
  isCartOpen: false,
  notification: {
    status: null,
    title: '',
    message: '',
  },
  isLoading: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },

    showNotification(
      state,
      action: PayloadAction<{
        status: 'success' | 'error' | 'pending';
        title: string;
        message: string;
      }>
    ) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },

    clearNotification(state) {
      state.notification = {
        status: null,
        title: '',
        message: '',
      };
    },

    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { toggleCart, showNotification, clearNotification, setLoading } = uiSlice.actions;
export default uiSlice.reducer;
