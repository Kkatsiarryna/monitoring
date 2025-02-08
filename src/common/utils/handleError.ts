import {
  BaseQueryApi,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryReturnValue,
} from "@reduxjs/toolkit/dist/query/react"
import { setAppError } from "../../app/appSlice"

export const handleError = (
  api: BaseQueryApi,
  result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>,
) => {
  let error = "Some error"

  if (result.error) {
    switch (result.error.status) {
      case "FETCH_ERROR":
        error = result.error.error
        break

      default:
        error = JSON.stringify(result.error)
        break
    }

    api.dispatch(setAppError({ error }))
  }
}
