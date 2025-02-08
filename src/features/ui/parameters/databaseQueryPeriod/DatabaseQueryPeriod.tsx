import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import { StyledTypography } from "../../../../common/styles/styles"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

export const DatabaseQueryPeriod = () => {
  return (
    <Box my={2}>
      <Paper elevation={3} style={{ borderRadius: "15px" }}>
        <Box p={2} pb={0}>
          <StyledTypography variant="h5" gutterBottom>
            Период запросов в базу
          </StyledTypography>
        </Box>
        <Box p={2} display="flex" alignItems="center">
          <TextField
            id="outlined-basic"
            label="Вводить в секундах"
            variant="outlined"
            size="small"
            style={{ marginRight: "8px" }}
          />
          <Button variant="contained">Изменить</Button>
        </Box>
      </Paper>
    </Box>
  )
}
