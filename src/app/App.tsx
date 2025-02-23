import React from "react"
import { Header } from "../common/components/Header/Header"
import { Routing } from "../common/routing/Routing"
import { useAppSelector } from "../common/hooks/useAppSelector"
import { selectThemeMode } from "./appSlice"
import { ThemeProvider } from "@mui/material/styles"
import { getTheme } from "../common/theme/theme"
import CssBaseline from "@mui/material/CssBaseline"
import { ErrorSnackbar } from "../common/components/ErrorSnackbar/ErrorSnackbar"

function App() {
  const themeMode = useAppSelector(selectThemeMode)
  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <CssBaseline />
      <Header />
      <Routing />
      <ErrorSnackbar />
    </ThemeProvider>
  )
}

export default App
