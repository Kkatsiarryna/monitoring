import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { handleError } from "../common/utils/handleError"

export const baseApi = createApi({
  reducerPath: "monitoringProjectApi",

  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: "/",
      //credentials: 'include',
      // prepareHeaders: (headers) => {
      //     headers.set("Content-type", "appliation/json");
      //     return headers;
      //   },
    })(args, api, extraOptions)

    //debugger
    handleError(api, result)
    return result
  },
  endpoints: () => ({}),
  tagTypes: ["Logs"],

  keepUnusedDataFor: 30,
  refetchOnFocus: true,
  refetchOnReconnect: true,
})
