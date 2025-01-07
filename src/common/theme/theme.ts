import { createTheme } from "@mui/material/styles"
import { ThemeMode } from "../../app/appSlice"

export const getTheme = (themeMode: ThemeMode) => {
  return createTheme({
    typography: {
      fontFamily: " 'Plus Jakarta Sans','Roboto', 'Helvetica', 'Arial', sans-serif", // Замените на нужный вам шрифт
    },
    palette: {
      mode: themeMode === "light" ? "light" : "dark",
      primary: {
        // main: "#2196f3",
        main: "#1877F2",
      },
      background: {
        default: themeMode === "light" ? "#F4F7FE" : "#121212", // Замените #ffffff на нужный вам цвет
      },
      text: {
        primary: themeMode === "light" ? "#1B2559" : "#ffffff", // Добавьте это
      },
    },
  })
}
