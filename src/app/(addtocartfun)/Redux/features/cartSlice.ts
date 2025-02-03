"use client"
import { createSlice } from '@reduxjs/toolkit'
// import type { RootState } from '../store'
import { Cart } from '@/app/utils/Types'

// Define the initial state using that type
const initialState: Cart[] = []

export const cartSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {}
})

export const {} = cartSlice.actions

export default cartSlice.reducer
