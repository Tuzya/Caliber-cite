'use client'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IListOperatives } from '../../types/src';



export const getListOperativesThunk = createAsyncThunk<IListOperatives[]>(
  '/operatives/nickname/assault',
  async (): Promise<IListOperatives[]> => {
    const { data } = await axios<IListOperatives[]>(`${baseUrl}/operatives/nickname/assault`);
    return data;
  },
);

