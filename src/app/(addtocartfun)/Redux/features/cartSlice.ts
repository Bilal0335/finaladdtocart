'use client'
import { createSlice } from '@reduxjs/toolkit'
// import type { RootState } from '../store'
import { Cart } from '@/app/utils/Types'

// Define the initial state using that type
const initialState: Cart[] = []

export const cartSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addtocart (state, action) {
      const uuid = Math.floor(1000 + Math.random() * 9000)
      const newobj = { ...action.payload, uuid }
      state.push(newobj)
    }
  }
})

export const { addtocart } = cartSlice.actions

export default cartSlice.reducer
