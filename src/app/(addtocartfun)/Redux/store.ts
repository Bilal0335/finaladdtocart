"use client"
import { configureStore } from '@reduxjs/toolkit'
import productSlice from './features/productSlice'
import cartSlice from './features/cartSlice'
// ...

export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice
  }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
