'use client'
import { createSlice } from '@reduxjs/toolkit';
import { getListOperativesThunk } from './ListOperativesThunk';
import { IListOperatives } from '../../types/src';

export interface IListOperativesSlice {
    allNicknameAssault: IListOperatives[]
}


const initialState: IListOperativesSlice = {
    allNicknameAssault: [],


};

export const allNicknameAssaultSlice = createSlice({
  name: 'allNicknameAssaultSlice',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getListOperativesThunk.fulfilled, (state, { payload }) => {
      state.allNicknameAssault = payload;
    });
    builder.addCase(getListOperativesThunk.rejected, (state) => state);

  
  },
});

// export const {  } = allNicknameAssaultSlice.actions;

export default allNicknameAssaultSlice.reducer;
