import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import sharesReducer from '../slices/sharesSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    shares: sharesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
