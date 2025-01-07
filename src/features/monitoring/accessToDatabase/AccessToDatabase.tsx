import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import React from "react"
import { StyledTypography } from "../../../common/styles/styles"

export const AccessToDatabase = () => {
  return (
    <Box my={4}>
      <Paper elevation={3} style={{ borderRadius: "15px" }}>
        <Box p={2}>
          <StyledTypography variant="h5" gutterBottom>
            Время последнего обращения к базе
          </StyledTypography>
        </Box>
        <Typography sx={{ p: "0 10px 10px 20px" }}>Какая-то дата и время</Typography>
      </Paper>
    </Box>
  )
}
