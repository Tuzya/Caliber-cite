'use client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const defaultUrl = '/operatives/nickname/assault'
export const operativesApi = createApi({
  reducerPath: 'operativesApi',
  baseQuery: fetchBaseQuery({baseUrl: `http://localhost:3002/api`}),
  tagTypes: ['Public'],
  endpoints: builder => ({
    getOperatives: builder.query({
      query() {
        return {
          url: `${defaultUrl}/`,
          
        }
      },
      providesTags: ['Public'],
    }),
  }),
})

export const {
  useGetOperativesQuery
} = operativesApi
