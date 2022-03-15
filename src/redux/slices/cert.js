import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCert, getCertPagination } from '../../services/services.cert'
import { setError } from './ui'

const initialState = {
  url: '',
  next: '',
  previous: '',
  loading: false,
}

export const fetchCert = createAsyncThunk(
  '@cert/fetchCert',
  async (setData, { dispatch }) => {
    try {
      dispatch(toggleLoading())
      getCert().then((response) => {
        const imageFilter = response.result.map((item) => item.image)
        setData(imageFilter)
        dispatch(setNext(response.next))
        dispatch(setPrevious(response.previous))
        dispatch(toggleLoading())
      })
    } catch (error) {
      dispatch(setError(true))
    }
  }
)

export const fetchCertPagination = createAsyncThunk(
  '@cert/fetchCertPagination',
  async (setData, { dispatch, getState }) => {
    console.log('fetchCertPagination')
    try {
      const currentState = getState()
      dispatch(toggleLoading())
      getCertPagination(currentState.cert.url).then((response) => {
        const imageFilter = response.result.map((item) => item.image)
        setData(imageFilter)
        dispatch(setNext(response.next))
        dispatch(setPrevious(response.previous))
        dispatch(toggleLoading())
      })
    } catch (error) {
      dispatch(setError(true))
    }
  }
)

export const certSlice = createSlice({
  name: 'cert',
  initialState,
  reducers: {
    setNext: (state, action) => {
      state.next = action.payload
    },
    setPrevious: (state, action) => {
      state.previous = action.payload
    },
    setUrl: (state, action) => {
      state.url = action.payload
    },
    toggleLoading: (state) => {
      state.loading = !state.loading
    },
  },
})

export const { setNext, setPrevious, setUrl, toggleLoading } = certSlice.actions

export default certSlice.reducer
