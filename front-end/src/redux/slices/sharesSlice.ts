import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { IShare } from '../../@types/interfaces.d';

import { fakeAPI } from '../../helpers/fakeAPI';

export interface IShareState {
  selectedShareCode: string;
  sharesList: IShare[]
}

const initialState: IShareState = {
  selectedShareCode: '',
  sharesList: fakeAPI,
};

export const sharesSlice = createSlice({
  name: 'shares',
  initialState,
  reducers: {
    saveSelectedShare: (state, action: PayloadAction<string>) => {
      state.selectedShareCode = action.payload;
    },
  },
});

export const { saveSelectedShare } = sharesSlice.actions;

export default sharesSlice.reducer;
