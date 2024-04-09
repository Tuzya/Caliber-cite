'use client'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { operativesApi } from '../api/operativesApi';

const rootReducer: any = combineReducers({
  [operativesApi.reducerPath]: operativesApi.reducer,

})

export let store: null | ReturnType<typeof configureStore> | any = null;
export const setupStore = () => {
  store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false }).concat([
        operativesApi.middleware
      ]),
  })
  
  return store
}
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
