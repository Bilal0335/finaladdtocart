"use client"
import { createSlice } from '@reduxjs/toolkit'
// import type { RootState } from '../store'
import { IProduct } from '@/app/utils/Types'
import { product } from '@/app/utils/Mock'


// Define the initial state using that type
const initialState: IProduct[] = product

export const productSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {}
})

export const {} = productSlice.actions

export default productSlice.reducer
