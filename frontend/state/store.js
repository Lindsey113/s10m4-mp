import { configureStore } from '@reduxjs/toolkit'
import quotesReducer from './quotesSlice'
import { qoutesApi } from './quotesApi'

export const store = configureStore({
  reducer: {
    quotesState: quotesReducer,
    [qoutesApi.reducerPath]: qoutesApi.reducer
  },
  middleware: getDefault => getDefault().concat(
    qoutesApi.middleware
  )
})
