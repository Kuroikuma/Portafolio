import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  technologies: [],
  image,
}

export const projectDetailSlice = createSlice({
  name: 'projectDetail',
  initialState,
  reducers: {
    setTechnologies: (state, action) => {
      state.technologies = action.payload
    },
    setImage: (state, action) => {
      state.image = action.payload
    },
  },
})

export const { setTechnologies, setImage } = projectDetailSlice.actions

export default projectDetailSlice.reducer
