import { baseApi } from "../../app/baseApi"

export const logsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getWeather: build.query<any, void>({
      query: () => {
        return {
          url: "",
          method: "GET",
        }
      },
      providesTags: ["Logs"],
    }),
  }),
})

export const { useGetWeatherQuery } = logsApi
