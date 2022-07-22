import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { IShare } from '../../@types/share.d';

interface IUserState {
  email: string;
  investments: {
    shares: IShare[];
  }
  account: {
    balance: number;
  }
}

const initialState: IUserState = {
  email: '',
  investments: {
    shares: [],
  },
  account: {
    balance: 0,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { saveEmail } = userSlice.actions;

export default userSlice.reducer;
