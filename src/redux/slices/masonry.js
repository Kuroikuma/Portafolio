import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const masonrySlice = createSlice({
  name: 'masonry',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { setData } = masonrySlice.actions

export default masonrySlice.reducer
