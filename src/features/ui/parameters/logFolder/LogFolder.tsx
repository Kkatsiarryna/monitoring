import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import { StyledTypography } from "../../../../common/styles/styles"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

export const LogFolder = () => {
  return (
    <Box my={2}>
      <Paper elevation={3} style={{ borderRadius: "15px" }}>
        <Box p={2} pb={0}>
          <StyledTypography variant="h5" gutterBottom>
            Путь к папке с логами
          </StyledTypography>
        </Box>
        <Box p={2} display="flex" alignItems="center">
          <TextField
            id="outlined-basic"
            label="Корсчет"
            variant="outlined"
            size="small"
            style={{ marginRight: "8px" }}
          />
          <Button variant="contained">Изменить</Button>
        </Box>
        <Box p={2} display="flex" alignItems="center">
          <TextField
            id="outlined-basic"
            label="Состояние платежей"
            variant="outlined"
            size="small"
            style={{ marginRight: "8px" }}
          />
          <Button variant="contained">Изменить</Button>
        </Box>
        <Box p={2} display="flex" alignItems="center">
          <TextField id="outlined-basic" label="СМП" variant="outlined" size="small" style={{ marginRight: "8px" }} />
          <Button variant="contained">Изменить</Button>
        </Box>
        <Box p={2} display="flex" alignItems="center">
          <TextField
            id="outlined-basic"
            label="Витрины"
            variant="outlined"
            size="small"
            style={{ marginRight: "8px" }}
          />
          <Button variant="contained">Изменить</Button>
        </Box>
        <Box p={2} display="flex" alignItems="center">
          <TextField id="outlined-basic" label="ФП" variant="outlined" size="small" style={{ marginRight: "8px" }} />
          <Button variant="contained">Изменить</Button>
        </Box>
      </Paper>
    </Box>
  )
}
