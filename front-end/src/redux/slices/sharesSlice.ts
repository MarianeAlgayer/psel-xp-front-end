import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchShares } from '../../helpers/fetchShares';

import { IShare } from '../../@types/interfaces.d';

export interface IShareState {
  selectedShareCode: string;
  sharesList: IShare[]
  status: 'success' | 'loading' | 'failed';
}

const initialState: IShareState = {
  selectedShareCode: '',
  sharesList: [],
  status: 'success',
};

export const getSharesAsync = createAsyncThunk(
  'shares/getSharesAsync',
  () => fetchShares(),
);

export const sharesSlice = createSlice({
  name: 'shares',
  initialState,
  reducers: {
    saveSelectedShare: (state, action: PayloadAction<string>) => {
      state.selectedShareCode = action.payload;
    },
    addShare: (state, action: PayloadAction<IShare>) => {
      state.sharesList = state.sharesList.map((share) => {
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
    },
    removeShare: (state, action: PayloadAction<IShare>) => {
      state.sharesList = state.sharesList.map((share) => {
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSharesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSharesAsync.fulfilled, (state, action) => {
        state.sharesList = action.payload;
        state.status = 'success';
      })
      .addCase(getSharesAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { saveSelectedShare, addShare, removeShare } = sharesSlice.actions;

export default sharesSlice.reducer;
