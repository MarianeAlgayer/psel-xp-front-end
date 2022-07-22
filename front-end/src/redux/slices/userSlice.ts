import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { IShare } from '../../@types/interfaces.d';

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
    buyShare: (state, action: PayloadAction<IShare>) => {
      const foundShare = state.investments.shares
        .find(({ code }) => action.payload.code === code);

      if (!foundShare) {
        state.investments.shares.push(action.payload);
      } else {
        state.investments.shares = state.investments.shares.map((share) => {
          if (share.code === action.payload.code) {
            return {
              code: share.code,
              qtd: (share.qtd + action.payload.qtd),
              value: share.value,
            };
          }

          return share;
        });
      }
    },
  },
});

export const { saveEmail, buyShare } = userSlice.actions;

export default userSlice.reducer;
