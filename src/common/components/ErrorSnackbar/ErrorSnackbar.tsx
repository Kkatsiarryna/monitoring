import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar"
import Alert from "@mui/material/Alert"
import { useAppSelector } from "../../hooks/useAppSelector"
import { selectAppError, setAppError } from "../../../app/appSlice"
import { useAppDispatch } from "../../hooks/useAppDispatch"

export const ErrorSnackbar = () => {
  const error = useAppSelector(selectAppError)

  const dispatch = useAppDispatch()

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === "clickaway") {
      return
    }

    dispatch(setAppError({ error: null }))
  }

  return (
    <div>
      <Snackbar open={error !== null} autoHideDuration={12000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" variant="outlined" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  )
}
