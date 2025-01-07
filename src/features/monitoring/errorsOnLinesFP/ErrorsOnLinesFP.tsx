import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import React from "react"
import { StyledTypography } from "../../../common/styles/styles"

export const ErrorsOnLinesFP = () => {
  return (
    <Box my={4}>
      <Paper elevation={3} style={{ borderRadius: "15px" }}>
        <Box p={2}>
          <StyledTypography variant="h5" gutterBottom>
            Ошибки на линиях ФП
          </StyledTypography>
        </Box>
        <Typography sx={{ p: "0 10px 10px 20px" }}>Нет ошибок на всех линиях</Typography>
      </Paper>
    </Box>
  )
}
