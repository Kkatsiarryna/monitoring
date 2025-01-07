import { configureStore, ThunkDispatch, UnknownAction } from "@reduxjs/toolkit"
import { baseApi } from "./baseApi"
import { setupListeners } from "@reduxjs/toolkit/query"
import { appReducer, appSlice } from "./appSlice"

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [appSlice.name]: appReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, UnknownAction>
