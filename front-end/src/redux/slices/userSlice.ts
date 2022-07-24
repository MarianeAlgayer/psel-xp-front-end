import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
              id: share.id,
              code: share.code,
              qtd: (share.qtd + action.payload.qtd),
              value: share.value,
            };
          }

          return share;
        });
      }
    },
    sellShare: (state, action: PayloadAction<IShare>) => {
      const foundShare = state.investments.shares
        .find(({ code }) => action.payload.code === code) as IShare;

      if (foundShare.qtd - action.payload.qtd === 0) {
        state.investments.shares = state.investments.shares
          .filter((share) => share === action.payload);
      }

      state.investments.shares = state.investments.shares.map((share) => {
        if (share.code === action.payload.code) {
          return {
            id: share.id,
            code: share.code,
            qtd: (share.qtd - action.payload.qtd),
            value: share.value,
          };
        }

        return share;
      });
    },
    deposit: (state, action: PayloadAction<number>) => {
      state.account.balance += action.payload;
    },
    withdraw: (state, action: PayloadAction<number>) => {
      state.account.balance -= action.payload;
    },
  },
});

export const {
  saveEmail, buyShare, sellShare, deposit, withdraw,
} = userSlice.actions;

export default userSlice.reducer;
