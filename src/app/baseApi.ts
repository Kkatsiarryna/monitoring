import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"

export const baseApi = createApi({
  reducerPath: "monitoringApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: () => ({}),
  keepUnusedDataFor: 30,
  refetchOnFocus: true,
  refetchOnReconnect: true,
})
